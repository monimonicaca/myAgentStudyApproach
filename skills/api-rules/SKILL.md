---
name: api-rules
description: >
  Backend API design standards covering response envelopes, error structures, RESTful
  URL design, pagination, token auth, DTO patterns, HTTP status codes, and Spring Boot
  implementation. Use this skill whenever the user mentions API design, endpoint specs,
  response format, error codes, RESTful APIs, Spring Boot controllers, DTOs, pagination,
  token authentication, HTTP status codes, Controller return types, ApiResponse wrapper,
  or global exception handling. Also apply it even when the user casually says "write an
  API", "create a Controller", "define response format", or "how to handle errors" —
  enforce the standard proactively.
---

Workflow:
- Use `ponytail` full when coding — shortest diff that works.
- After coding, run `ponytail-review` on the changes.
- After `ponytail-review` finishes, spawn a new agent running `ponytail-audit` on the full repo.

# API Design Standards

Unified backend API response format, error structure, URL design, pagination, and
authentication rules.

## Core Principles

- **HTTP status codes** signal the broad result category
- **Unified response envelope**: always `{code, message, data}` (success) or `{code, message, error}` (failure). `meta` is added only when needed (pagination).
- **`code` is a machine-readable string**: `"200"` for success, error code string for failures.
- **`message` is human-readable**: `"success"` for success, error description for failures.
- **Structured errors**: `error` object contains `{code, message}` plus optional `details` for field-level validation errors.
- **`requestId` is internal** — log it server-side, never expose it in the response body.
- **Skip what's not needed**: add only what the endpoint actually needs. A simple single-object read doesn't get pagination, a non-paginated list doesn't get `meta`, an error without field violations doesn't get `details`. Empty `{}` is noise — don't serialize it.
- **Shared types in a common module**: `ApiResponse`, `Meta`, `ErrorResponse`, `ErrorCode`, `GlobalExceptionHandler`, and `PageRequest` live in one shared package (`common/`) that every feature imports — never duplicate them per-feature.

---

## Envelope: Minimal by Default

The envelope adapts to the endpoint. Apply the minimum:

| Endpoint kind | Envelope shape |
|---------------|----------------|
| Single object read/write | `{ "code": "200", "message": "success", "data": {...} }` |
| List, **not** paginated | `{ "code": "200", "message": "success", "data": [...] }` |
| List, **paginated** | `{ "code": "200", "message": "success", "data": [...], "meta": { "page", "pageSize", "total" } }` |
| Any error | `{ "code": "...", "message": "...", "error": { "code", "message" } }` |
| Error with field violations | `{ "code": "...", "message": "...", "error": { "code", "message", "details": {...} } }` |

Rules of thumb:

- **`code` and `message` are always present** — top-level `code`/`message` mirror `error.code`/`error.message` on failure, and are `"200"`/`"success"` on success.
- **`meta` only when paginating** — a single object or non-paginated list has no `meta` at all. Don't serialize `"meta": {}`.
- **`requestId` is never in the response** — log it server-side for correlation, but don't send it to the client. The client uses HTTP status + `error.code` to diagnose, not an opaque request ID.
- **`details` only when there's something to say** — omit the field entirely (not `null`, not `{}`) when there are no field-level validation errors.
- **Pagination fields only when paginating** — `page`/`pageSize`/`total` only appear inside `meta` on paginated list endpoints.

Use `@JsonInclude(JsonInclude.Include.NON_NULL)` on the envelope and `Meta` so absent fields disappear from the JSON automatically — this is the lazy way to get "skip what's not needed" for free.

---

## 1. Basics

- Protocol: **HTTPS**
- Request: `Content-Type: application/json`
- Response: `Content-Type: application/json`

---

## 2. URL Design

RESTful, lowercase resource-oriented. Global prefix is **`/ws/`** (not `/api/v1/`):

```
/ws/{resource}
```

Action sub-paths are verb-ish (`/login`, `/register`, `/refresh`) appended to the resource.

Examples:

```
GET    /ws/users/{id}
POST   /ws/users
PUT    /ws/users/{id}
DELETE /ws/users/{id}

POST   /ws/users/register
POST   /ws/users/login
POST   /ws/users/refresh
```

---

