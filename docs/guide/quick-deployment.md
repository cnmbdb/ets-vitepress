# 快速部署指南

本指南将帮助您快速部署独角数卡应用商店。

## 环境要求

- PHP >= 8.1
- MySQL >= 5.7
- Redis >= 5.0
- Nginx / Apache

## 部署步骤

### 1. 获取代码

```bash
git clone https://github.com/cnmbdb/hf-tgnl-admin.git
cd hf-tgnl-admin
```

### 2. 安装依赖

```bash
composer install --no-dev
npm install
npm run build
```

### 3. 配置环境

复制配置文件并生成密钥：

```bash
cp .env.example .env
php artisan key:generate
```

编辑 `.env` 文件，配置数据库和 Redis 连接信息。

### 4. 运行迁移

```bash
php artisan migrate --seed
```

### 5. 配置 Web 服务器

将 Web 服务器的根目录指向 `public` 目录。

## Docker 部署

如果您更喜欢使用 Docker，我们也提供了 Docker Compose 配置文件。

```bash
docker-compose up -d
```
