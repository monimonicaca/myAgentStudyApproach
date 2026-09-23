# WriteSelf 后端登录与注册流程 —— 按数据流向详细讲解

## 项目技术栈

- **框架**: Spring Boot 3 + Spring Security 6
- **认证**: JWT（访问令牌 + 刷新令牌双令牌机制）
- **持久层**: Spring Data JPA + Hibernate + MySQL 8
- **架构**: DDD 分层（Controller → Application（UseCase）→ Domain → Infrastructure）

## 全局架构概览

```
HTTP POST /ws/users/login
        │
        ▼
┌─────────────────────────────────────┐
│  UserLoginController (Controller)   │  ← 接收 JSON → LoginRequest record
│  调用 loginUserUseCase.execute()    │
└──────────────────┬──────────────────┘
                   │
        ┌──────────▼──────────┐
        │ LoginUserCommand    │  ← DTO: {username, password}
        └──────────┬──────────┘
                   │
        ┌──────────▼─────────────────────┐
        │   LoginUserUseCase (Service)    │  ← 核心业务逻辑
        │   1. 构建认证令牌               │
        │   2. 委托 AuthenticationManager │
        │   3. 签发 JWT + Refresh Token   │
        └──────────┬─────────────────────┘
                   │
        ┌──────────▼──────────────────┐
        │     AuthenticationManager   │  ← Spring Security 核心
        │     → DaoAuthenticationProvider
        │       → UserDetailsServiceImpl│
        └──────────┬──────────────────┘
                   │
        ┌──────────▼──────────────┐
        │ UserDetailsServiceImpl  │  ← 从数据库加载用户
        │ → UserAccountRepository │
        └──────────┬──────────────┘
                   │
        ┌──────────▼───────────────┐
        │ UserAccountRepositoryAdapter│  ← 端口适配器实现
        │ → SpringDataUserAccountRepo│
        └──────────┬────────────────┘
                   │
        ┌──────────▼──────────┐
        │  MySQL: USER_ACCOUNT │  ← 物理表
        └─────────────────────┘
                   │ (认证成功)
                   ▼
        ┌──────────────────────┐
        │   JwtProvider         │  ← 签发 JWT access token
        │   RefreshTokenService │  ← 签发 refresh token (存DB)
        └──────────┬───────────┘
                   │
                   ▼
         LoginResult → LoginResponse → ApiResponse<LoginResponse>
                   │
                   ▼
         HTTP 200 JSON 响应给客户端
```

---

## 第一层：HTTP 请求入口 —— Controller 层

### 1.1 请求进入路径

```
POST /ws/users/login
Content-Type: application/json

{
  "username": "zhangsan",
  "password": "mypassword123"
}
```

### 1.2 SecurityConfig 白名单放行

**文件**: `src/main/java/com/monigj/writeselfbackend/init/SecurityConfig.java`

```java
.requestMatchers("/ws/users/register", "/ws/users/login", "/ws/users/refresh").permitAll()
```

登录接口在 `SecurityFilterChain` 中被标记为 `permitAll()`，无需携带 Token 即可访问。

关键配置点：
- **无状态会话**: `SessionCreationPolicy.STATELESS`（第61行）—— 服务端不维护 Session，每次请求靠 JWT 独立验证
- **JWT 过滤器**: `JwtAuthenticationFilter` 插入到 `UsernamePasswordAuthenticationFilter` 之前（第62行），对登录请求虽然经过过滤器但无 `Authorization` header 时直接放行 `filterChain.doFilter()`
- **CSRF 禁用**: 因为是 REST API + 无状态 Token 认证模式

### 1.3 UserLoginController

**文件**: `src/main/java/com/monigj/writeselfbackend/user/controller/UserLoginController.java`

```java
@PostMapping("/login")
public ApiResponse<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
```

**数据流**:

```
HTTP Request Body (JSON)
    ↓ JSON 反序列化
LoginRequest record { @NotBlank username, @NotBlank password }
    ↓ @Valid 触发 Jakarta Bean Validation
    ├─ username 为空 → MethodArgumentNotValidException → 全局异常处理器 → 400 BAD_REQUEST
    └─ password 为空 → 同上
    ↓ 校验通过
构造 LoginUserCommand(request.username(), request.password())
    ↓
loginUserUseCase.execute(command)
    ↓ 返回
LoginResult { userId, username, accessToken, refreshToken, expiresAt }
    ↓ 映射
LoginResponse { accessToken, refreshToken, userId, username, expiresAt }
    ↓ 包装
ApiResponse<LoginResponse>(code="200", message="success", data=response)
    ↓ JSON 序列化
HTTP Response 200
```

**请求 DTO — LoginRequest**:
```java
// src/main/java/.../user/dto/LoginRequest.java
public record LoginRequest(@NotBlank String username, @NotBlank String password) {}
```
使用 Java 17 record 类型，`@NotBlank` 注解保证参数不能为 null 或空字符串。校验失败时抛出的 `MethodArgumentNotValidException` 由全局异常处理器捕获。

**响应 DTO — LoginResponse**:
```java
// src/main/java/.../user/dto/LoginResponse.java
public record LoginResponse(String accessToken, String refreshToken, Long userId,
                            String username, String expiresAt) {}
```

**命令 DTO — LoginUserCommand**:
```java
// src/main/java/.../user/application/commands/LoginUserCommand.java
public record LoginUserCommand(String username, String password) {}
```
Controller 将 DTO 转换为命令对象，解耦 HTTP 层与业务层。

---

## 第二层：核心业务逻辑 —— UseCase 层

### 2.1 LoginUserUseCase.execute()

**文件**: `src/main/java/com/monigj/writeselfbackend/user/application/LoginUserUseCase.java`

这是登录流程的核心编排器，完整流程如下：

```java
public LoginResult execute(LoginUserCommand command) {
```

#### 步骤 1: 构建认证令牌

```java
UsernamePasswordAuthenticationToken authToken =
    new UsernamePasswordAuthenticationToken(command.username(), command.password());
```

`UsernamePasswordAuthenticationToken` 是 Spring Security 的标准认证令牌对象：
- 第一个参数 `principal` = 用户名
- 第二个参数 `credentials` = 密码明文
- 此时令牌状态是 **未认证** (`authenticated = false`)

#### 步骤 2: 委托认证管理器

```java
Authentication authentication = authenticationManager.authenticate(authToken);
```

`authenticationManager.authenticate()` 是 Spring Security 认证的核心入口。调用链如下：

```
AuthenticationManager (ProviderManager)
    ↓ 遍历 AuthenticationProvider 列表
DaoAuthenticationProvider
    ↓ 调用 retrieveUser()
UserDetailsServiceImpl.loadUserByUsername(username)
    ↓ 调用 UserAccountRepository.findByUsername()
UserAccountRepositoryAdapter → SpringDataUserAccountRepo → MySQL
    ↓ 返回 UserPrincipal
DaoAuthenticationProvider
    ↓ 调用 additionalAuthenticationChecks()
    ├─ 检查 isAccountNonLocked() → 已锁定 → LockedException
    ├─ 检查 isEnabled() → 已禁用 → DisabledException
    └─ 检查 passwordEncoder.matches(rawPassword, hash) → 不匹配 → BadCredentialsException
    ↓ 全部通过
返回已认证的 UsernamePasswordAuthenticationToken (authenticated=true)
```

#### 步骤 3: 提取认证主体

```java
UserPrincipal principal = (UserPrincipal) authentication.getPrincipal();
```

认证成功返回的 `Authentication` 对象中，`principal` 是从数据库加载的 `UserPrincipal` 实例，包含：
- `id`: 用户数据库主键
- `username`: 用户名
- `password`: 密码哈希值（此时已认证成功）
- `locked` / `enabled`: 账户状态布尔值

#### 步骤 4: 签发 JWT 访问令牌

```java
String token = jwtProvider.generate(authentication);
```

进入 `JwtProvider.generate()` —— 详见下文第三层。

#### 步骤 5: 签发刷新令牌

```java
String refreshToken = refreshTokenService.issue(principal.getId()).token();
```

进入 `RefreshTokenService.issue()` —— 详见下文第三层。

#### 步骤 6: 计算过期时间并返回

```java
Instant expiresAt = Instant.now().plusMillis(jwtProvider.getExpirationMillis());
return new LoginResult(principal.getId(), principal.getUsername(), token, refreshToken, expiresAt);
```

`expiration` 配置来源于 `application.yaml`:
```yaml
jwt:
  expiration: 1800000   # 30 分钟
```

**结果对象 — LoginResult**:
```java
// src/main/java/.../user/application/LoginResult.java
public record LoginResult(Long userId, String username, String accessToken,
                          String refreshToken, Instant expiresAt) {}
```

#### 步骤 7: 认证失败异常映射

```java
catch (BadCredentialsException e)    → AuthenticationException.loginFailed()
catch (LockedException e)            → AuthenticationException.locked()
catch (DisabledException e)          → AuthenticationException.disabled()
catch (AuthenticationException e)    → AuthenticationException.loginFailed()
```

每种 Spring Security 的底层异常都被翻译成业务异常 `AuthenticationException`，携带对应的 `ErrorCode`：

