---
title: 配置指南
description: TGPro Admin 系统详细配置说明
layout: doc
sidebar: true
aside: true
outline: [2, 3]
lastUpdated: true
---

# 配置指南

本指南将详细说明 `.env` 文件中的各项配置及其作用。

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> 基础配置

以下配置是系统运行的必要条件，**必须**正确填写。

| 配置项 | 必填 | 说明 | 获取方式 |
| :--- | :---: | :--- | :--- |
| `BOT_TOKEN` | ✅ | Telegram 机器人 Token | 在 Telegram 中联系 [@BotFather](https://t.me/BotFather) 创建机器人并获取 Token |
| `BOT_ADMIN_ID` | ✅ | 管理员 Telegram ID | 联系 [@userinfobot](https://t.me/userinfobot) 获取您的数字 ID |
| `DEBUG_PASSWORD` | ✅ | Web 后台登录密码 | 请设置一个复杂的强密码，用于登录管理后台 |

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 支付配置

配置收款地址和相关支付参数。

### USDT (TRC20)
| 配置项 | 必填 | 说明 |
| :--- | :---: | :--- |
| `BOT_CONTROL_ADDRESS` | ✅ | 您的波场 (TRON) 钱包地址，用于接收 USDT 转账 |

### TON
| 配置项 | 必填 | 说明 |
| :--- | :---: | :--- |
| `WalletMnemonic` | ✅ | TON 钱包助记词（24个单词，空格分隔），系统将自动监控该钱包的入账 |

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg> 高级功能配置

用于启用一些特定的高级功能（如 Fragment 相关操作）。

| 配置项 | 说明 |
| :--- | :--- |
| `ResHash` | Fragment.com 登录后的 Hash 值 |
| `ResCookie` | Fragment.com 登录后的 Cookie 值 |

::: warning 注意
Fragment 认证信息可能会过期，如果相关功能失效，请尝试重新获取并更新配置。
:::

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> 数据库配置 (可选)

如果您需要连接外部数据库，可以修改以下参数（默认为容器内自动配置，无需修改）。

| 配置项 | 默认值 | 说明 |
| :--- | :--- | :--- |
| `MYSQL_HOST` | `db` | 数据库主机名 |
| `MYSQL_PORT` | `3306` | 数据库端口 |
| `MYSQL_DATABASE` | `tgpro` | 数据库名称 |
| `MYSQL_USER` | `root` | 数据库用户名 |
| `MYSQL_PASSWORD` | `root` | 数据库密码 |
