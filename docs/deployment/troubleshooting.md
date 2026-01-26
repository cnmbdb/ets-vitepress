---
outline: deep
---

# 故障排查

本文档提供常见问题的排查和解决方法。

## 常见问题

### 1. 服务无法启动

#### 问题现象
- Docker 容器无法启动
- 服务不断重启

#### 排查步骤

1. **查看日志**
```bash
docker compose logs -f
```

2. **检查端口占用**
```bash
# 检查端口是否被占用
lsof -i :3000
# 或
netstat -an | grep 3000
```

3. **检查 Docker 状态**
```bash
docker ps -a
docker compose ps
```

#### 解决方法

- 如果端口被占用，修改 `.env` 中的 `PORT`
- 如果容器异常，删除并重新创建：
```bash
docker compose down
docker compose up -d
```

### 2. 数据库连接失败

#### 问题现象
- 应用无法连接数据库
- 出现数据库连接错误

#### 排查步骤

1. **检查数据库服务**
```bash
docker compose ps db
docker compose logs db
```

2. **测试数据库连接**
```bash
docker compose exec db mysql -uroot -p
```

3. **检查环境变量**
```bash
docker compose exec app env | grep DB_
```

#### 解决方法

- 检查 `.env` 中的数据库配置
- 确保数据库容器已启动
- 验证数据库密码是否正确
- 检查数据库是否已初始化

### 3. Bot 无法连接

#### 问题现象
- Bot 无法响应消息
- Bot 容器不断重启

#### 排查步骤

1. **查看 Bot 日志**
```bash
docker compose logs -f bot
```

2. **检查 Token**
```bash
cat nl-2333/config.txt | grep TOKEN
```

3. **检查网络连接**
```bash
docker compose exec bot ping -c 3 api.telegram.org
```

#### 解决方法

- 验证 Bot Token 是否正确
- 检查网络连接
- 查看 Bot 日志中的错误信息
- 重启 Bot 容器：
```bash
docker compose restart bot
```

### 4. 能量池 API 连接失败

#### 问题现象
- Bot 无法访问能量池 API
- 出现连接超时错误

#### 排查步骤

1. **检查宿主机服务**
```bash
# 确保 tgnl-home 服务在运行
curl http://localhost:3000/api/health
```

2. **检查 config.txt**
```bash
cat nl-2333/config.txt | grep energy_pool_api
```

3. **测试容器内连接**
```bash
docker compose exec bot curl http://host.docker.internal:3000/api/health
```

#### 解决方法

- 确保 `tgnl-home` 服务在宿主机运行
- 检查 `config.txt` 中的 `energy_pool_api` 配置
- 在 Linux 系统上，可能需要配置 `extra_hosts`

### 5. 页面无法访问

#### 问题现象
- 浏览器无法访问管理后台
- 出现 404 或 500 错误

#### 排查步骤

1. **检查服务状态**
```bash
docker compose ps app
```

2. **查看应用日志**
```bash
docker compose logs -f app
```

3. **检查端口**
```bash
curl http://localhost:3000/admin
```

#### 解决方法

- 确保应用容器已启动
- 检查端口是否正确
- 查看应用日志中的错误信息
- 重启应用容器：
```bash
docker compose restart app
```

### 6. 数据丢失

#### 问题现象
- 数据库数据丢失
- 重启后数据消失

#### 排查步骤

1. **检查数据卷**
```bash
docker volume ls
docker volume inspect tgnl-admin_db_data
```

2. **检查挂载配置**
```bash
docker compose config | grep volumes
```

#### 解决方法

- 确保数据卷正确挂载
- 不要使用 `docker compose down -v`（会删除数据）
- 定期备份数据库

## 日志查看

### 查看所有服务日志
```bash
docker compose logs -f
```

### 查看特定服务日志
```bash
docker compose logs -f app
docker compose logs -f bot
docker compose logs -f db
```

### 查看最近日志
```bash
docker compose logs --tail=100 app
```

## 性能问题

### 内存不足

**症状**：容器频繁重启，日志显示 OOM

**解决**：
- 增加 Docker 内存限制
- 优化应用配置
- 减少并发请求

### CPU 占用过高

**症状**：系统响应缓慢

**解决**：
- 检查是否有异常进程
- 优化数据库查询
- 增加服务器资源

## 网络问题

### 容器间无法通信

**解决**：
- 检查 Docker 网络配置
- 确保服务在同一网络中
- 使用服务名而非 IP 地址

### 外部无法访问

**解决**：
- 检查端口映射配置
- 检查防火墙设置
- 验证端口是否正确暴露

## 获取帮助

如果以上方法无法解决问题：

1. **收集信息**
   - 系统日志
   - Docker 日志
   - 配置文件
   - 错误信息

2. **查看文档**
   - [Docker 部署](/deployment/docker)
   - [环境配置](/deployment/environment)

3. **联系支持**
   - 提交 Issue
   - 提供详细错误信息

## 相关文档

- [Docker 部署](/deployment/docker)
- [环境配置](/deployment/environment)