| Spring Security 异常 | 触发条件 | 业务 ErrorCode | 业务消息 |
|---|---|---|---|
| `BadCredentialsException` | 密码不匹配 | `LOGIN_FAILED` | "invalid username or password" |
| `LockedException` | `isAccountNonLocked() == false` | `ACCOUNT_LOCKED` | "account is locked" |
| `DisabledException` | `isEnabled() == false` | `ACCOUNT_DISABLED` | "account is disabled" |
| 其他 `AuthenticationException` | 备选兜底 | `LOGIN_FAILED` | "invalid username or password" |

**安全设计**: 用户不存在（`UsernameNotFoundException`）和密码错误都用同样的 `LOGIN_FAILED` 错误码和消息，防止信息泄露。

---

## 第三层：认证基础设施 —— Infrastructure 安全层

### 3.1 UserDetailsServiceImpl —— 从数据库加载用户

**文件**: `src/main/java/com/monigj/writeselfbackend/user/infrastructure/security/UserDetailsServiceImpl.java`

```java
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserAccount account = userAccountRepository.findByUsername(Username.of(username))
        .orElseThrow(() -> new UsernameNotFoundException("user not found: " + username));
    return new UserPrincipal(account.getId(), account.getUsername().value(),
        account.getPasswordHash().value(), account.getStatus());
}
```

**数据流**:

```
"zhangsan"
    ↓ Username.of("zhangsan")  —— 值对象，格式校验
Username{value="zhangsan"}
    ↓ userAccountRepository.findByUsername()
UserAccountRepositoryAdapter → SpringDataUserAccountRepo.findByUsername("zhangsan")
    ↓ JDBC → MySQL
SELECT * FROM USER_ACCOUNT WHERE username = 'zhangsan'
    ↓ 结果集 → UserAccountJpaEntity
    ↓ toDomain() 映射
UserAccount { id=1001, username, passwordHash, status }
    ↓ 构造
UserPrincipal { id=1001, username="zhangsan", password="$2a$10$...",
                locked=false, enabled=true }
```

**UserPrincipal 与账户状态的映射**:
```java
// UserPrincipal 构造函数
this.locked = status == UserAccountStatus.LOCKED;       // status=2 → locked=true
this.enabled = status == UserAccountStatus.ACTIVE;      // status=1 → enabled=true
// DISABLED(status=0): locked=false, enabled=false
```

### 3.2 DaoAuthenticationProvider —— Spring Security 默认密码认证

在 `SecurityConfig` 中配置：

```java
@Bean
public DaoAuthenticationProvider authenticationProvider() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);
    provider.setPasswordEncoder(passwordEncoder());  // BCryptPasswordEncoder
    return provider;
}
```

内部认证过程：
1. **`retrieveUser()`**: 调用 `UserDetailsServiceImpl.loadUserByUsername()` 加载用户
2. **`preAuthenticationChecks()`**: 检查 `isAccountNonLocked()`, `isEnabled()`, `isAccountNonExpired()`
3. **`additionalAuthenticationChecks()`**: 调用 `passwordEncoder.matches(rawPassword, hash)` 验证密码
4. 全部通过后创建已认证的 `UsernamePasswordAuthenticationToken`

### 3.3 JwtProvider —— JWT 令牌签发与验证

**文件**: `src/main/java/com/monigj/writeselfbackend/user/infrastructure/security/JwtProvider.java`

#### 初始化配置

```java
public JwtProvider(@Value("${jwt.secret}") String secret,
        @Value("${jwt.expiration}") long expiration,
        @Value("${jwt.refresh-expiration}") long refreshExpiration,
        SnowflakeId snowflakeId) {
    this.secretKey = Keys.hmacShaKeyFor(secret.getBytes());
    this.expiration = expiration;          // 1800000ms = 30分钟
    this.refreshExpiration = refreshExpiration;  // 2592000000ms = 30天
    this.snowflakeId = snowflakeId;
}
```

从 `application.yaml` 注入：
```yaml
jwt:
  secret: ${JWT_SECRET:writeself-jwt-secret-key-min-256-bits-long-for-hs256}
  expiration: 1800000          # 访问令牌 30 分钟
  refresh-expiration: 2592000000  # 刷新令牌 30 天
```

- `secret` 支持环境变量覆盖（`${JWT_SECRET:...}`），生产应使用安全随机密钥
- HMAC-SHA256 签名算法（`Keys.hmacShaKeyFor`）

#### 生成访问令牌 (Access Token)

```java
public String generate(Authentication authentication) {
    UserPrincipal principal = (UserPrincipal) authentication.getPrincipal();
    Date now = new Date();
    Date expiry = new Date(now.getTime() + expiration);
    String token = Jwts.builder()
            .subject(principal.getId().toString())    // sub: "1001"
            .claim("type", "access")                  // 类型标识
            .claim("username", principal.getUsername()) // 方便日志排查
            .issuedAt(now)                             // iat
            .expiration(expiry)                        // exp
            .signWith(secretKey)                       // HMAC-SHA256 签名
            .compact();
    return token;
}
```

**JWT Payload 结构**:
```json
{
  "sub": "1001",
  "type": "access",
  "username": "zhangsan",
  "iat": 1695100000,
  "exp": 1695101800
}
```

#### 生成刷新令牌 (Refresh Token)

```java
public RefreshTokenResult generateRefreshToken(Long userId) {
    String jti = UUID.randomUUID().toString();  // 唯一标识，用于数据库关联
    long iatValue = snowflakeId.nextId();       // Snowflake ID 作为 iat 防冲突
    Instant now = Instant.now();
    Instant expiry = now.plusMillis(refreshExpiration);  // 30 天后
    String token = Jwts.builder()
            .subject(userId.toString())
            .claim("type", "refresh")
            .claim("jti", jti)
            .claim("iat", iatValue)
            .issuedAt(Date.from(now))
            .expiration(Date.from(expiry))
            .signWith(secretKey)
            .compact();
    return new RefreshTokenResult(token, jti, expiry);
}
```

**Refresh Token JWT Payload 结构**:
```json
{
  "sub": "1001",
  "type": "refresh",
  "jti": "550e8400-e29b-41d4-a716-446655440000",  // UUID, DB 关联键
  "iat": 12345678901234567,                        // Snowflake ID
  "iat_dt": 1695100000,
  "exp": 1697692000
}
```

#### 令牌解析与验证

```java
public Optional<Claims> parseClaims(String token) {
    return Optional.of(Jwts.parser()
        .verifyWith(secretKey)
        .build()
        .parseSignedClaims(token)
        .getPayload());
}

public Optional<String> validate(String token) {
    Claims claims = parseClaims(token).orElse(null);
    return claims != null ? Optional.of(claims.getSubject()) : Optional.empty();
}
```

使用 `jjwt` 新版 API：
- `verifyWith(secretKey)` 验证 HMAC 签名
- `parseSignedClaims()` 解析并校验 `exp`、签名字段
- 校验失败返回 `Optional.empty()`，不抛异常

### 3.4 RefreshTokenService —— 刷新令牌生命周期管理

**文件**: `src/main/java/com/monigj/writeselfbackend/user/application/RefreshTokenService.java`

#### issue() —— 签发刷新令牌（登录时调用）

```java
@Transactional
public RefreshTokenResult issue(Long userId) {
    RefreshTokenResult result = jwtProvider.generateRefreshToken(userId);
    RefreshTokenJpaEntity entity = new RefreshTokenJpaEntity();
    entity.setId(snowflakeId.nextId());
    entity.setUserId(userId);
    entity.setJti(result.jti());
    entity.setTokenHash(sha256(result.token()));  // SHA-256 哈希后存储
    entity.setExpiresAt(toLocalDateTime(result.expiresAt()));
    repository.save(entity);
    return result;
}
```

**数据流**:

```
jwtProvider.generateRefreshToken(userId)
    ↓ 生成 JWT + UUID jti + Snowflake iat + 30天过期
RefreshTokenResult { token, jti, expiresAt }
    ↓ + Snowflake 主键 + SHA-256(token)
RefreshTokenJpaEntity { id, userId, jti, tokenHash, expiresAt, revoked=false }
    ↓ JDBC INSERT
REFRESH_TOKEN 表
```

**安全要点**:
- 数据库存的是 `SHA-256(token)` 而非明文 Token，即使数据库泄露也无法直接使用
- `jti` 是 JWT 内和数据库的关联键，UUID 全局唯一
- `revoked` 字段支持令牌吊销（refresh rotation 时置为 true）

#### refresh() —— 刷新令牌轮换（续期时调用）

