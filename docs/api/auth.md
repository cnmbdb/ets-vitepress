---
outline: deep
---

# 认证接口

认证相关的 API 接口。

## 登录

用户登录接口。

### 请求

```http
POST /api/auth/login
Content-Type: application/json
```

### 请求体

```json
{
  "username": "admin",
  "password": "password"
}
```

### 响应

成功响应：

```json
{
  "success": true,
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": 1,
      "username": "admin"
    }
  }
}
```

错误响应：

```json
{
  "success": false,
  "error": "用户名或密码错误"
}
```

## 登出

用户登出接口。

### 请求

```http
POST /api/auth/logout
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "message": "登出成功"
}
```

## 获取当前用户

获取当前登录用户信息。

### 请求

```http
GET /api/auth/me
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com"
  }
}
```

## 刷新 Token

刷新访问令牌。

### 请求

```http
POST /api/auth/refresh
Authorization: Bearer YOUR_REFRESH_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "token": "new_jwt_token_here"
  }
}
```

## 错误码

- `AUTH_FAILED` - 认证失败
- `INVALID_TOKEN` - 无效的 Token
- `TOKEN_EXPIRED` - Token 已过期
- `UNAUTHORIZED` - 未授权
