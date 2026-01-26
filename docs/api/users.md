---
outline: deep
---

# 用户接口

用户管理相关的 API 接口。

## 获取用户列表

获取所有用户列表。

### 请求

```http
GET /api/users
Authorization: Bearer YOUR_TOKEN
```

### 查询参数

- `page` - 页码（默认：1）
- `limit` - 每页数量（默认：10）
- `search` - 搜索关键词（可选）
- `status` - 状态筛选（可选）

### 响应

```json
{
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "username": "user1",
        "telegramId": "123456789",
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z"
      }
    ],
    "total": 100,
    "page": 1,
    "limit": 10
  }
}
```

## 获取用户详情

获取指定用户的详细信息。

### 请求

```http
GET /api/users/:id
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "user1",
    "telegramId": "123456789",
    "status": "active",
    "stats": {
      "messageCount": 100,
      "orderCount": 10,
      "totalSpent": 1000
    },
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

## 更新用户信息

更新用户信息。

### 请求

```http
PUT /api/users/:id
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json
```

### 请求体

```json
{
  "username": "new_username",
  "status": "active"
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "new_username"
  }
}
```

## 获取用户统计

获取用户统计数据。

### 请求

```http
GET /api/users/stats
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "total": 1000,
    "active": 800,
    "inactive": 200,
    "newToday": 10,
    "newThisWeek": 50
  }
}
```

## 导出用户数据

导出用户数据。

### 请求

```http
GET /api/users/export
Authorization: Bearer YOUR_TOKEN
```

### 查询参数

- `format` - 导出格式（csv/excel，默认：csv）

### 响应

返回文件下载。

## 错误码

- `USER_NOT_FOUND` - 用户不存在
- `INVALID_USER_DATA` - 无效的用户数据
- `EXPORT_FAILED` - 导出失败