```java
@Transactional
public RefreshResult refresh(String oldRefreshToken) {
    // 1. 解析 Claims，验证签名和过期
    Claims claims = jwtProvider.parseClaims(oldRefreshToken)
        .orElseThrow(AuthenticationException::tokenInvalid);
    // 2. 确认是 refresh 类型
    if (!"refresh".equals(claims.get("type", String.class)))
        throw AuthenticationException.tokenInvalid();
    // 3. 根据 jti 查找数据库记录
    String jti = claims.get("jti", String.class);
    RefreshTokenJpaEntity oldEntity = repository.findByJtiAndRevokedFalse(jti)
        .orElseThrow(AuthenticationException::tokenNotFound);
    // 4. 吊销旧令牌（rotation）
    oldEntity.setRevoked(true);
    repository.save(oldEntity);
    // 5. 签发新令牌对
    RefreshTokenResult result = jwtProvider.generateRefreshToken(userId);
    // ... 存入新记录 ...
    // 6. 签发新 access token
    String accessToken = jwtProvider.generateAccessToken(userId);
    return new RefreshResult(userId, accessToken, result.token(), expiresAt);
}
```

刷新令牌轮换机制：每次使用 refresh token 后旧令牌即被吊销，防止重放攻击。

---

## 第四层：持久化层 —— 数据如何落盘

### 4.1 表结构

**文件**: `src/main/resources/sql/01-user_account.sql`

```sql
-- USER_ACCOUNT 表
CREATE TABLE IF NOT EXISTS USER_ACCOUNT (
    id            BIGINT       NOT NULL,        -- Snowflake 主键
    username      VARCHAR(64)  NOT NULL,         -- 用户名，唯一索引
    phone         VARCHAR(32)  NULL,             -- 手机号（可选）
    password_hash VARCHAR(255) NOT NULL,          -- BCrypt 密文，${bcrypt}...
    nickname      VARCHAR(64),                   -- 昵称
    status        INT          NOT NULL DEFAULT 1, -- 0=DISABLED 1=ACTIVE 2=LOCKED
    created_at    TIMESTAMP    NOT NULL,
    updated_at    TIMESTAMP    NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_user_account_username (username)
);

-- REFRESH_TOKEN 表
CREATE TABLE IF NOT EXISTS REFRESH_TOKEN (
    id            BIGINT       NOT NULL,         -- Snowflake 主键
    user_id       BIGINT       NOT NULL,         -- 关联用户
    jti           VARCHAR(64)  NOT NULL,         -- JWT jti 声明，唯一索引
    token_hash    VARCHAR(255) NOT NULL,          -- SHA-256(token)
    expires_at    TIMESTAMP    NOT NULL,          -- 过期时间
    revoked       BOOLEAN      NOT NULL DEFAULT FALSE, -- 是否已吊销
    created_at    TIMESTAMP    NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_refresh_token_jti (jti)
);
```

### 4.2 JPA 实体层

**UserAccountJpaEntity**: 实体与表字段一一映射。
- `status` 字段通过 `UserAccountStatusConverter` 实现 `INT <-> UserAccountStatus` 转换
- `@PrePersist` / `@PreUpdate` 自动维护 `createdAt` / `updatedAt`

**SpringDataUserAccountRepository**: Spring Data JPA 接口，方法按命名约定自动生成 SQL：
- `existsByUsername(String)` → `SELECT COUNT(*) ... WHERE username = ?`
- `findByUsername(String)` → `SELECT * ... WHERE username = ?`

### 4.3 仓储适配器 (DDD Adapter)

**UserAccountRepositoryAdapter**: 实现领域层的 `UserAccountRepository` 接口，负责 JPA 实体与领域对象的双向映射：

```
领域对象 UserAccount  ←→ JPA 实体 UserAccountJpaEntity

toDomain(entity):
    UserAccount.reconstruct(
        entity.getId(),
        Username.of(entity.getUsername()),     // 值对象封装
        Phone.of(entity.getPhone()),           // 值对象封装
        PasswordHash.fromHash(entity.getPasswordHash()), // 值对象封装
        entity.getNickname(),
        entity.getStatus(),
        entity.getCreatedAt(),
        entity.getUpdatedAt()
    )

save(account):
    构造 UserAccountJpaEntity → repository.save(entity)
    → 返回 reconstruct 后的 UserAccount（含数据库生成的 ID）
```

### 4.4 领域值对象 —— 充血模型

| 值对象 | 位置 | 职责 |
|---|---|---|
| `Username` | `user/domain/Username.java` | 正则校验 `[a-zA-Z][a-zA-Z0-9_]{2,63}`，3-64 位字母开头 |
| `PasswordHash` | `user/domain/PasswordHash.java` | 封装 BCrypt 密文，提供 `fromRaw`(编码)、`fromHash`(重建)、`matches`(校验) |
| `Phone` | `user/domain/Phone.java` | 电话号码封装 |
| `UserAccountStatus` | `user/domain/UserAccountStatus.java` | 枚举：`DISABLED(0)`, `ACTIVE(1)`, `LOCKED(2)` |

---

## 第五层：后续请求认证 —— 过滤器层

登录成功后，客户端拿到 `accessToken`，后续请求在 `Authorization` header 中携带：

```
GET /ws/diaries
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
```

### 5.1 JwtAuthenticationFilter

**文件**: `src/main/java/com/monigj/writeselfbackend/user/infrastructure/security/JwtAuthenticationFilter.java`

```java
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
        FilterChain filterChain) throws ServletException, IOException {
    String header = request.getHeader("Authorization");
    if (header != null && header.startsWith("Bearer ")) {
        String token = header.substring(7);  // 截取 "Bearer " 之后的部分
        jwtProvider.validate(token).ifPresentOrElse(
            userId -> {
                // 验证通过 → 设置 SecurityContext
                UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(userId, null, Collections.emptyList());
                SecurityContextHolder.getContext().setAuthentication(auth);
            },
            () -> {
                // 验证失败 → 清空上下文（防止旧 Token 残留）
                SecurityContextHolder.clearContext();
            });
    }
    filterChain.doFilter(request, response);  // 无论如何都继续处理请求
}
```

**数据流**:

```
Authorization: Bearer <token>
    ↓ 提取 token
    ↓ jwtProvider.validate(token)
    ├─ 签名验证 + 过期检查 → Optional.of("1001")
    │   └─ SecurityContextHolder.setAuthentication(...)
    │       ↓ 后续 Controller 可通过 @AuthenticationPrincipal 获取 userId
    └─ 校验失败 → Optional.empty()
        └─ SecurityContextHolder.clearContext()
    ↓
filterChain.doFilter() 继续执行
```

**关键设计点**:
- `OncePerRequestFilter` 保证每次请求只过滤一次
- 即使 Token 无效也只清上下文并不拦截（`doFilter` 一定会执行），让 SecurityConfig 的 `.anyRequest().authenticated()` 来拒绝未认证请求
- 白名单路径（login/register/refresh）虽然也经过此过滤器，但没有 `Authorization` header 所以直接放行

---

## 完整登录请求的数据生命周期（时序图）

```
客户端                    Controller                         安全层                         数据库
  │                          │                                 │                             │
  │ POST /ws/users/login     │                                 │                             │
  │ {"username":"zhangsan",  │                                 │                             │
  │  "password":"123456"}    │                                 │                             │
  │─────────────────────────►│                                 │                             │
  │                          │ @Valid 校验通过                │                             │
  │                          │                                 │                             │
  │                          │ LoginUserUseCase.execute()      │                             │
  │                          │────────────────────────────────►│                             │
  │                          │                                 │ authenticate("zhangsan",     │
  │                          │                                 │              "123456")      │
  │                          │                                 │       ↓                     │
  │                          │                                 │ UserDetailsServiceImpl.      │
  │                          │                                 │   loadUserByUsername()      │
  │                          │                                 │─────────────────────────────►│
  │                          │                                 │      findByUsername("zhangsan")│
  │                          │                                 │◄─────────────────────────────│
  │                          │                                 │  返回 UserPrincipal         │
  │                          │                                 │                             │
  │                          │                                 │ BCryptPasswordEncoder.matches│
  │                          │                                 │   ("123456", "$2a$10$...")  │
  │                          │                                 │       ↓ 匹配成功            │
  │                          │                                 │ 安全检查: locked? enabled?  │
  │                          │                                 │       ↓ 全部通过            │
  │                          │                                 │ 返回 authenticated Token     │
  │                          │◄────────────────────────────────│                             │
  │                          │                                 │                             │
  │                          │ jwtProvider.generate(           │                             │
  │                          │     authentication)             │                             │
  │                          │────────────────────────────────►│                             │
  │                          │◄──── accessToken (JWT)          │                             │
  │                          │                                 │                             │
  │                          │ refreshTokenService.issue(      │                             │
  │                          │     userId)                     │                             │
  │                          │────────────────────────────────►│                             │
  │                          │                                 │ generateRefreshToken(userId)│
  │                          │                                 │ INSERT REFRESH_TOKEN        │
  │                          │                                 │─────────────────────────────►│
  │                          │◄──── refreshToken               │                             │
  │                          │                                 │                             │
  │                          │ LoginResult { userId,           │                             │
  │                          │   username, accessToken,        │                             │
  │                          │   refreshToken, expiresAt }     │                             │
  │                          │                                 │                             │
  │  ApiResponse {            │                                 │                             │
  │    code: "200",           │                                 │                             │
  │    data: {                │                                 │                             │
  │      accessToken: "...",  │                                 │                             │
  │      refreshToken: "...", │                                 │                             │
  │      userId: 1001,        │                                 │                             │
  │      username: "zhangsan",│                                 │                             │
  │      expiresAt: "..."     │                                 │                             │
  │    }                      │                                 │                             │
  │  }                        │                                 │                             │
  │◄─────────────────────────│                                 │                             │
```

