---
outline: deep
---

# 机器人接口

机器人管理相关的 API 接口。

## 获取机器人列表

获取所有机器人列表。

### 请求

```http
GET /api/bots
Authorization: Bearer YOUR_TOKEN
```

### 查询参数

- `page` - 页码（默认：1）
- `limit` - 每页数量（默认：10）
- `status` - 状态筛选（可选）

### 响应

```json
{
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "Bot 1",
        "token": "***",
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z"
      }
    ],
    "total": 10,
    "page": 1,
    "limit": 10
  }
}
```

## 获取机器人详情

获取指定机器人的详细信息。

### 请求

```http
GET /api/bots/:id
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Bot 1",
    "token": "***",
    "status": "active",
    "config": {},
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

## 创建机器人

创建新的机器人。

### 请求

```http
POST /api/bots
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json
```

### 请求体

```json
{
  "name": "New Bot",
  "token": "bot_token_here",
  "config": {}
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 2,
    "name": "New Bot",
    "status": "active"
  }
}
```

## 更新机器人

更新机器人信息。

### 请求

```http
PUT /api/bots/:id
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json
```

### 请求体

```json
{
  "name": "Updated Bot",
  "config": {}
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Updated Bot"
  }
}
```

## 删除机器人

删除指定机器人。

### 请求

```http
DELETE /api/bots/:id
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "message": "删除成功"
}
```

## 启动/停止机器人

控制机器人运行状态。

### 请求

```http
POST /api/bots/:id/start
POST /api/bots/:id/stop
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "active"
  }
}
```

## 错误码

- `BOT_NOT_FOUND` - 机器人不存在
- `BOT_ALREADY_EXISTS` - 机器人已存在
- `INVALID_TOKEN` - 无效的 Token
- `BOT_START_FAILED` - 启动失败
