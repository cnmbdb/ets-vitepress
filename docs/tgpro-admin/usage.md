---
title: 使用手册
description: TGPro Admin 系统操作与运维手册
layout: doc
sidebar: true
aside: true
outline: [2, 3]
lastUpdated: true
---

# 使用手册

本手册将指导您如何访问管理后台、查看系统日志以及进行日常运维操作。

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> 访问后台

服务启动成功后，您可以通过浏览器访问管理后台：

- **后台地址**: `http://服务器IP:54699/fgxkd4ho`
- **默认账号**: `admin`
- **默认密码**: 您在 `.env` 中设置的 `DEBUG_PASSWORD`

::: tip 安全建议
建议在 Nginx 反向代理层配置 SSL 证书，并通过域名访问，以提高安全性。您可以修改 Nginx 配置将特定域名转发到 `54699` 端口。
:::

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 查看日志

在系统运行过程中，如果遇到问题或需要查看运行状态，可以通过以下命令查看日志：

### 查看实时日志

```bash
# 查看所有服务实时日志
docker compose logs -f
```

### 查看特定服务日志

```bash
# 查看机器人服务日志
docker logs -f tgpro-bot

# 查看 Web 后台服务日志
docker logs -f tgpro-app

# 查看数据库服务日志
docker logs -f tgpro-db
```

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg> 常用运维命令

以下是日常维护中常用的 Docker Compose 命令：

### 重启服务

```bash
# 重启所有服务
docker compose restart

# 重启单个服务 (如 bot)
docker compose restart bot
```

### 更新与重建

当您修改了代码或配置文件（非 .env）后，可能需要重新构建容器：

```bash
# 重新构建并启动（后台运行）
docker compose up -d --build
```

### 停止服务

```bash
# 停止并删除所有容器（保留数据卷）
docker compose down

# 停止并删除所有容器及数据卷（慎用！会清空数据库）
docker compose down -v
```

### 查看状态

```bash
# 查看容器运行状态
docker compose ps
```
