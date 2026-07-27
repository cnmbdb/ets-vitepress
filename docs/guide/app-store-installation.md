---
title: 应用扩展商店安装
description: dujiao-next 应用扩展商店文件包安装与启用指南
---

# 应用扩展商店安装

::: tip 安装说明
应用扩展商店包含在完整的 `plugins/` 文件包中。请将整个文件夹安装到 dujiao-next 项目根目录，不要只复制其中的 `appstore` 子目录。
:::

## 1. 下载文件包

点击下方按钮直接下载官方 `plugins.zip` 文件包：

<p>
  <a class="plugin-download-button" href="https://github.com/cnmbdb/Dujiaoka-Next-Docker/releases/download/dujiao-next%E5%BA%94%E7%94%A8%E6%89%A9%E5%B1%95%E5%95%86%E5%BA%97%E6%8F%92%E4%BB%B6/plugins.zip" download="plugins.zip">↓ 点击下载 plugins.zip</a>
</p>

下载完成后解压 `plugins.zip`，将其中完整的 `plugins` 文件夹放入 dujiao-next 项目根目录即可。

## 2. 放置安装文件

在解压后的源码中找到完整的 `plugins` 文件夹，将它上传到 dujiao-next 项目根目录。`plugins` 必须与主项目的 `docker-compose.yml` 位于同一级：

```text
dujiao-next/
├── docker-compose.yml
├── .env
└── plugins/
    ├── dujiao
    ├── loader.js
    ├── host/
    └── appstore/
```

::: warning 上传前检查
请确认 `plugins/dujiao`、`plugins/host/docker-compose.yml` 和 `plugins/appstore/docker-compose.yml` 均已上传完整。缺少任何一个文件都会导致应用失败。
:::

## 3. 启用应用扩展商店

通过服务器终端进入 dujiao-next 项目根目录。下面以 `/www/wwwroot/项目文件名称` 为例，请根据你的实际安装目录修改：

```bash
cd /www/wwwroot/项目文件名称
chmod +x plugins/dujiao
./plugins/dujiao plugin apply
```

执行 `plugin apply` 后，安装程序会自动：

1. 检查 Docker、Docker Compose 和必需文件。
2. 创建 `plugins/appstore/.env` 并生成 App Store API Token。
3. 拉取 App Store 运行镜像。
4. 合并主项目、App Store 与插件宿主的 Compose 配置。
5. 启动插件宿主和 `dujiao-plugin-appstore` 容器。

::: info 无需重复启用
App Store 是永久核心插件，执行 `./plugins/dujiao plugin apply` 后会随主系统自动启动，不需要再执行单独的 `enable` 命令。
:::

## 4. 验证运行状态

执行以下命令检查插件清单和 App Store 容器状态：

```bash
./plugins/dujiao plugin list
docker ps --filter name=dujiao-plugin-appstore
```

正常情况下，插件清单中的 `appstore` 状态应为 `core`，容器 `dujiao-plugin-appstore` 应处于 `Up` 或 `healthy` 状态。

随后刷新 dujiao-next 管理后台，点击后台菜单中的 **插件商店** 即可进入应用扩展商店。

如果菜单没有出现或页面无法打开，可先查看容器日志：

```bash
docker logs --tail 100 dujiao-plugin-appstore
```

## 5. 启用其他应用扩展

App Store 启用后，其他扩展通过后台的 **插件商店** 安装。新安装的扩展默认保持停用，需要在插件详情页点击 **启用**，并等待状态显示为运行中且健康检查通过。

需要重新应用配置或更新 App Store 容器时，在项目根目录再次执行：

```bash
./plugins/dujiao plugin apply
```
