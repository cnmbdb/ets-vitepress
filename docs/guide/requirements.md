---
outline: deep
---

# 环境要求

在部署 TGNL Admin 之前，请确保您的系统满足以下要求。

## 系统要求

### 操作系统

- **macOS**: 10.15+
- **Linux**: Ubuntu 20.04+ / CentOS 7+
- **Windows**: Windows 10+ (需要 WSL2)

### 硬件要求

- **CPU**: 2 核心或以上
- **内存**: 4GB RAM 或以上
- **磁盘**: 10GB 可用空间

## 软件依赖

### 必需软件

#### 1. Docker
- **版本**: 20.10+
- **安装**: [Docker 官方文档](https://docs.docker.com/get-docker/)

验证安装：
```bash
docker --version
docker compose version
```

#### 2. Node.js (可选，用于开发)
- **版本**: 18.0+
- **安装**: [Node.js 官网](https://nodejs.org/)

验证安装：
```bash
node --version
npm --version
```

### 可选软件

#### Git
用于版本控制和代码管理：
```bash
git --version
```

## 网络要求

- **端口**: 3000 (可配置)
- **数据库端口**: 3306 (内部使用)
- **网络访问**: 需要访问 Telegram API

## 环境变量

需要准备以下配置信息：

- Telegram Bot Token
- 数据库密码
- 能量池 API 地址（如果使用）
- 授权信息（如果使用）

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 检查清单

在开始部署前，请确认：

- [ ] Docker 已安装并运行
- [ ] Docker Compose 已安装
- [ ] 端口 3000 未被占用
- [ ] 已获取 Telegram Bot Token
- [ ] 已准备数据库密码
- [ ] 网络连接正常

## 下一步

满足所有要求后，可以开始：
- [快速开始](/guide/getting-started)
- [Docker 部署](/deployment/docker)
