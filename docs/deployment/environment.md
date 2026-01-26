---
outline: deep
---

# 环境配置

本文档介绍 TGNL Admin 项目的环境配置。

## 环境变量

### 数据库配置

```env
DB_HOST=db              # 数据库主机
DB_PORT=3306            # 数据库端口
DB_USER=root            # 数据库用户名
DB_PASSWORD=your_password  # 数据库密码
DB_NAME=tgnl            # 数据库名称
```

### 应用配置

```env
PORT=3000               # 应用端口
APP_BASE_PATH=/admin    # 应用基础路径
APP_HOST=app            # 应用主机
```

### Bot 配置

```env
BOT_TOKEN=your_bot_token  # Telegram Bot Token
```

### 时区配置

```env
TZ=Asia/Shanghai        # 时区设置
```

## config.txt 配置

Bot 配置文件位于 `nl-2333/config.txt`：

```txt
TOKEN=your_bot_token
energy_pool_api=http://host.docker.internal:3000
username=your_username
password=your_password
```

### 配置项说明

- **TOKEN**: Telegram Bot Token（从 @BotFather 获取）
- **energy_pool_api**: 能量池 API 地址
- **username**: 能量池账号用户名
- **password**: 能量池账号密码

## WordPress API 配置（可选）

如果需要使用 WordPress API：

```env
WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_USERNAME=your_username
WORDPRESS_APP_PASSWORD=your_app_password
WORDPRESS_PRODUCT_ID=your_product_id
```

## 授权配置（可选）

```env
ORDER_NUMBER=your_order_number
SERVER_IP=your_server_ip
```

## 环境变量优先级

1. `.env` 文件中的配置
2. 系统环境变量
3. 默认值

## 配置验证

### 检查环境变量

```bash
# 查看所有环境变量
docker compose config

# 查看特定服务的环境变量
docker compose exec app env | grep DB_
```

### 测试数据库连接

```bash
docker compose exec app node -e "
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
connection.connect((err) => {
  if (err) console.error('连接失败:', err);
  else console.log('连接成功');
  connection.end();
});
"
```

## 配置更新

### 更新 .env 文件

1. 编辑 `.env` 文件
2. 重启相关服务：
```bash
docker compose restart app
```

### 更新 config.txt

1. 编辑 `nl-2333/config.txt`
2. 重启 bot 服务：
```bash
docker compose restart bot
```

## 安全建议

1. **不要提交敏感信息**
   - 将 `.env` 添加到 `.gitignore`
   - 不要将包含密码的文件提交到 Git

2. **使用强密码**
   - 数据库密码应足够复杂
   - 定期更换密码

3. **限制访问**
   - 数据库端口仅内部访问
   - 使用防火墙限制外部访问

4. **环境隔离**
   - 开发、测试、生产环境使用不同的配置
   - 不要在生产环境使用开发配置

## 相关文档

- [Docker 部署](/deployment/docker)
- [故障排查](/deployment/troubleshooting)