## 3. Request Conventions

### 3.1 Field naming: camelCase

```json
{ "username": "moni" }   // ✅
{ "user_name": "moni" }  // ❌
```

### 3.2 Date/time: ISO 8601

```json
{ "createdAt": "2026-08-25T09:30:00Z" }  // ✅
{ "createdAt": 1756085400 }               // ❌
```

---

## 4. Request DTO Pattern

DTOs and value objects are **Java `record`s**, not Lombok classes. Use `@NotBlank` from `jakarta.validation.constraints` on required fields. More specific constraints (`@Size`, `@Pattern`, `@Email`) are added only when needed.

```
Controller → Request DTO → Command → UseCase/Service → Domain Model
```

Request DTO lives in `{feature}/dto/`, Command/Result records live in `{feature}/application/commands/`.

Example login DTO:

```java
public record LoginRequest(
    @NotBlank String username,
    @NotBlank String password
) {}
```

### When to skip the DTO

- **No request body**: `GET /ws/users/{id}` — just use `@PathVariable`.
- **Single trivial param**: `DELETE /ws/users/{id}` — `@PathVariable` is enough.

---

## 5. Success Responses

Unified envelope, minimal by default:

```json
{ "code": "200", "message": "success", "data": { } }
```

### 5.1 Single object

```
HTTP 200
```

```json
{
  "code": "200",
  "message": "success",
  "data": {
    "userId": 10001,
    "username": "moni",
    "accessToken": "xxxxx",
    "expiresAt": "2026-08-25T12:00:00Z"
  }
}
```

No `meta` — nothing to paginate, nothing to report.

### 5.2 List (non-paginated)

```
HTTP 200
```

```json
{
  "code": "200",
  "message": "success",
  "data": [
    { "id": "d001", "content": "..." },
    { "id": "d002", "content": "..." }
  ]
}
```

Only add `meta` + `page`/`pageSize`/`total` when the list is paginated.

### 5.3 List with pagination

```
HTTP 200
```

```json
{
  "code": "200",
  "message": "success",
  "data": [
    { "id": "d001", "content": "...", "createdAt": "2026-08-25T10:00:00Z" }
  ],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 200
  }
}
```

Pagination info lives in `meta`, never inside `data`.

---

## 6. Error Responses

```json
{
  "code": "AUTH_PASSWORD_INVALID",
  "message": "Password is incorrect",
  "error": {
    "code": "AUTH_PASSWORD_INVALID",
    "message": "Password is incorrect"
  }
}
```

- `code` / `message` (top-level) — mirror `error.code` / `error.message` for client convenience
- `error.code` — machine-readable string for programmatic handling (not a number)
- `error.message` — human-readable description
- `error.details` — only when there are field-level validation errors; omit entirely otherwise

With field violations:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request",
    "details": {
      "email": "Invalid email format",
      "password": "Must be at least 8 characters"
    }
  }
}
```

Use `@JsonInclude(JsonInclude.Include.NON_NULL)` so `details` disappears when null.

---

## 7. HTTP Status Codes

| Status | Meaning | When |
|--------|---------|------|
| 200 | OK | Successful GET queries |
| 201 | Created | Successful POST (registration, etc.) |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Validation failure, put field errors in `details` |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource does not exist |
| 500 | Internal Server Error | Unexpected server failure |

### Per-status examples

**400 — Validation failure:**

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request",
    "details": {
      "email": "Invalid email format"
    }
  }
}
```

**401 — Not authenticated:**

```json
{
  "code": "TOKEN_MISSING",
  "message": "Authentication required",
  "error": {
    "code": "TOKEN_MISSING",
    "message": "Authentication required"
  }
}
```

**404 — Resource not found:**

```json
{
  "code": "USER_NOT_FOUND",
  "message": "User does not exist",
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User does not exist"
  }
}
```

**500 — Server error:**

```json
{
  "code": "INTERNAL_ERROR",
  "message": "Unexpected server error",
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Unexpected server error"
  }
}
```

---

## 8. Pagination

Only apply pagination to list endpoints that return many items. A `GET /users/{id}` or a small fixed-size list does not need pagination.

Request:

```
GET /diaries?page=1&pageSize=20
```

