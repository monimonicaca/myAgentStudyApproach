---
name: profession-commentor
description: Adds Javadoc comments to Java classes, interfaces, methods, records, and fields following a professional commenting standard, in Chinese. Use this skill whenever the user asks to add, improve, or generate comments/Javadoc for Java code, mentions "comment my code", "add Javadoc", "document this class/method", or wants Java code commented. Also use it when the user asks about Java commenting conventions, whether a comment is good or bad, or wants to review/clean up comments in a Java project.
---

# Java Commenting Standard

Generate Javadoc comments in Chinese. Core principle:

> **Code explains *what* and *how*; comments explain *why*, business rules, constraints, and non-obvious decisions.**

All Javadoc output must be in Chinese. Classes and interfaces must include `@author moni`.

## Rules by element

### Class / Interface / Enum

Every class and interface gets a Javadoc describing its responsibility. Must include `@author moni`.

```java
/**
 * 表示系统中的用户账户。
 *
 * <p>负责维护用户账户的核心状态和业务规则。</p>
 *
 * @author moni
 */
public class UserAccount {
}
```

Simple class, one line is enough (still needs `@author`):

```java
/**
 * 提供用户账户相关操作。
 *
 * @author moni
 */
public class UserAccountService {
}
```

Enum: Javadoc only when the purpose or meaning of values is non-obvious.

### Method

Every public method gets Javadoc. `@param` for every parameter (explaining nullability and constraints). `@return` if it returns a value.

```java
/**
 * 根据用户名查找用户账户。
 *
 * @param username 要查找的用户名，不能为 {@code null}
 * @return 匹配的用户账户
 */
public UserAccount findByUsername(String username) {
    // ...
}
```

If `null` return is possible:

```java
/**
 * 根据用户名查找用户账户。
 *
 * @param username 要查找的用户名，不能为 {@code null}
 * @return 匹配的用户账户；若未找到则返回 {@code null}
 */
public UserAccount findByUsername(String username) {
    // ...
}
```

If an exception can be thrown, document it with `@throws`:

```java
/**
 * 根据用户名获取用户账户。
 *
 * @param username 要查找的用户名，不能为 {@code null}
 * @return 匹配的用户账户
 * @throws UserNotFoundException 当用户不存在时抛出
 */
public UserAccount getByUsername(String username) {
    // ...
}
```

Overridden methods still get Javadoc (with `@Override`). Static factory methods (`from`, `of`, etc.) also need Javadoc with `@param` and `@return`.

### Fields

Do NOT comment fields whose name is already self-explanatory:

```java
public class UserAccount {
    private Long id;
    private String username;
    private String passwordHash;
}
```

Only comment when the meaning is not obvious:

```java
/**
 * 用户最后一次成功登录的时间戳。
 */
private LocalDateTime lastLoginAt;
```

### Inline comments

Inline comments explain **why**, not **what**. Code already says what it does — don't restate it. For non-obvious logic (streams, filtering, sorting, state checks), add an inline comment explaining the reason.

Good:

```java
// 按创建时间倒序排序，使最新的日记显示在最前面。
diaries.sort(Comparator.comparing(Diary::getCreatedAt).reversed());
```

Bad:

```java
// 对日记进行排序。
diaries.sort(Comparator.comparing(Diary::getCreatedAt).reversed());
```

### Block comments

Use block comments for complex sections:

```java
/*
 * 用户注册包含以下步骤：
 * 1. 校验用户名是否已存在。
 * 2. 对密码进行哈希。
 * 3. 创建用户账户。
 * 4. 持久化用户账户。
 */
```

If a block needs a lot of explanation, consider refactoring into smaller methods.

### Interface

Document the interface and each method:

```java
/**
 * 为领域实体生成唯一标识符。
 *
 * @author moni
 */
public interface IdGenerator {
    /**
     * 生成一个新的唯一标识符。
     *
     * @return 全局唯一的标识符
     */
    Long nextId();
}
```

Implementation:

```java
/**
 * 使用雪花算法生成分布式标识符。
 *
 * @author moni
 */
public class SnowflakeIdGenerator implements IdGenerator {
    /**
     * 生成一个新的雪花算法标识符。
     *
     * @return 唯一的雪花算法标识符
     */
    @Override
    public Long nextId() {
        // ...
    }
}
```

### DTO (record)

Document the record and each component with `@param`:

```java
/**
 * 用户注册的请求参数。
 *
 * @param username 用户名
 * @param password 用户密码
 */
public record RegisterRequest(String username, String password) {
}
```

Response:

```java
/**
 * 用户注册成功后返回的响应。
 *
 * @param userId 新创建用户的标识符
 */
public record RegisterResponse(Long userId) {
}
```

### Controller

Document the controller class and each endpoint method:

```java
/**
 * 提供用户账户管理的 REST 接口。
 *
 * @author moni
 */
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    /**
     * 注册一个新的用户账户。
     *
     * @param request 用户注册请求
     * @return 注册结果
     */
    @PostMapping
    public RegisterResponse register(@RequestBody RegisterRequest request) {
        // ...
    }
}
```

## Quick reference

| Code element   | Rule                                    |
| -------------- | --------------------------------------- |
| Class          | Javadoc with `@author moni`             |
| Interface      | Javadoc with `@author moni`             |
| Enum           | Javadoc when necessary                  |
| Public method  | Javadoc with `@param`/`@return`/`@throws` |
| DTO            | Javadoc with `@param` for each component |
| Controller     | Javadoc with `@author moni`             |
| Field          | Only when meaning is not obvious        |
| Local variable | Usually no comment                      |
| Simple logic   | No comment                              |
| Complex logic  | Explain *why*                           |
| Business rule  | Comment when not obvious from code      |

## What to avoid

```java
// 创建用户
User user = new User();
```

Prefer:

```java
// 新用户必须使用加密后的密码创建，避免明文凭据被持久化。
User user = new User();
```