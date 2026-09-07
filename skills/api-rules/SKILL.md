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
authentication rules. Avoid the simplistic `{code:200, message:"success", data:{}}`
pattern common in small projects — it duplicates HTTP semantics, lacks structured
errors, and doesn't scale for pagination, tracing, or versioning.

## Core Principles

- **HTTP status codes** signal the broad result category
- **JSON body** carries business data, never repeats HTTP semantics
- **Unified response envelope**: `{data}` for success, `{error}` for errors. `meta` is added only when needed (pagination).
- **Structured errors**: `{code, message}` — code is a machine-readable string, not a number. `details` only when there are field-level validation errors.
- **requestId is internal** — log it server-side, never expose it in the response body. The client doesn't need it.
- **Skip what's not needed**: add only what the endpoint actually needs. A simple single-object read doesn't get pagination, a non-paginated list doesn't get `meta`, an error without field violations doesn't get `details`. Empty `{}` is noise — don't serialize it.
- **Shared types in a common module**: `ApiResponse`, `Meta`, `ErrorResponse`, `ErrorCode`, `GlobalExceptionHandler`, and `PageRequest` live in one shared package (`common/`) that every feature imports — never duplicate them per-feature.

---

## Envelope: Minimal by Default

The envelope adapts to the endpoint. Apply the minimum:

| Endpoint kind | Envelope shape |
|---------------|----------------|
| Single object read/write | `{ "data": {...} }` |
| List, **not** paginated | `{ "data": [...] }` |
| List, **paginated** | `{ "data": [...], "meta": { "page", "pageSize", "total" } }` |
| Any error | `{ "error": { "code", "message" } }` |
| Error with field violations | `{ "error": { "code", "message", "details": {...} } }` |

Rules of thumb:

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

RESTful, versioned:

```
/api/v1/{resource}
```

Examples:

```
GET    /api/v1/users/{id}
POST   /api/v1/users
PUT    /api/v1/users/{id}
DELETE /api/v1/users/{id}

POST   /api/v1/auth/login
POST   /api/v1/auth/register
```

---

## 3. Request Conventions

### 3.1 Field naming: camelCase

```json
{ "userName": "moni" }   // ✅
{ "user_name": "moni" }  // ❌
```

### 3.2 Date/time: ISO 8601

```json
{ "createdAt": "2026-08-25T09:30:00Z" }  // ✅
{ "createdAt": 1756085400 }               // ❌
```

---

## 4. Request DTO Pattern

Controllers never receive entities directly. Use a Request DTO — but skip it when the endpoint has no body (e.g. `GET /users/{id}`, `DELETE /users/{id}`) or only a single trivial param.

```
Controller → Request DTO → Application Service → Domain Model
```

Example login DTO:

```java
public class LoginRequest {
    private String email;
    private String password;
}
```

### When to skip the DTO

- **No request body**: `GET /users/{id}` — just use `@PathVariable`.
- **Single trivial param**: `DELETE /users/{id}` — `@PathVariable` is enough.
- **1:1 entity mapping**: For simple CRUD where the entity has the same fields, skip the intermediate DTO and go Controller → Service → Entity directly. Add the DTO later when the entity diverges from the API shape.

---

## 5. Success Responses

Unified envelope, minimal by default:

```json
{ "data": { } }
```

### 5.1 Single object

```
HTTP 200
```

```json
{
  "data": {
    "userId": "u_10001",
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
  "error": {
    "code": "AUTH_PASSWORD_INVALID",
    "message": "Password is incorrect"
  }
}
```

- `error.code` — machine-readable string for programmatic handling (not a number)
- `error.message` — human-readable description
- `error.details` — only when there are field-level validation errors; omit entirely otherwise

With field violations:

```json
{
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
  "error": {
    "code": "TOKEN_MISSING",
    "message": "Authentication required"
  }
}
```

**404 — Resource not found:**

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User does not exist"
  }
}
```

**500 — Server error:**

```json
{
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

---

## 10. Full Example: Login Endpoint

**Request:**

```
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "moni@test.com",
  "password": "123456"
}
```

**Success:**

```
HTTP 200

{
  "data": {
    "accessToken": "xxxxx",
    "refreshToken": "xxxxx",
    "user": {
      "id": "u001",
      "username": "moni"
    }
  }
}
```

**Wrong password:**

```
HTTP 401

{
  "error": {
    "code": "INVALID_PASSWORD",
    "message": "Email or password incorrect"
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
  └── response/
       ├── ApiResponse.java           // success envelope (data, optional meta)
       ├── Meta.java                  // pagination only: page/pageSize/total
       ├── ErrorResponse.java         // error envelope (code, message, optional details)
       ├── ErrorCode.java             // error code string constants
       ├── GlobalExceptionHandler.java // @RestControllerAdvice
       └── PageRequest.java           // shared pagination request (page/pageSize)
```

Every feature (`auth/`, `diary/`, `user/`) imports from `common.response` — never
redefines its own copy.

### ApiResponse (with @JsonInclude to skip nulls)

```java
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class ApiResponse<T> {
    private T data;
    private Meta meta;

    public static <T> ApiResponse<T> success(T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.data = data;   // meta stays null → omitted from JSON
        return response;
    }

    public static <T> ApiResponse<T> success(T data, int page, int pageSize, int total) {
        ApiResponse<T> response = new ApiResponse<>();
        response.data = data;
        Meta meta = new Meta();
        meta.setPage(page);
        meta.setPageSize(pageSize);
        meta.setTotal(total);
        response.meta = meta;
        return response;
    }
}
```

`success(data)` → single object / non-paginated list (no `meta`).
`success(data, page, pageSize, total)` → paginated list (with `meta`).

### Meta (pagination-only, no requestId)

```java
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class Meta {
    private Integer page;
    private Integer pageSize;
    private Integer total;
}
```

No `requestId` in Meta — log it server-side in the handler/filter, never expose it.

### Controller usage

```java
// Single object — no meta
@PostMapping("/login")
public ApiResponse<LoginResponse> login(@RequestBody LoginRequest request) {
    return ApiResponse.success(authService.login(request));
}

// Paginated list — with meta
@GetMapping
public ApiResponse<List<DiaryResponse>> list(PageRequest pagination) {
    return ApiResponse.success(diaryService.list(pagination),
        pagination.getPage(), pagination.getPageSize(), diaryService.count());
}
```

---

## 12. DDD Call Chain (flexible)

For non-trivial business logic, use the full chain:

```
Client → Controller → Request DTO → Application Service → Domain Service
→ Aggregate → Repository → Database
```

For simple CRUD that maps 1:1 to the entity, skip the intermediate layers:

```
Client → Controller → Service → Entity → Repository → Database
```

Add the DTO/Application Service/Domain layer later when the API shape diverges from the entity or business logic grows beyond simple reads/writes. Don't over-engineer a passthrough.

---

Following this standard supports future growth: Android/iOS apps, web admin panels,
microservice拆分, Redis caching, API gateways, distributed tracing, and third-party
open APIs.