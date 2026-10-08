---
name: exception-handling-rules
description: Backend exception-handling and error-response standards for layered DDD/Spring Boot projects. Covers where exceptions are thrown per layer (controller/application/domain/infrastructure/security), the common/exception class hierarchy, error-code conventions, and how GlobalExceptionHandler maps them to HTTP responses. Use this skill whenever the user asks about exception handling, error handling, exception layering, GlobalExceptionHandler, @RestControllerAdvice, business exceptions, custom exceptions, error codes, throwing/wrapping exceptions in a repository or use-case, or how to convert database/validation/auth failures into API error responses — even when they phrase it as "how should I handle this error" or "where do I throw this exception".
---

# Exception Handling Rules

Layered DDD projects fail slowly when exceptions are all caught in controllers or
thrown indiscriminately. The fix is a single, shared exception module plus a clear
rule for *where* each exception is born, so every error keeps its semantic meaning
until one place converts it into an HTTP response.

## The core idea

A request flows down through layers. An exception flows back up, keeping its
meaning, until `GlobalExceptionHandler` converts it to JSON:

```
request → controller → application (use-case) → domain → infrastructure
                                                          ↓
response ← GlobalExceptionHandler ← exception (keeps error code) ←
```

Two hard rules make this work:

1. **Throw where the failure happens.** A domain rule violation is a `DomainException`
   thrown inside the domain object, not a string checked in the controller. A database
   failure is an `InfrastructureException` thrown inside the repository adapter. Only
   the HTTP-input layer (`@Valid`, JSON parsing) belongs to the controller + handler.
2. **Convert, don't swallow.** A low-level exception (`DuplicateKeyException`,
   `BadCredentialsException`, `JwtException`) never escapes to the client. The layer
   that owns that boundary converts it into a typed exception carrying a stable
   machine-readable error code. Never `try { ... } catch { return null; }`.

## Where each exception belongs

| Exception | Thrown by | Converted by | HTTP |
|-----------|-----------|--------------|------|
| JSON body unreadable / malformed | Spring MVC | GlobalExceptionHandler | 400 |
| `@Valid` field validation failure | DTO (`jakarta.validation`) | GlobalExceptionHandler | 400 |
| Domain rule violated (bad username, weak password) | domain value object / aggregate | domain layer | 400 |
| Duplicate username (business rule) | application use-case | use-case | 400 |
| Concurrent duplicate on unique index | repository adapter (`DuplicateKeyException`) | adapter → `DomainException` | 400 |
| Database / Redis / infra failure | repository adapter / persistence | adapter → `InfrastructureException` | 500 |
| Wrong password / unknown user (login) | `AuthenticationManager` | use-case → `AuthenticationException` | 401 |
| Account locked / disabled | `DaoAuthenticationProvider` | use-case → `AuthenticationException` | 401 |
| Invalid / expired / revoked token | `JwtProvider` / refresh service | use-case → `AuthenticationException` | 401 |
| Unknown / uncaught | any layer | GlobalExceptionHandler | 500 |

Guidance by layer:

- **controller** — only HTTP concerns. No try/catch blocks. Let validation and
  `GlobalExceptionHandler` do the work.
- **application (use-case)** — business *flow* rules: "username already taken",
  "account locked", "token expired". Convert Spring/Security exceptions into your
  own typed exceptions here.
- **domain** — object validity: format, length, state transitions. Throw from the
  value object/aggregate factory, not from the caller.
- **infrastructure** — technical faults only (`DataAccessException`, connection
  failures). Convert to `InfrastructureException`. The one exception: a unique-index
  violation is a *business* signal (`username already exists`), so convert that to a
  domain/business exception rather than an infra exception.
- **security (filter)** — for an invalid JWT during a request, don't throw out of a
  filter; clear the context and let the endpoint's auth requirement produce 401.

## The exception module

Keep one shared package that every feature imports. Do **not** copy these classes per
feature — duplicated exception types drift out of sync.

