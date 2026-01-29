---
title: 部署指南
description: TGPro Admin 系统部署与环境配置
layout: doc
sidebar: true
aside: true
outline: [2, 3]
lastUpdated: true
---

# 部署指南

本指南将帮助您快速在服务器上部署 TGPro Admin 系统。

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg> 环境要求

在开始部署之前，请确保您的服务器满足以下最低要求：

- **操作系统**: Linux (推荐 Ubuntu 20.04+)
- **容器环境**:
  - Docker 20.10 或更高版本
  - Docker Compose 2.0 或更高版本
- **硬件配置**:
  - 内存: 2GB+
  - 磁盘: 10GB+ 可用空间

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> 部署步骤

### 1. 上传项目文件
将整个 `tgpro-admin` 目录上传至您的服务器目标位置。

### 3. 配置环境变量
进入项目目录，复制示例配置文件并进行编辑：

```bash
cd tgpro-admin
cp .env.example .env
nano .env  # 或使用 vim/vi 编辑
```

详细的配置项说明请参考 [配置指南](/tgpro-admin/configuration)。

### 4. 启动服务
确认配置无误后，使用 Docker Compose 一键启动所有服务：

```bash
docker compose up -d
```

此命令将自动拉取镜像、构建容器并在后台运行服务。

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 目录结构说明

了解项目结构有助于您更好地维护系统：

```
tgpro-admin/
├── .env                    # 环境配置文件（核心敏感配置）
├── .env.example           # 配置模板文件
├── docker-compose.yml     # Docker 容器编排配置
├── Dockerfile             # Web 前端/后端构建文件
├── database/
│   └── init.sql           # 数据库初始化脚本
└── hf-tgpro/              # 机器人核心目录
    ├── Dockerfile         # 机器人环境构建文件
    ├── hy.py              # 机器人主程序入口
    ├── main               # TON 支付处理二进制程序
    └── keyword_replies.json # 自动回复规则配置
```
