---
outline: deep
---

# 快速开始

本指南将帮助您快速启动 TGNL Admin 项目。

## 前置要求

在开始之前，请确保您的系统已安装：

- Node.js 18+ 
- Docker 和 Docker Compose
- Git

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/tgnl-admin.git
cd tgnl-admin
```

### 2. 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env` 文件，配置以下内容：

```env
# 数据库配置
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tgnl

# 应用配置
PORT=3000
APP_BASE_PATH=/admin

# Bot Token
BOT_TOKEN=your_bot_token
```

### 3. 配置 Bot

编辑 `nl-2333/config.txt` 文件：

```txt
TOKEN=your_bot_token
energy_pool_api=http://host.docker.internal:3000
username=your_username
password=your_password
```

### 4. 启动服务

#### 方式一：使用启动脚本（推荐）

```bash
./start-docker.sh
```

#### 方式二：手动启动

```bash
docker compose build
docker compose up -d
```

### 5. 访问系统

打开浏览器访问：

```
http://localhost:3000/admin
```

## 验证安装

1. 检查服务状态：
```bash
docker compose ps
```

2. 查看日志：
```bash
docker compose logs -f
```

3. 测试 Bot：
   - 在 Telegram 中找到您的机器人
   - 发送 `/start` 命令
   - 确认机器人正常响应

## 下一步

- [查看功能模块](/modules/)
- [了解部署配置](/deployment/docker)
- [阅读 API 文档](/api/)
