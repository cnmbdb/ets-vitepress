---
outline: deep
---

# API 文档

TGNL Admin 提供了完整的 RESTful API 接口。

## API 概览

### 基础信息

- **Base URL**: `http://localhost:3000/api`
- **认证方式**: Session / Token
- **数据格式**: JSON

### API 端点

- [认证接口](/api/auth) - 用户认证相关
- [机器人接口](/api/bots) - 机器人管理
- [用户接口](/api/users) - 用户管理
- [订单接口](/api/orders) - 订单管理

## 通用说明

### 请求格式

所有请求使用 JSON 格式：

```json
{
  "key": "value"
}
```

### 响应格式

标准响应格式：

```json
{
  "success": true,
  "data": {},
  "message": "操作成功"
}
```

错误响应：

```json
{
  "success": false,
  "error": "错误信息",
  "code": "ERROR_CODE"
}
```

### HTTP 状态码

- `200` - 成功
- `400` - 请求错误
- `401` - 未授权
- `403` - 禁止访问
- `404` - 资源不存在
- `500` - 服务器错误

## 认证

大部分 API 需要认证，认证方式：

1. **Session 认证** - 使用 Cookie
2. **Token 认证** - 使用 Authorization Header

### 使用 Token

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3000/api/endpoint
```

## 限流

API 请求有限流保护：
- 每分钟最多 60 次请求
- 超过限制会返回 429 状态码

## 版本控制

当前 API 版本：v1

## 相关文档

- [认证接口](/api/auth)
- [机器人接口](/api/bots)
- [用户接口](/api/users)
- [订单接口](/api/orders)
