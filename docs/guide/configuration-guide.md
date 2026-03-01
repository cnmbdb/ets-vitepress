# 配置说明

本文档介绍独角数卡应用商店的核心配置选项。

## 基础配置

在 `.env` 文件中配置以下参数：

### 应用信息

```ini
APP_NAME="Unicorn App Store"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com
```

### 数据库配置

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=unicorn_store
DB_USERNAME=root
DB_PASSWORD=secret
```

### 邮件配置

用于发送验证码和通知邮件。

```ini
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"
```

## 支付配置

目前支持支付宝和微信支付，需要在后台配置相关密钥。

### 支付宝

- App ID
- 私钥
- 公钥

### 微信支付

- App ID
- 商户号
- 密钥
- 证书路径

## 存储配置

支持本地存储和对象存储（如阿里云 OSS、腾讯云 COS）。

```ini
FILESYSTEM_DRIVER=local
```
