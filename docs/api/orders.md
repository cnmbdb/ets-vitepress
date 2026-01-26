---
outline: deep
---

# 订单接口

订单管理相关的 API 接口。

## 获取订单列表

获取所有订单列表。

### 请求

```http
GET /api/orders
Authorization: Bearer YOUR_TOKEN
```

### 查询参数

- `page` - 页码（默认：1）
- `limit` - 每页数量（默认：10）
- `status` - 状态筛选（可选）
- `userId` - 用户 ID 筛选（可选）
- `startDate` - 开始日期（可选）
- `endDate` - 结束日期（可选）

### 响应

```json
{
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "orderNo": "ORD202501010001",
        "userId": 1,
        "amount": 100.00,
        "status": "completed",
        "createdAt": "2025-01-01T00:00:00Z"
      }
    ],
    "total": 50,
    "page": 1,
    "limit": 10
  }
}
```

## 获取订单详情

获取指定订单的详细信息。

### 请求

```http
GET /api/orders/:id
Authorization: Bearer YOUR_TOKEN
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "orderNo": "ORD202501010001",
    "userId": 1,
    "user": {
      "id": 1,
      "username": "user1"
    },
    "amount": 100.00,
    "status": "completed",
    "paymentMethod": "alipay",
    "items": [],
    "createdAt": "2025-01-01T00:00:00Z",
    "paidAt": "2025-01-01T00:05:00Z"
  }
}
```

## 更新订单状态

更新订单状态。

### 请求

```http
PUT /api/orders/:id/status
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json
```

### 请求体

```json
{
  "status": "completed",
  "remark": "订单已完成"
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "completed"
  }
}
```

## 处理退款

处理订单退款。

### 请求

```http
POST /api/orders/:id/refund
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json
```

### 请求体

```json
{
  "amount": 100.00,
  "reason": "用户申请退款"
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "refunded",
    "refundAmount": 100.00
  }
}
```

## 获取订单统计

获取订单统计数据。

### 请求

```http
GET /api/orders/stats
Authorization: Bearer YOUR_TOKEN
```

### 查询参数

- `startDate` - 开始日期（可选）
- `endDate` - 结束日期（可选）

### 响应

```json
{
  "success": true,
  "data": {
    "total": 1000,
    "today": 10,
    "thisWeek": 50,
    "thisMonth": 200,
    "totalAmount": 100000.00,
    "todayAmount": 1000.00,
    "statusDistribution": {
      "pending": 10,
      "completed": 900,
      "cancelled": 50,
      "refunded": 40
    }
  }
}
```

## 导出订单数据

导出订单数据。

### 请求

```http
GET /api/orders/export
Authorization: Bearer YOUR_TOKEN
```

### 查询参数

- `format` - 导出格式（csv/excel，默认：csv）
- `startDate` - 开始日期（可选）
- `endDate` - 结束日期（可选）

### 响应

返回文件下载。

## 订单状态

- `pending` - 待处理
- `processing` - 处理中
- `completed` - 已完成
- `cancelled` - 已取消
- `refunded` - 已退款

## 错误码

- `ORDER_NOT_FOUND` - 订单不存在
- `INVALID_STATUS` - 无效的状态
- `REFUND_FAILED` - 退款失败
- `EXPORT_FAILED` - 导出失败