| Param | Meaning | Default |
|-------|---------|---------|
| page | Page number | 1 |
| pageSize | Items per page | 20 |

Constraint: `pageSize <= 100`

Response:

```json
{
  "code": "200",
  "message": "success",
  "data": [ ],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 500
  }
}
```

---

## 9. Token Authentication

Use the `Authorization` header, never pass tokens in the request body:

```
Authorization: Bearer eyJxxxx
```

❌ Do not do this:

```json
{ "token": "xxx" }
```

The project uses **JWT** (JJWT 0.12.6) with two token types distinguished by a `"type"` claim (`"access"` / `"refresh"`):

- `generateAccessToken(userId)` → short-lived access token (`type=access`, ~30 min)
- `generateRefreshToken(userId)` → long-lived refresh token with `jti` (UUID), `iat`, `type=refresh` (~30 days)

Refresh tokens are **rotated** and stored hashed (SHA-256). On refresh: validate → if already revoked → `TOKEN_REUSE_DETECTED` (re-login required) → mark old revoked → issue new pair. A `JwtAuthenticationFilter` (stateless) reads the bearer token and sets the security context; `SecurityConfig` permits `/ws/users/register`, `/ws/users/login`, `/ws/users/refresh` and requires auth everywhere else.

---

## 10. Full Example: Login Endpoint

**Request:**

```
POST /ws/users/login
Content-Type: application/json

{
  "username": "moni",
  "password": "123456"
}
```

**Success:**

```
HTTP 200

{
  "code": "200",
  "message": "success",
  "data": {
    "accessToken": "xxxxx",
    "refreshToken": "xxxxx",
    "userId": 10001,
    "username": "moni",
    "expiresAt": "2026-08-25T12:00:00Z"
  }
}
```

**Wrong password:**

```
HTTP 401

{
  "code": "LOGIN_FAILED",
  "message": "invalid username or password",
  "error": {
    "code": "LOGIN_FAILED",
    "message": "invalid username or password"
  }
}
```

---

## 11. Recommended Code Structure

Put all shared response/request types in **one common module** that every feature imports.
Do NOT copy `ApiResponse`/`ErrorResponse`/`Meta` into each feature package — that's
duplication that drifts out of sync.

```
common/
  ├── exception/
  │    ├── BusinessException.java        // base: extends RuntimeException, holds errorCode
  │    ├── AuthenticationException.java  // token/lock/disabled errors
  │    ├── DomainException.java          // domain rule violations
  │    └── InfrastructureException.java  // DB/infra failures
  └── response/
       ├── ApiResponse.java              // success envelope (data, optional meta)
       ├── Meta.java                     // pagination only: page/pageSize/total
       ├── ErrorResponse.java            // error envelope (code, message, optional details)
       ├── ErrorCode.java                // error code string constants
       ├── GlobalExceptionHandler.java   // @RestControllerAdvice
       └── PageRequest.java              // shared pagination request (page/pageSize)
```

Every feature (`user/`, `diary/`) imports from `common.response` and `common.exception` — never redefines its own copy.

Exceptions are thrown from domain/application/infrastructure layers with a machine-readable error code. The global handler maps each exception type to an HTTP status + the same code in the body.

### Exception mapping

| Exception | HTTP Status | body `code` |
|---|---|---|
| `AuthenticationException` | 401 | `e.getErrorCode()` |
| `InfrastructureException` | 500 | `e.getErrorCode()` (e.g. `DB_ERROR`) |
| `DomainException` | 400 | `e.getErrorCode()` (e.g. `DUPLICATE_USERNAME`) |
| `BusinessException` | 400 | `e.getErrorCode()` |
| `UsernameNotFoundException` | 401 | `LOGIN_FAILED` |
| `MethodArgumentNotValidException` | 400 | `VALIDATION_ERROR` (with field `details`) |
| `IllegalArgumentException` | 400 | `VALIDATION_ERROR` |
| `HttpMessageNotReadableException` | 400 | `VALIDATION_ERROR` |
| `Exception` (catch-all) | 500 | `INTERNAL_ERROR` |

### ApiResponse (with @JsonInclude to skip nulls)