---

## 异常处理链路

```
Controller 层
    ↓ @Valid 校验失败
    MethodArgumentNotValidException
        ↓ GlobalExceptionHandler.handleValidation()
        HTTP 400 + ApiResponse { code:"VALIDATION_ERROR", error:{fieldErrors: {...}} }

Security 层
    ↓ 用户不存在
    UsernameNotFoundException
        ↓ GlobalExceptionHandler.handleUsernameNotFound()
        HTTP 401 + ApiResponse { code:"LOGIN_FAILED", message:"invalid username or password" }
    ↓ 密码错误
    BadCredentialsException → AuthenticationException.loginFailed()
        ↓ GlobalExceptionHandler.handleAuthentication()
        HTTP 401 + ApiResponse { code:"LOGIN_FAILED", message:"invalid username or password" }
    ↓ 账号锁定
    LockedException → AuthenticationException.locked()
        ↓ GlobalExceptionHandler.handleAuthentication()
        HTTP 401 + ApiResponse { code:"ACCOUNT_LOCKED", message:"account is locked" }
    ↓ 账号禁用
    DisabledException → AuthenticationException.disabled()
        ↓ GlobalExceptionHandler.handleAuthentication()
        HTTP 401 + ApiResponse { code:"ACCOUNT_DISABLED", message:"account is disabled" }

Infrastructure 层
    ↓ 数据库异常
    DataAccessException → InfrastructureException.database()
        ↓ GlobalExceptionHandler.handleInfrastructure()
        HTTP 500 + ApiResponse { code:"DB_ERROR", message:"Database error: ..." }

通用兜底
    ↓ 未捕获异常
    Exception
        ↓ GlobalExceptionHandler.handleGeneral()
        HTTP 500 + ApiResponse { code:"INTERNAL_ERROR", message:"Unexpected server error" }
```

---

## 配置要点小结

| 配置项 | 值 | 说明 |
|---|---|---|
| `jwt.secret` | `writeself-jwt-secret-key-min-256-bits-long-for-hs256` | 默认开发密钥，生产环境通过环境变量 `JWT_SECRET` 覆盖 |
| `jwt.expiration` | `1800000` ms (30分钟) | Access Token 有效期 |
| `jwt.refresh-expiration` | `2592000000` ms (30天) | Refresh Token 有效期 |
| 会话策略 | `STATELESS` | 无状态，每次请求独立验证 |
| CSRF | `disabled` | REST API 不需要 CSRF 防护 |
| 密码编码 | `BCryptPasswordEncoder` | Spring Security 默认 BCrypt |
| 登录白名单 | `/ws/users/login`, `/ws/users/register`, `/ws/users/refresh` | `permitAll()` |
| 其他路径 | `.anyRequest().authenticated()` | 全部需要 JWT 验证 |

---

## 架构设计中的模式与原则

1. **DDD 六边形架构**: Controller → Application UseCase → Domain Repository 接口 → Infrastructure Adapter 实现，核心业务逻辑不依赖框架细节
2. **值对象封装**: `Username`、`PasswordHash`、`Phone` 都是不可变值对象，在构造时完成自校验，确保非法状态无法创建
3. **命令/结果分离**: `LoginUserCommand`（输入）和 `LoginResult`（输出）都是不可变 record，职责单一
4. **安全令牌轮换**: Refresh Token 每次使用后吊销旧令牌、签发新令牌，防止重放攻击
5. **数据库不存明文 Token**: Refresh Token 在数据库以 `SHA-256` 哈希存储
6. **错误信息脱敏**: 无论用户不存在还是密码错误，统一返回 "invalid username or password"

---

---

# 注册流程

## 注册流程架构概览

```
HTTP POST /ws/users/register
        │
        ▼
┌──────────────────────────────────────────┐
│  UserRegistrationController (Controller) │  ← 接收 JSON → RegisterUserRequest record
│  调用 registerUserUseCase.execute()      │
└───────────────────┬──────────────────────┘
                    │
         ┌──────────▼──────────┐
         │ RegisterUserCommand │  ← DTO: {username, password, nickname?}
         └──────────┬──────────┘
                    │
         ┌──────────▼──────────────────────┐
         │   RegisterUserUseCase (Service) │  ← 核心业务逻辑
         │   1. Username 值对象校验        │
         │   2. 用户名唯一性检查           │
         │   3. 构造 UserAccount（加密密码）│
         │   4. 持久化保存                 │
         └──────────┬──────────────────────┘
                    │
         ┌──────────▼───────────────────┐
         │   UserAccount.register()      │  ← 领域工厂方法（充血模型）
         │   → PasswordHash.fromRaw()    │
         │     → BCryptPasswordEncoderAdapter│
         └──────────┬───────────────────┘
                    │
         ┌──────────▼───────────────────┐
         │ UserAccountRepositoryAdapter │  ← 端口适配器实现
         │ → SpringDataUserAccountRepo  │
         └──────────┬───────────────────┘
                    │
         ┌──────────▼──────────┐
         │ MySQL: USER_ACCOUNT  │  ← 物理表
         └─────────────────────┘
                    │
                    ▼
         RegisterUserResponse → ApiResponse<RegisterUserResponse>
                    │
                    ▼
         HTTP 200 JSON 响应给客户端
```

---

## 第一层：HTTP 请求入口 —— Controller 层

### 1.1 请求进入路径

```
POST /ws/users/register
Content-Type: application/json

{
  "username": "zhangsan",
  "password": "mypassword123",
  "nickname": "张三"        // 可选字段
}
```

### 1.2 SecurityConfig 白名单放行

注册接口与登录接口一样，在 `SecurityConfig.filterChain()` 中被标记为 `permitAll()`：

```java
.requestMatchers("/ws/users/register", "/ws/users/login", "/ws/users/refresh").permitAll()
```

无需 Token 即可访问，`JwtAuthenticationFilter` 因请求无 `Authorization` header 而直接放行。

### 1.3 UserRegistrationController

**文件**: `src/main/java/com/monigj/writeselfbackend/user/controller/UserRegistrationController.java`

```java
@PostMapping("/register")
public ApiResponse<RegisterUserResponse> register(@Valid @RequestBody RegisterUserRequest request) {
    RegisterUserResponse account = registerUserUseCase.execute(new RegisterUserCommand(
            request.username(), request.password(), request.nickname()));
    return ApiResponse.success(account);
}
```

**数据流**:

```
HTTP Request Body (JSON)
    ↓ JSON 反序列化
RegisterUserRequest record { @NotBlank username, @NotBlank password, nickname }
    ↓ @Valid 触发 Jakarta Bean Validation
    ├─ username 为空/空白 → MethodArgumentNotValidException → 400 BAD_REQUEST
    ├─ password 为空/空白 → MethodArgumentNotValidException → 400 BAD_REQUEST
    └─ nickname 为 null → 合法（可选字段，跳过）
    ↓ 校验通过
构造 RegisterUserCommand(username, password, nickname)
    ↓
registerUserUseCase.execute(command)
    ↓ 返回
RegisterUserResponse { username, nickname }
    ↓ 包装
ApiResponse<RegisterUserResponse>(code="200", message="success", data=response)
    ↓ JSON 序列化
HTTP Response 200
```

**请求 DTO — RegisterUserRequest**:
```java
// src/main/java/.../user/dto/RegisterUserRequest.java
public record RegisterUserRequest(
        @NotBlank String username,
        @NotBlank String password,
        String nickname) {}   // 无 @NotBlank，可选
```
与 `LoginRequest` 的区别：多了可选的 `nickname` 字段（无校验注解）。

**响应 DTO — RegisterUserResponse**:
```java
// src/main/java/.../user/dto/RegisterUserResponse.java
public record RegisterUserResponse(String username, String nickname) {}
```

**命令 DTO — RegisterUserCommand**:
```java
// src/main/java/.../user/application/commands/RegisterUserCommand.java
public record RegisterUserCommand(String username, String password, String nickname) {}
```

---

## 第二层：核心业务逻辑 —— UseCase 层

### 2.1 RegisterUserUseCase.execute()

**文件**: `src/main/java/com/monigj/writeselfbackend/user/application/RegisterUserUseCase.java`

这是注册流程的核心编排器，完整流程如下：

```java
public RegisterUserResponse execute(RegisterUserCommand command) {
```

#### 步骤 1: 构造并校验 Username 值对象

```java
Username username = Username.of(command.username());
```

调用 `Username.of()` 工厂方法，内部执行正则校验：

```java
// Username.java
private static final Pattern PATTERN = Pattern.compile("[a-zA-Z][a-zA-Z0-9_]{2,63}");

public static Username of(String value) {
    if (value == null || !PATTERN.matcher(value).matches()) {
        throw new IllegalArgumentException(FORMAT_MESSAGE + ", got: " + value);
    }
    return new Username(value);
}
```