```
common/
└── exception/
    ├── BusinessException.java       // base: carries an errorCode + message
    ├── AuthenticationException.java // 401: login/token failures
    ├── DomainException.java         // 400: domain rule violations
    └── InfrastructureException.java // 500: DB/Redis/technical faults
```

`BusinessException` holds the error code; subclasses exist so the handler can map a
category to an HTTP status, while the `errorCode` string still distinguishes the exact
failure. Static factory methods keep call sites terse and centralize messages:

```java
public class AuthenticationException extends BusinessException {
    public AuthenticationException(String errorCode, String message) { super(errorCode, message); }
    public static AuthenticationException loginFailed() {
        return new AuthenticationException(ErrorCode.LOGIN_FAILED, "invalid username or password");
    }
    // locked(), disabled(), tokenInvalid(), tokenNotFound(), tokenExpired() ...
}
```

## Error codes

Machine-readable strings, centralised in one `ErrorCode` class. Name them for the
*failure*, not the layer. Prefer distinct codes over reusing one generic code — a
client can then branch on `ACCOUNT_LOCKED` vs `LOGIN_FAILED` vs `TOKEN_EXPIRED`.

| Code | Meaning | HTTP |
|------|---------|------|
| `VALIDATION_ERROR` | field/request invalid | 400 |
| `DUPLICATE_USERNAME` | username already exists | 400 |
| `LOGIN_FAILED` | wrong credentials (don't reveal which) | 401 |
| `ACCOUNT_LOCKED` | account locked | 401 |
| `ACCOUNT_DISABLED` | account disabled | 401 |
| `TOKEN_INVALID` | malformed / not a token | 401 |
| `TOKEN_EXPIRED` | token past expiry | 401 |
| `TOKEN_REVOKED` | refresh token already used/absent | 401 |
| `DB_ERROR` | database failure | 500 |
| `INTERNAL_ERROR` | unexpected | 500 |

## GlobalExceptionHandler

A single `@RestControllerAdvice` with one `@ExceptionHandler` per category. Each reads
the `errorCode` off the `BusinessException` and builds the standard error envelope.
Order matters: declare more-specific handlers first (subclass before base class).

Security-sensitive mapping: an `UsernameNotFoundException` from the auth provider must
map to `LOGIN_FAILED` with a generic "invalid username or password" message — never
reveal whether a username exists.

## The response envelope

The handler returns the project's unified error shape (see the API-rules skill for the
full contract). In brief: `{code, message, error: {code, message, details?}}`, top-level
`code`/`message` mirroring `error.code`/`error.message`, `details` only present for
field-level validation failures.

## Common pitfalls

- **Returning null from a `catch`** in a repository to "handle" a DB error — this turns
  a failure into a silent empty result. Re-throw as `InfrastructureException`.
- **`new IllegalArgumentException` for business rules** — that's a domain/business
  signal, use `DomainException` so the handler can map it cleanly.
- **One `AuthenticationException` for every failure with the same message** — loses the
  locked/disabled/expired distinction. Use factory methods that set distinct codes.
- **Catching broad `Exception` in a use-case** — defeats the point of typed layering;
  catch only the specific Spring/Security exception you're converting.
- **Swallowing `DataAccessException` in the adapter** — the read path (`findByUsername`)
  needs the same `InfrastructureException` wrapping as the write path (`save`).

---

# WriteSelf reference

The convention above is implemented concretely in WriteSelf. This section pins down
the actual class names and mappings so future work stays consistent.

## Package layout

```
com.monigj.writeselfbackend.common/
├── response/
│   ├── ApiResponse.java
│   ├── Meta.java
│   ├── ErrorResponse.java
│   ├── ErrorCode.java
│   └── GlobalExceptionHandler.java
└── exception/
    ├── BusinessException.java
    ├── AuthenticationException.java
    ├── DomainException.java
    └── InfrastructureException.java
```

