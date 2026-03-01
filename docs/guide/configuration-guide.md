---
title: 配置说明
description: Dujiaoka-Next 环境变量与配置项详解
---

# Dujiaoka-Next 环境配置指南

::: tip <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Light bulb/3D/light_bulb_3d.png" width="20" style="display:inline;vertical-align:bottom;" /> 核心配置文件解析
本项目的所有系统关键配置都集中在根目录下的唯一环境变量文件 `.env` 中。此设计极大地方便了使用 Docker 部署用户进行快速的业务参数调整。如果你通过 Git Clone 源码的方式部署，需要自己复制 `.env.example` -> `.env`；使用预构建的发布包时则可能已附带或需要手动创建。
:::

## <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Page facing up/3D/page_facing_up_3d.png" width="20" style="display:inline;vertical-align:bottom;" /> `.env` 配置项对照表

最新的部署环境变量示例参数一览：

```env
DB_NAME=dujiao_db
DB_PASSWORD=dujiao_password
DB_USER=dujiao_user
HOST_BIND_IP=0.0.0.0
POSTGRES_PORT=5434
REDIS_DB=0
REDIS_PASSWORD=
REDIS_PORT=6381
TAG=latest
API_PORT=3001
USER_PORT=3000
ADMIN_PORT=3002
API_URL=http://127.0.0.1:3001
```

---

## <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Gear/3D/gear_3d.png" width="20" style="display:inline;vertical-align:bottom;" /> 详细参数说明

### 数据库配置 (PostgreSQL)

为了保证数据的可靠性和结构的严谨性，项目底层选择了稳健的 PostgreSQL：

| 变量名 | 默认值示例 | 类型 | 参数说明 |
| --- | --- | --- | --- |
| `DB_NAME` | `dujiao_db` | 必填 | 连接使用的 PostgreSQL 数据库名称。 |
| `DB_USER` | `dujiao_user` | 必填 | 数据库专属的授权访问用户。 |
| `DB_PASSWORD` | `dujiao_password` | 必填 | 数据库用户对应的验证口令密码。 |
| `POSTGRES_PORT` | `5434` | 选填 | 外部连接到 PostgreSQL 容器暴露的端口。*(如果不需要外部直连数据库，建议无需更改，容器内部通信走内部网络)* |

::: warning <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Warning/3D/warning_3d.png" width="20" style="display:inline;vertical-align:bottom;" /> 安全建议
强烈建议在投入生产环境前，将 `DB_PASSWORD` 和 `DB_USER` 更改为复杂的随机字符串。
:::

### 缓存配置 (Redis)

高速的 Redis 缓存支持用于提升系统并发以及处理后台队列任务：

| 变量名 | 默认值示例 | 参数说明 |
| --- | --- | --- |
| `REDIS_DB` | `0` | 指定当前项目连接使用的 Redis 0 号数据库块。 |
| `REDIS_PORT` | `6381` | 绑定到宿主机的 Redis 访问端口。 |
| `REDIS_PASSWORD` | *(为空)* | Redis 若开启了密码访问的密钥，默认未设置。 |

### 系统与容器启动配置

| 变量名 | 默认值示例 | 参数说明 |
| --- | --- | --- |
| `TAG` | `latest` | 容器镜像启动时拉取的最新标签，代表永远追随新版。你也可以指定对应的某个发行版数字锁死版本，如 `v2.0.0`。 |
| `HOST_BIND_IP` | `0.0.0.0` | **<Badge type="danger" text="影响安全" />** 映射开放绑定的网卡 IP。初始默认 `0.0.0.0` 意味着公网只要带上端口就能直接访问业务（包括后台）。一旦配置了 Nginx 反向代理绑定正式域名，**务必改成 `127.0.0.1`** 强制只允许本机进程反代访问，隐藏真实端口。 |

### 服务端点与接口配置 (核心)

这是驱动前后台与前端界面正常交换数据的命脉配置：

| 变量名 | 默认值示例 | 参数说明 |
| --- | --- | --- |
| `USER_PORT` | `3000` | C端普通用户/访客最终访问的前台网页容器端口。 |
| `API_PORT` | `3001` | 承压最重的核心接口服务容器暴露端口。 |
| `ADMIN_PORT` | `3002` | 全局管理员登陆访问的后台页面容器端口。 |

::: danger <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Stop sign/3D/stop_sign_3d.png" width="20" style="display:inline;vertical-align:bottom;" /> 关键易错点：API_URL
`API_URL=http://127.0.0.1:3001` 这个参数决定了前端（包含 C 端和管理端）在浏览器运行时去哪里请求后端接口：

1. **如果你在本地单纯使用 IP 直接访问**：它必须配置成 `http://你的公网服务器真实IP:3001`。
2. **如果你为平台正式挂载了域名**：它必须修改为你的正式 API 通信域名，例如 `API_URL=https://api.你的域名.com`。

**为什么它不能一直是 `127.0.0.1`？**
因为客户端渲染模式下，用户的电脑（浏览器）并不知道你的服务器 127.0.0.1 是谁，浏览器会傻傻地去请求用户自己的电脑，导致页面一片空白或是“网络连接被拒”。
:::

## <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Counterclockwise arrows button/3D/counterclockwise_arrows_button_3d.png" width="20" style="display:inline;vertical-align:bottom;" /> 使修改的配置生效

当你完成了对 `.env` 文件的编辑并保存后，容器并不会自动识别这些变更。你需要回到存放有该配置文件的项目根目录的终端中，执行**强制重建**命令：

```bash
docker compose up -d --force-recreate
```

执行后 Docker 会重新生成带有新环境变量的新容器替代表旧容器，你的配置才会真正生效！