**用户名格式规则**:
- 必须以字母开头（`[a-zA-Z]`）
- 总长度 3-64 位
- 仅包含字母、数字、下划线（`[a-zA-Z0-9_]`）

**注意**: 此处抛出的 `IllegalArgumentException` 会被全局异常处理器捕获，映射为 `VALIDATION_ERROR` → HTTP 400。但要注意——这里的格式校验发生在 `@NotBlank` 之后，属于**业务层校验**，与 Controller 层的 `@Valid` 参数校验是**双重校验**（防御性设计）。

#### 步骤 2: 用户名唯一性检查

```java
if (userAccountRepository.existsByUsername(username)) {
    throw DomainException.duplicateUsername(command.username());
}
```

调用仓储层 `existsByUsername()` 检查用户名是否已被占用：

```
Username{value="zhangsan"}
    ↓ existsByUsername()
UserAccountRepositoryAdapter.existsByUsername()
    ↓ SpringDataUserAccountRepo.existsByUsername("zhangsan")
SELECT COUNT(*) FROM USER_ACCOUNT WHERE username = 'zhangsan'
    ↓ 结果 true（已存在）
throw DomainException.duplicateUsername("zhangsan")
    → ErrorCode.DUPLICATE_USERNAME = "DUPLICATE_USERNAME"
    → message = "username already exists: zhangsan"
    → HTTP 400 BAD_REQUEST
```

#### 步骤 3: 构造 UserAccount（领域工厂方法）

```java
UserAccount account = command.nickname() == null || command.nickname().isBlank()
        ? UserAccount.register(username, command.password(), passwordEncoder)
        : UserAccount.register(username, command.password(), command.nickname(), passwordEncoder);
```

根据 nickname 是否为空，选择两个重载的工厂方法之一：

```java
// UserAccount.java 重载一：无昵称，默认昵称=用户名
public static UserAccount register(Username username, String rawPassword,
        PasswordEncoder passwordEncoder) {
    return register(username, rawPassword, username.value(), passwordEncoder);
}

// UserAccount.java 重载二：指定昵称
public static UserAccount register(Username username, String rawPassword, String nickname,
        PasswordEncoder passwordEncoder) {
    UserAccount account = new UserAccount();
    account.username = username;
    account.passwordHash = PasswordHash.fromRaw(rawPassword, passwordEncoder);  // 关键：加密
    account.nickname = nickname;
    account.status = UserAccountStatus.ACTIVE;   // 默认 ACTIVE(1)
    account.createdAt = LocalDateTime.now();
    account.updatedAt = account.createdAt;
    return account;
}
```

**关键点 — 密码加密链路**:

```
command.password() = "mypassword123"
    ↓ PasswordHash.fromRaw(rawPassword, passwordEncoder)
    ├─ 校验: rawPassword 长度 >= 6，否则 IllegalArgumentException
    └─ passwordEncoder.encode("mypassword123")
        ↓ BCryptPasswordEncoderAdapter.encode()
        ↓ delegate.encode() = BCryptPasswordEncoder
        → "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
    → new PasswordHash("$2a$10$...")
```

**PasswordHash 值对象**:
```java
// PasswordHash.java
private static final int MIN_RAW_LENGTH = 6;

public static PasswordHash fromRaw(String rawPassword, PasswordEncoder encoder) {
    if (rawPassword == null || rawPassword.length() < MIN_RAW_LENGTH) {
        throw new IllegalArgumentException("password must be at least 6 characters");
    }
    return new PasswordHash(encoder.encode(rawPassword));
}
```

**密码规则**:
- 明文密码最低 6 位（领域层校验）
- 密码以 BCrypt 密文形式存储，**绝不保存明文**
- BCrypt 自带随机盐（salt），每次编码结果不同

**领域密码编码器端口 — PasswordEncoder**:
```java
// user/domain/PasswordEncoder.java —— 领域层接口（端口）
public interface PasswordEncoder {
    String encode(String rawPassword);
    boolean matches(String rawPassword, String encodedPassword);
}
```

这是 DDD 六边形架构中的**端口**，由基础设施层的 `BCryptPasswordEncoderAdapter` 实现：

```java
// user/infrastructure/security/BCryptPasswordEncoderAdapter.java
@Component
public class BCryptPasswordEncoderAdapter implements PasswordEncoder {
    private final BCryptPasswordEncoder delegate = new BCryptPasswordEncoder();
    // encode() / matches() 委托给 delegate
}
```

> 注意：领域层定义的是 `user.domain.PasswordEncoder` 接口，而 Spring Security 提供的是 `org.springframework.security.crypto.password.PasswordEncoder`。适配器桥接了两者，保持领域层不依赖框架。

#### 步骤 4: 持久化保存

```java
UserAccount saved = userAccountRepository.save(account);
```

进入仓储适配器，详见第四层。

#### 步骤 5: 构造响应

```java
return new RegisterUserResponse(saved.getUsername().value(), saved.getNickname());
```

---

## 第三层：密码加密基础设施

注册流程不像登录那样经过 Spring Security 的 `AuthenticationManager`，而是**直接调用领域层密码编码器**完成密码加密。区别如下：

| 对比项 | 注册流程 | 登录流程 |
|---|---|---|
| 认证方式 | 无认证，直接创建 | Spring Security `AuthenticationManager` 完整认证 |
| 密码处理 | `PasswordEncoder.encode()`（加密存储） | `PasswordEncoder.matches()`（校验对比） |
| 用户加载 | 不加载，直接 `save()` | `UserDetailsServiceImpl.loadUserByUsername()` 加载 |
| Token 签发 | 不签发 | 签发 access + refresh Token |
| 业务校验 | `existsByUsername()` 唯一性检查 | `UserPrincipal` 状态检查 |

---

## 第四层：持久化层 —— 数据如何落盘

### 4.1 UserAccountRepositoryAdapter.save()

**文件**: `src/main/java/com/monigj/writeselfbackend/user/infrastructure/persistence/UserAccountRepositoryAdapter.java`

```java
@Override
public UserAccount save(UserAccount account) {
    UserAccountJpaEntity entity = new UserAccountJpaEntity();
    entity.setId(snowflakeId.nextId());                    // Snowflake 生成主键
    entity.setUsername(account.getUsername().value());     // "zhangsan"
    entity.setPhone(account.getPhoneValue());              // null
    entity.setPasswordHash(account.getPasswordHash().value()); // "$2a$10$..."
    entity.setNickname(account.getNickname());             // "张三"
    entity.setStatus(account.getStatus());                 // ACTIVE
    try {
        repository.save(entity);
    } catch (DuplicateKeyException e) {
        throw DomainException.duplicateUsername(account.getUsername().value());
    } catch (DataAccessException e) {
        throw InfrastructureException.database(e.getMessage());
    }
    return UserAccount.reconstruct(...);
}
```

**数据流**:

```
UserAccount { username, passwordHash, nickname, status=ACTIVE }
    ↓ + Snowflake 主键 ID
UserAccountJpaEntity { id=1001, username="zhangsan",
                       passwordHash="$2a$10$...", nickname="张三", status=ACTIVE }
    ↓ @PrePersist 自动填充 createdAt/updatedAt
    ↓ JDBC INSERT
INSERT INTO USER_ACCOUNT (id, username, phone, password_hash, nickname, status, created_at, updated_at)
VALUES (1001, 'zhangsan', NULL, '$2a$10$...', '张三', 1, NOW(), NOW())
    ↓ 保存成功
    ↓ toDomain()/reconstruct() 重建领域对象
UserAccount { id=1001, ... }
    ↓ 返回
RegisterUserResponse { username="zhangsan", nickname="张三" }
```

### 4.2 并发唯一性保护 —— 双重防线

注册流程在用户名唯一性上有**两道防线**：

1. **应用层检查**: `existsByUsername()` 提前检查，友好报错
2. **数据库唯一索引**: `UNIQUE KEY uk_user_account_username (username)` 兜底，防止并发竞态

```java
// 第二道防线：数据库层捕获
} catch (DuplicateKeyException e) {
    throw DomainException.duplicateUsername(account.getUsername().value());
}
```

即使两个并发请求同时通过 `existsByUsername()` 检查，数据库唯一索引仍会在 INSERT 时拒绝第二个，抛出 `DuplicateKeyException`，同样映射为 `DUPLICATE_USERNAME`。

### 4.3 主键生成 —— SnowflakeId

```java
entity.setId(snowflakeId.nextId());
```

与登录流程的 `RefreshTokenService.issue()` 一样，使用 `SnowflakeId`（雪花算法）生成全局唯一的分布式 ID，避免数据库自增 ID 在分布式环境下的冲突。

---

## 注册流程完整数据生命周期（时序图）