`common/response` holds the envelope + handler; `common/exception` holds the typed
exceptions. `ErrorCode` lives in `common/response` (it's the API's contract), the
exceptions import it from there.

## Exception classes

- `BusinessException extends RuntimeException` — field `String errorCode` + getter.
  Base for all three below.
- `AuthenticationException extends BusinessException` — factory methods
  `loginFailed()`, `locked()`, `disabled()`, `tokenInvalid()`, `tokenNotFound()`,
  `tokenExpired()`.
- `DomainException extends BusinessException` — factory methods `duplicateUsername(name)`,
  `invalidUsername(detail)`, `invalidPassword(detail)`, `invalidPhone(detail)`.
- `InfrastructureException extends BusinessException` — factory method
  `database(detail)`; also a constructor taking a `Throwable cause`.

## Error codes (as declared in ErrorCode)

`VALIDATION_ERROR`, `INTERNAL_ERROR`, `TOKEN_MISSING`, `TOKEN_INVALID`, `USER_NOT_FOUND`,
`INVALID_PASSWORD`, `DUPLICATE_USERNAME`, `LOGIN_FAILED`, `ACCOUNT_LOCKED`,
`ACCOUNT_DISABLED`, `TOKEN_EXPIRED`, `TOKEN_REVOKED`, `DB_ERROR`.

## Per-layer mapping (implemented)

| Where | Throws |
|-------|--------|
| `Username.of(...)` / `Phone.of(...)` invalid input | `IllegalArgumentException` → 400 `VALIDATION_ERROR` (legacy) |
| `PasswordHash.fromRaw(...)` weak password | `IllegalArgumentException` → 400 `VALIDATION_ERROR` |
| `RegisterUserUseCase` duplicate username | `DomainException.duplicateUsername(...)` |
| `UserAccountRepositoryAdapter.save` `DuplicateKeyException` | `DomainException.duplicateUsername(...)` |
| `UserAccountRepositoryAdapter` `DataAccessException` (save/exists/find) | `InfrastructureException.database(...)` |
| `LoginUserUseCase` `BadCredentialsException`/other auth | `AuthenticationException.loginFailed()` |
| `LoginUserUseCase` `LockedException` | `AuthenticationException.locked()` |
| `LoginUserUseCase` `DisabledException` | `AuthenticationException.disabled()` |
| `RefreshTokenService` invalid/expired token | `AuthenticationException.tokenInvalid()` / `tokenExpired()` |
| `RefreshTokenService` revoked/missing token | `AuthenticationException.tokenNotFound()` |
| `RefreshTokenService` `DataAccessException` on save/find | `InfrastructureException.database(...)` |
| `JwtAuthenticationFilter` invalid JWT | clears context (no throw) → endpoint auth → 401 |

## Handler mapping (GlobalExceptionHandler)

- `AuthenticationException` → 401, uses `e.getErrorCode()`
- `DomainException` → 400, uses `e.getErrorCode()`
- `BusinessException` → 400, uses `e.getErrorCode()`
- `InfrastructureException` → 500, uses `e.getErrorCode()`
- `UsernameNotFoundException` → 401 `LOGIN_FAILED` ("invalid username or password")
- `IllegalArgumentException` → 400 `VALIDATION_ERROR`
- `MethodArgumentNotValidException` → 400 with field `details`
- `HttpMessageNotReadableException` → 400 `VALIDATION_ERROR`
- `Exception` → 500 `INTERNAL_ERROR`

## When adding a new feature

1. Decide the failure's nature: domain rule, business flow, or technical fault.
2. Throw the matching exception from the matching layer (see the mapping table).
3. If the error code doesn't exist yet, add it to `ErrorCode`.
4. Add a factory method on the relevant exception class if the message/code pair will
   recur.
5. Confirm the handler already maps that exception type; add one only if the category
   (and thus HTTP status) is new.