```java
@JsonInclude(JsonInclude.Include.NON_NULL)
public record ApiResponse<T>(String code, String message, T data, ErrorResponse error, Meta meta) {

    public static <T> ApiResponse<T> success(T data) {
        return new ApiResponse<>("200", "success", data, null, null);
    }

    public static <T> ApiResponse<T> success(T data, Meta meta) {
        return new ApiResponse<>("200", "success", data, null, meta);
    }

    public static <T> ApiResponse<T> error(ErrorResponse error) {
        return new ApiResponse<>(error.code(), error.message(), null, error, null);
    }
}
```

`success(data)` → single object / non-paginated list (no `meta`).
`success(data, meta)` → paginated list (with `meta`).

### Meta (pagination-only record)

```java
@JsonInclude(JsonInclude.Include.NON_NULL)
public record Meta(Integer page, Integer pageSize, Integer total) {}
```

`page` is 1-based. All fields are nullable so `@JsonInclude(NON_NULL)` drops them when absent. No `requestId` — log it server-side in the handler/filter, never expose it.

### ErrorCode (string constants, not an enum)

```java
public final class ErrorCode {
    public static final String VALIDATION_ERROR = "VALIDATION_ERROR";
    public static final String INTERNAL_ERROR = "INTERNAL_ERROR";
    public static final String TOKEN_MISSING = "TOKEN_MISSING";
    public static final String TOKEN_INVALID = "TOKEN_INVALID";
    public static final String USER_NOT_FOUND = "USER_NOT_FOUND";
    public static final String INVALID_PASSWORD = "INVALID_PASSWORD";
    public static final String DUPLICATE_USERNAME = "DUPLICATE_USERNAME";
    public static final String LOGIN_FAILED = "LOGIN_FAILED";
    public static final String ACCOUNT_LOCKED = "ACCOUNT_LOCKED";
    public static final String ACCOUNT_DISABLED = "ACCOUNT_DISABLED";
    public static final String TOKEN_EXPIRED = "TOKEN_EXPIRED";
    public static final String TOKEN_REVOKED = "TOKEN_REVOKED";
    public static final String TOKEN_TYPE_ERROR = "TOKEN_TYPE_ERROR";
    public static final String TOKEN_REUSE_DETECTED = "TOKEN_REUSE_DETECTED";
    public static final String DB_ERROR = "DB_ERROR";

    private ErrorCode() {}
}
```

### Controller usage

```java
// Thin controller — maps DTO → Command → UseCase, wraps result in ApiResponse
@RestController
@RequestMapping("/ws/users")
public class UserLoginController {

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        return ApiResponse.success(userLoginUseCase.login(
            new LoginUserCommand(request.username(), request.password())));
    }

    // Paginated list — with meta
    @GetMapping
    public ApiResponse<List<DiaryResponse>> list(PageRequest pagination) {
        return ApiResponse.success(diaryService.list(pagination),
            new Meta(pagination.page(), pagination.pageSize(), diaryService.count()));
    }
}
```

Controllers do **no** business logic — they map the request DTO to a Command, call the UseCase/Service, map the result to a Response DTO, and wrap in `ApiResponse.success(...)`. Use constructor injection (no `@Autowired`).

---

## 12. Hexagonal / DDD Architecture (flexible)

The project follows **Hexagonal Architecture** per feature module:

```
Feature/
  ├── controller/      // @RestController — thin HTTP adapter, no business logic
  ├── application/     // UseCase/Service + Command/Result records
  ├── domain/          // Aggregate roots, value objects, port interfaces
  ├── infrastructure/  // JPA adapters, JWT/BCrypt, persistence
  └── dto/             // Request/Response DTO records
```

Full call chain for non-trivial logic:

```
Client → Controller → Request DTO → Command → UseCase/Application Service
→ Domain Service → Port → Infrastructure Adapter → DB
```

Plus `common/` at the top for shared `response`, `exception`, and `util`.

For simple CRUD that maps 1:1 to the entity, skip the intermediate layers:

```
Client → Controller → Service → Entity → Repository → Database
```

Add the DTO/Application Service/Domain layer later when the API shape diverges from the entity or business logic grows beyond simple reads/writes.

---

Following this standard supports future growth: Android/iOS apps, web admin panels,
microservice拆分, Redis caching, API gateways, distributed tracing, and third-party
open APIs.