```
客户端                    Controller                     UseCase                    领域/仓储                 数据库
  │                          │                              │                          │                        │
  │ POST /ws/users/register  │                              │                          │                        │
  │ {"username":"zhangsan",  │                              │                          │                        │
  │  "password":"123456",    │                              │                          │                        │
  │  "nickname":"张三"}      │                              │                          │                        │
  │─────────────────────────►│                              │                          │                        │
  │                          │ @Valid 校验通过              │                          │                        │
  │                          │                              │                          │                        │
  │                          │ RegisterUserUseCase.execute()│                          │                        │
  │                          │─────────────────────────────►│                          │                        │
  │                          │                              │ Username.of("zhangsan")   │                        │
  │                          │                              │   ├─ 格式校验            │                        │
  │                          │                              │   └─ 失败抛 IllegalArgumentException│        │
  │                          │                              │                          │                        │
  │                          │                              │ existsByUsername("zhangsan")│                    │
  │                          │                              │──────────────────────────►│                        │
  │                          │                              │                          │ SELECT COUNT(*) ...    │
  │                          │                              │                          │────────────────────────►│
  │                          │                              │                          │◄────────────────────────│
  │                          │                              │  已存在 → duplicateUsername│                        │
  │                          │                              │  不存在 → 继续            │                        │
  │                          │                              │                          │                        │
  │                          │                              │ UserAccount.register(...) │                        │
  │                          │                              │   └─ PasswordHash.fromRaw │                        │
  │                          │                              │       └─ BCrypt.encode   │                        │
  │                          │                              │          ("123456")      │                        │
  │                          │                              │       → "$2a$10$..."     │                        │
  │                          │                              │                          │                        │
  │                          │                              │ userAccountRepository.save│                        │
  │                          │                              │──────────────────────────►│                        │
  │                          │                              │                          │ INSERT USER_ACCOUNT    │
  │                          │                              │                          │────────────────────────►│
  │                          │                              │                          │◄── 保存成功             │
  │                          │                              │◄── UserAccount(带id)     │                        │
  │                          │                              │                          │                        │
  │  ApiResponse {            │                              │                          │                        │
  │    code:"200",            │                              │                          │                        │
  │    data:{                 │◄─────────────────────────────│                          │                        │
  │      username:"zhangsan", │                              │                          │                        │
  │      nickname:"张三"      │                              │                          │                        │
  │    }                      │                              │                          │                        │
  │  }                        │                              │                          │                        │
  │◄─────────────────────────│                              │                          │                        │
```

---

## 注册流程异常处理链路

```
Controller 层
    ↓ @Valid 校验失败
    MethodArgumentNotValidException
        ↓ GlobalExceptionHandler.handleValidation()
        HTTP 400 + ApiResponse { code:"VALIDATION_ERROR", error:{fieldErrors:{...}} }

UseCase 层
    ↓ 用户名格式非法
    Username.of() → IllegalArgumentException
        ↓ GlobalExceptionHandler.handleIllegalArgument()
        HTTP 400 + ApiResponse { code:"VALIDATION_ERROR", message:"username must be 3-64 chars..." }
    ↓ 密码长度不足
    PasswordHash.fromRaw() → IllegalArgumentException
        ↓ GlobalExceptionHandler.handleIllegalArgument()
        HTTP 400 + ApiResponse { code:"VALIDATION_ERROR", message:"password must be at least 6 characters" }
    ↓ 用户名已存在（应用层检查）
    DomainException.duplicateUsername()
        ↓ GlobalExceptionHandler.handleDomain()
        HTTP 400 + ApiResponse { code:"DUPLICATE_USERNAME", message:"username already exists: zhangsan" }

Infrastructure 层
    ↓ 用户名重复（数据库唯一索引兜底）
    DuplicateKeyException → DomainException.duplicateUsername()
        ↓ GlobalExceptionHandler.handleDomain()
        HTTP 400 + ApiResponse { code:"DUPLICATE_USERNAME", message:"username already exists: zhangsan" }
    ↓ 数据库异常
    DataAccessException → InfrastructureException.database()
        ↓ GlobalExceptionHandler.handleInfrastructure()
        HTTP 500 + ApiResponse { code:"DB_ERROR", message:"Database error: ..." }

通用兜底
    ↓ 未捕获异常
    Exception → GlobalExceptionHandler.handleGeneral()
        HTTP 500 + ApiResponse { code:"INTERNAL_ERROR", message:"Unexpected server error" }
```

---

## 注册与登录流程对比总结

| 维度 | 注册流程 | 登录流程 |
|---|---|---|
| 入口 | `POST /ws/users/register` | `POST /ws/users/login` |
| Controller | `UserRegistrationController` | `UserLoginController` |
| UseCase | `RegisterUserUseCase` | `LoginUserUseCase` |
| 命令对象 | `RegisterUserCommand` | `LoginUserCommand` |
| 核心操作 | 密码加密 + 持久化保存 | 密码校验 + 签发 Token |
| 密码处理 | `PasswordEncoder.encode()` | `PasswordEncoder.matches()` |
| 唯一性检查 | `existsByUsername()` + 唯一索引 | 无 |
| 认证管理器 | 不经过 | `AuthenticationManager` |
| 返回结果 | `RegisterUserResponse`（无 Token） | `LoginResponse`（含双 Token） |
| 密码校验点 | `PasswordHash.fromRaw()`（长度） | `BCrypt.matches()`（对比） |
| 涉及表 | `USER_ACCOUNT` | `USER_ACCOUNT` + `REFRESH_TOKEN` |

**关键设计差异**：
- 注册**只写不验**：仅加密密码入库，不涉及认证
- 登录**只验不写**：仅校验密码，唯一写操作是签发 refresh token 入库
- 两者共享：`Username`、`PasswordHash`、`UserAccount` 领域模型，`UserAccountRepository` 仓储端口，`BCryptPasswordEncoderAdapter` 密码编码器

---

---

# 刷新令牌（Refresh Token）流程

## 刷新令牌机制概述

WriteSelf 采用**双令牌 + 令牌轮换**机制：

- **Access Token**: 短期（30 分钟），每次 API 请求携带，用于身份认证
- **Refresh Token**: 长期（30 天），用于在 Access Token 过期后换取新的令牌对

当 Access Token 过期时，客户端无需让用户重新登录，而是用 Refresh Token 调 `/ws/users/refresh` 接口，服务端校验通过后签发**全新的 Access Token + Refresh Token 对**，同时**吊销旧的 Refresh Token**（令牌轮换 rotation），防止重放攻击。

---

## 刷新流程架构概览

```
HTTP POST /ws/users/refresh
        │
        ▼
┌─────────────────────────────────────────┐
│  RefreshTokenController (Controller)    │  ← 接收 JSON → RefreshRequest record
│  调用 refreshTokenService.refresh()     │
└───────────────────┬─────────────────────┘
                    │
         ┌──────────▼──────────┐
         │ RefreshRequest      │  ← DTO: { refreshToken }
         └──────────┬──────────┘
                    │
         ┌──────────▼──────────────────────┐
         │   RefreshTokenService (Service) │  ← 核心业务逻辑（令牌轮换）
         │   1. 解析并校验旧 refresh token │
         │   2. 验证 token 类型            │
         │   3. 按 jti 查库确认未吊销      │
         │   4. 吊销旧令牌（rotation）     │
         │   5. 签发新令牌对               │
         └──────────┬──────────────────────┘
                    │
         ┌──────────▼───────────────────┐
         │   JwtProvider                 │  ← parseClaims / generateRefreshToken
         │                                │     / generateAccessToken
         └──────────┬───────────────────┘
                    │
         ┌──────────▼───────────────────┐
         │ SpringDataRefreshTokenRepo    │  ← findByJti / save
         │ → REFRESH_TOKEN 表            │
         └──────────────────────────────┘
                    │
                    ▼
         RefreshResult → RefreshResponse → ApiResponse<RefreshResponse>
                    │
                    ▼
         HTTP 200 JSON 响应给客户端
```

---

## 第一层：HTTP 请求入口 —— Controller 层

### 1.1 请求进入路径

```
POST /ws/users/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9..."
}
```

### 1.2 SecurityConfig 白名单放行

刷新接口与登录、注册一样，在 `SecurityConfig.filterChain()` 中被标记为 `permitAll()`：

```java
.requestMatchers("/ws/users/register", "/ws/users/login", "/ws/users/refresh").permitAll()
```

> **为什么刷新接口也在白名单？** 因为调用刷新接口时 Access Token 通常已经过期，若要求其先通过 JWT 过滤器认证，就会陷入「Token 过期 → 无法认证 → 无法刷新」的死循环。因此刷新接口不依赖 Access Token，而是直接用请求体里的 Refresh Token 独立认证。

### 1.3 RefreshTokenController

**文件**: `src/main/java/com/monigj/writeselfbackend/user/controller/RefreshTokenController.java`

```java
@PostMapping("/refresh")
public ApiResponse<RefreshResponse> refresh(@Valid @RequestBody RefreshRequest request) {
    RefreshResult result = refreshTokenService.refresh(request.refreshToken());
    RefreshResponse response = new RefreshResponse(result.accessToken(), result.refreshToken(),
            result.userId(), result.expiresAt().toString());
    return ApiResponse.success(response);
}
```

**数据流**:

```
HTTP Request Body (JSON)
    ↓ JSON 反序列化
RefreshRequest record { @NotBlank refreshToken }
    ↓ @Valid 触发 Jakarta Bean Validation
    └─ refreshToken 为空/空白 → MethodArgumentNotValidException → 400 BAD_REQUEST
    ↓ 校验通过
refreshTokenService.refresh(refreshToken)
    ↓ 返回
RefreshResult { userId, accessToken, refreshToken, expiresAt }
    ↓ 映射
RefreshResponse { accessToken, refreshToken, userId, expiresAt }
    ↓ 包装
ApiResponse<RefreshResponse>(code="200", message="success", data=response)
    ↓ JSON 序列化
HTTP Response 200
```

**请求 DTO — RefreshRequest**:
```java
// src/main/java/.../user/dto/RefreshRequest.java
public record RefreshRequest(@NotBlank String refreshToken) {}
```

**响应 DTO — RefreshResponse**:
```java
// src/main/java/.../user/dto/RefreshResponse.java
public record RefreshResponse(String accessToken, String refreshToken, Long userId, String expiresAt) {}
```

> **注意**: `RefreshResponse` 与 `LoginResponse` 结构几乎一致，唯一区别是前者没有 `username` 字段。因为刷新流程不经过数据库加载用户信息，只拿到 `userId`。

---

## 第二层：核心业务逻辑 —— Service 层

### 2.1 RefreshTokenService.refresh()

**文件**: `src/main/java/com/monigj/writeselfbackend/user/application/RefreshTokenService.java`

这是令牌轮换的核心编排器。整个方法用 `@Transactional` 保证「吊销旧令牌 + 签发新令牌」的原子性：

```java
@Transactional
public RefreshResult refresh(String oldRefreshToken) {
```

#### 步骤 1: 解析并校验 JWT 签名

```java
JwtProvider.ParseResult parseResult = jwtProvider.parseClaims(oldRefreshToken);
if (parseResult.expired()) {
    throw AuthenticationException.tokenExpired();
}
if (parseResult.invalid()) {
    throw AuthenticationException.tokenInvalid();
}
```

调用 `JwtProvider.parseClaims()`，返回一个三态结果 `ParseResult`：

```java
// JwtProvider.java
public ParseResult parseClaims(String token) {
    try {
        return ParseResult.valid(Jwts.parser()
                .verifyWith(secretKey)          // 验证 HMAC 签名
                .build()
                .parseSignedClaims(token)       // 解析 + 校验 exp
                .getPayload());
    } catch (ExpiredJwtException e) {
        return ParseResult.expiredResult();     // 签名正确但已过期
    } catch (JwtException | IllegalArgumentException e) {
        return ParseResult.invalidResult();     // 签名错误/格式非法
    }
}
```

**ParseResult 三态设计**:
```java
public record ParseResult(Claims claims, boolean expired, boolean invalid) {
    private static final ParseResult EXPIRED = new ParseResult(null, true, false);
    private static final ParseResult INVALID = new ParseResult(null, false, true);
    public static ParseResult valid(Claims claims) { return new ParseResult(claims, false, false); }
    public static ParseResult expiredResult() { return EXPIRED; }
    public static ParseResult invalidResult() { return INVALID; }
}
```

关键区分：**过期**（签名正确但 `exp` 已过）和**无效**（签名错误/被篡改）是两种不同的失败语义，映射到不同的错误码：
- 过期 → `TOKEN_EXPIRED`
- 无效 → `TOKEN_INVALID`

#### 步骤 2: 校验 Token 类型

```java
Claims claims = parseResult.claims();
String type = claims.get("type", String.class);
if (!"refresh".equals(type)) {
    throw AuthenticationException.tokenTypeError();
}
```

防止客户端误用 Access Token 来调刷新接口。两种 Token 在 JWT payload 里都有 `type` 声明：
- Access Token: `"type": "access"`
- Refresh Token: `"type": "refresh"`

#### 步骤 3: 按 jti 查库确认未吊销

```java
String jti = claims.get("jti", String.class);
RefreshTokenJpaEntity oldEntity;
try {
    oldEntity = repository.findByJti(jti)
            .orElseThrow(AuthenticationException::tokenNotFound);
    if (oldEntity.isRevoked()) {
        throw AuthenticationException.tokenReuseDetected();
    }
} catch (DataAccessException e) {
    throw InfrastructureException.database(e.getMessage());
}
```

**数据流**:

```
jti = "550e8400-e29b-41d4-a716-446655440000"  (从 JWT 提取)
    ↓ repository.findByJti(jti)
SpringDataRefreshTokenRepo.findByJti(jti)
    ↓ JDBC
SELECT * FROM REFRESH_TOKEN WHERE jti = '550e8400-...'
    ↓ 结果
    ├─ 未找到 → tokenNotFound() → TOKEN_REVOKED
    ├─ revoked=true → tokenReuseDetected() → TOKEN_REUSE_DETECTED（重放攻击！）
    └─ revoked=false → 继续
```

**重放攻击检测**: 这是令牌轮换的核心安全价值。如果同一个 refresh token 被使用两次，第二次进来时 `revoked` 已经是 `true`，立即抛出 `tokenReuseDetected()`，提示用户重新登录。这能有效发现 refresh token 泄露。

#### 步骤 4: 吊销旧令牌（rotation）

```java
Long userId = oldEntity.getUserId();
oldEntity.setRevoked(true);
try {
    repository.save(oldEntity);
} catch (DataAccessException e) {
    throw InfrastructureException.database(e.getMessage());
}
```

将旧令牌的 `revoked` 字段置为 `true` 并保存：

```
UPDATE REFRESH_TOKEN SET revoked = TRUE WHERE jti = '550e8400-...'
```

#### 步骤 5: 签发新 Refresh Token 并入库

```java
RefreshTokenResult result = jwtProvider.generateRefreshToken(userId);
RefreshTokenJpaEntity newEntity = new RefreshTokenJpaEntity();
newEntity.setId(snowflakeId.nextId());
newEntity.setUserId(userId);
newEntity.setJti(result.jti());                // 新的 UUID
newEntity.setTokenHash(sha256(result.token())); // SHA-256 哈希存储
newEntity.setExpiresAt(toLocalDateTime(result.expiresAt()));
repository.save(newEntity);
```

```
generateRefreshToken(userId)
    ↓ 生成新的 JWT + 新 UUID jti + 新 Snowflake iat + 30天过期
RefreshTokenResult { token, jti, expiresAt }
    ↓ + Snowflake 主键 + SHA-256(token)
RefreshTokenJpaEntity { id, userId, jti, tokenHash, expiresAt, revoked=false }
    ↓ JDBC
INSERT INTO REFRESH_TOKEN ...
```

#### 步骤 6: 签发新 Access Token

```java
String accessToken = jwtProvider.generateAccessToken(userId);
```

注意：刷新时签发的 Access Token 使用 `generateAccessToken(userId)`，与登录时的 `generate(Authentication)` 不同——因为刷新流程没有 `Authentication` 对象，只有 `userId`：

```java
public String generateAccessToken(Long userId) {
    Date now = new Date();
    Date expiry = new Date(now.getTime() + expiration);
    return Jwts.builder()
            .subject(userId.toString())
            .claim("type", "access")
            .issuedAt(now)
            .expiration(expiry)
            .signWith(secretKey)
            .compact();
}
```

对比 `generate(Authentication)`：少了 `username` claim，其余一致。

#### 步骤 7: 构造返回结果

```java
return new RefreshResult(userId, accessToken, result.token(),
        Instant.now().plusMillis(jwtProvider.getExpirationMillis()));
```

**结果对象 — RefreshResult**:
```java
public record RefreshResult(Long userId, String accessToken, String refreshToken, Instant expiresAt) {}
```

`expiresAt` 是**新 Access Token** 的过期时间（`Instant.now() + 30分钟`），不是 refresh token 的过期时间。

---

## 第三层：令牌签发与存储细节

### 3.1 Refresh Token 的 JWT 结构

`generateRefreshToken()` 生成的 refresh token 比 access token 多两个 claim：

```java
public RefreshTokenResult generateRefreshToken(Long userId) {
    String jti = UUID.randomUUID().toString();       // 唯一标识
    long iatValue = snowflakeId.nextId();            // Snowflake ID
    Instant now = Instant.now();
    Instant expiry = now.plusMillis(refreshExpiration);  // 30 天后
    String token = Jwts.builder()
            .subject(userId.toString())
            .claim("type", "refresh")
            .claim("jti", jti)
            .claim("iat", iatValue)
            .issuedAt(Date.from(now))
            .expiration(Date.from(expiry))
            .signWith(secretKey)
            .compact();
    return new RefreshTokenResult(token, jti, expiry);
}
```

**Refresh Token JWT Payload 结构**:
```json
{
  "sub": "1001",                                  // 用户 ID
  "type": "refresh",                              // 类型标识
  "jti": "550e8400-e29b-41d4-a716-446655440000",  // JWT ID，数据库关联键
  "iat": 12345678901234567,                       // Snowflake ID（业务层 iat）
  "iat_dt": 1695100000,                            // 标准 issuedAt
  "exp": 1697692000                                // 30 天过期
}
```

| Claim | 含义 | 用途 |
|---|---|---|
| `sub` | 用户 ID | 识别令牌归属用户 |
| `type` | `"refresh"` | 区分 access/refresh，防止误用 |
| `jti` | UUID 字符串 | 数据库 `REFRESH_TOKEN.jti` 列的关联键，支持吊销 |
| `iat` | Snowflake ID | 业务层时间戳，附加用途 |
| `exp` | 过期时间 | 30 天有效期 |

### 3.2 数据库存储 — 为什么存哈希

Refresh Token 在数据库以 `SHA-256` 哈希形式存储：

```java
entity.setTokenHash(sha256(result.token()));

private String sha256(String input) {
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    byte[] hash = md.digest(input.getBytes(StandardCharsets.UTF_8));
    return HexFormat.of().formatHex(hash);
}
```

**安全动机**：
- JWT 本身自带签名，但签名只能验证「未被篡改」，无法防止「数据库泄露后直接盗用」
- 若数据库泄露明文 refresh token，攻击者可直接用其换取新的 access token
- 存储 SHA-256 哈希后，即使数据库泄露也无法还原出可用的 refresh token

### 3.3 令牌轮换（Rotation）的完整生命周期

```
登录 → 签发 refresh token R1（DB 记录 revoked=false）
    ↓
第 1 次刷新 → R1 置为 revoked=true，签发 R2（revoked=false）
    ↓
第 2 次刷新 → R2 置为 revoked=true，签发 R3（revoked=false）
    ↓
...
    ↓（若有人重放 R1）
第 N 次用 R1 → 发现 R1.revoked=true → 抛出 tokenReuseDetected
    → 提示重新登录（防止重放攻击）
```

---

## 刷新流程完整数据生命周期（时序图）

```
客户端                  Controller                 Service                     JwtProvider                数据库
  │                        │                           │                            │                        │
  │ POST /ws/users/refresh │                           │                            │                        │
  │ {"refreshToken":"R1"}  │                           │                            │                        │
  │───────────────────────►│                           │                            │                        │
  │                        │ @Valid 校验通过          │                            │                        │
  │                        │                           │                            │                        │
  │                        │ refreshTokenService.refresh("R1")                      │                        │
  │                        │──────────────────────────►│                            │                        │
  │                        │                           │ parseClaims("R1")         │                        │
  │                        │                           │───────────────────────────►│                        │
  │                        │                           │   ├─ 验证签名             │                        │
  │                        │                           │   ├─ 校验 exp            │                        │
  │                        │                           │   └─ 返回 ParseResult     │                        │
  │                        │                           │◄───────────────────────────│                        │
  │                        │                           │ 过期 → tokenExpired()     │                        │
  │                        │                           │ 无效 → tokenInvalid()     │                        │
  │                        │                           │                           │                        │
  │                        │                           │ 校验 type=="refresh"      │                        │
  │                        │                           │ 不是 → tokenTypeError()   │                        │
  │                        │                           │                           │                        │
  │                        │                           │ findByJti(jti)            │                        │
  │                        │                           │───────────────────────────────────────────────────►│
  │                        │                           │                           │   SELECT ... WHERE jti=│
  │                        │                           │◄───────────────────────────────────────────────────│
  │                        │                           │ 不存在 → tokenNotFound()  │                        │
  │                        │                           │ revoked → tokenReuseDetected()                     │
  │                        │                           │                           │                        │
  │                        │                           │ oldEntity.setRevoked(true)│                        │
  │                        │                           │ repository.save(oldEntity)│                        │
  │                        │                           │───────────────────────────────────────────────────►│
  │                        │                           │                           │   UPDATE revoked=TRUE   │
  │                        │                           │                           │                        │
  │                        │                           │ generateRefreshToken(userId)                       │
  │                        │                           │───────────────────────────►│                        │
  │                        │                           │◄── R2 (新 token + 新 jti) │                        │
  │                        │                           │                           │                        │
  │                        │                           │ repository.save(newEntity)│                        │
  │                        │                           │───────────────────────────────────────────────────►│
  │                        │                           │                           │   INSERT 新 R2 记录     │
  │                        │                           │                           │                        │
  │                        │                           │ generateAccessToken(userId)                        │
  │                        │                           │───────────────────────────►│                        │
  │                        │                           │◄── 新 access token        │                        │
  │                        │                           │                           │                        │
  │  ApiResponse {          │                           │                           │                        │
  │    code:"200",          │◄──────────────────────────│                           │                        │
  │    data:{               │                           │                           │                        │
  │      accessToken:"A2",  │                           │                           │                        │
  │      refreshToken:"R2", │                           │                           │                        │
  │      userId:1001,       │                           │                           │                        │
  │      expiresAt:"..."    │                           │                           │                        │
  │    }                    │                           │                           │                        │
  │  }                      │                           │                           │                        │
  │◄───────────────────────│                           │                           │                        │
```

---

## 刷新流程异常处理链路

```
Controller 层
    ↓ @Valid 校验失败
    MethodArgumentNotValidException
        ↓ GlobalExceptionHandler.handleValidation()
        HTTP 400 + ApiResponse { code:"VALIDATION_ERROR", error:{fieldErrors:{...}} }

Service 层（令牌校验）
    ↓ Token 过期
    parseResult.expired() → AuthenticationException.tokenExpired()
        ↓ GlobalExceptionHandler.handleAuthentication()
        HTTP 401 + ApiResponse { code:"TOKEN_EXPIRED", message:"refresh token expired" }
    ↓ Token 无效（签名错误/被篡改）
    parseResult.invalid() → AuthenticationException.tokenInvalid()
        ↓ HTTP 401 + ApiResponse { code:"TOKEN_INVALID", message:"token is invalid" }
    ↓ Token 类型错误（用 access token 调 refresh）
    type != "refresh" → AuthenticationException.tokenTypeError()
        ↓ HTTP 401 + ApiResponse { code:"TOKEN_TYPE_ERROR", message:"token type is not refresh" }
    ↓ jti 在数据库不存在
    findByJti → empty → AuthenticationException.tokenNotFound()
        ↓ HTTP 401 + ApiResponse { code:"TOKEN_REVOKED", message:"refresh token not found or already used" }
    ↓ Token 已被吊销（重放攻击）
    revoked=true → AuthenticationException.tokenReuseDetected()
        ↓ HTTP 401 + ApiResponse { code:"TOKEN_REUSE_DETECTED", message:"refresh token reuse detected, please re-login" }

Infrastructure 层
    ↓ 数据库异常
    DataAccessException → InfrastructureException.database()
        ↓ GlobalExceptionHandler.handleInfrastructure()
        HTTP 500 + ApiResponse { code:"DB_ERROR", message:"Database error: ..." }

通用兜底
    ↓ 未捕获异常
    Exception → GlobalExceptionHandler.handleGeneral()
        HTTP 500 + ApiResponse { code:"INTERNAL_ERROR", message:"Unexpected server error" }
```

---

## 三大流程对比总结（注册 / 登录 / 刷新）

| 维度 | 注册流程 | 登录流程 | 刷新流程 |
|---|---|---|---|
| 入口 | `POST /ws/users/register` | `POST /ws/users/login` | `POST /ws/users/refresh` |
| Controller | `UserRegistrationController` | `UserLoginController` | `RefreshTokenController` |
| 核心 Service | `RegisterUserUseCase` | `LoginUserUseCase` | `RefreshTokenService` |
| 命令/请求对象 | `RegisterUserCommand` | `LoginUserCommand` | `RefreshRequest` |
| 核心操作 | 密码加密 + 保存 | 密码校验 + 签发双 Token | 令牌轮换 + 签发双 Token |
| 密码处理 | `encode()` | `matches()` | 无 |
| 认证方式 | 无 | `AuthenticationManager` | Refresh Token 独立验证 |
| 唯一性检查 | `existsByUsername()` | 无 | `findByJti()` + `revoked` 检查 |
| 涉及表 | `USER_ACCOUNT` | `USER_ACCOUNT` + `REFRESH_TOKEN` | `REFRESH_TOKEN` |
| 返回结果 | `RegisterUserResponse`（无 Token） | `LoginResponse`（双 Token + username） | `RefreshResponse`（双 Token + userId） |
| 写操作 | INSERT 用户 | INSERT refresh token | UPDATE 吊销 + INSERT 新 token |
| 事务 | 无显式事务 | 无显式事务 | `@Transactional` 原子轮换 |

**关键设计差异**：
- **注册**：无认证、无 Token，纯写用户数据
- **登录**：密码认证后签发首对 Token，写一条 refresh token 记录
- **刷新**：不碰密码，凭 refresh token 轮换出新 Token 对，同时吊销旧 token；是整个系统中唯一用 `@Transactional` 保证「吊销 + 签发」原子性的接口

**三种流程共享的 JWT 基础设施**：
- `JwtProvider`：`generate()` / `generateAccessToken()` / `generateRefreshToken()` / `parseClaims()` / `validate()`
- `RefreshTokenService.issue()`：登录时签发 refresh token 的复用方法
- `SpringDataRefreshTokenRepository`：`findByJti()` / `save()`
- `REFRESH_TOKEN` 表：令牌持久化 + 吊销标记