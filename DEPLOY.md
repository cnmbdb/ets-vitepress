# 部署到 GitHub 和阿里云 Pages

## 步骤 1: 创建 GitHub 仓库

1. 在 GitHub 上创建新仓库，仓库名：`nlbot-vitepress`
2. 不要初始化 README、.gitignore 或 license（我们已经有了）

## 步骤 2: 连接本地仓库到 GitHub

```bash
cd /Users/a2333/tgnl-home/tgnl-admin/nlbot-vitepress/nlbot-vitepress

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/nlbot-vitepress.git

# 或者使用 SSH（推荐）
git remote add origin git@github.com:YOUR_USERNAME/nlbot-vitepress.git

# 推送代码到 GitHub
git push -u origin main
```

## 步骤 3: 配置阿里云 Pages

1. 登录阿里云控制台
2. 进入 Pages 服务（边缘安全加速 ESA → 边缘计算 → 函数和 Pages）
3. 创建新站点或编辑现有站点
4. **重要配置**：
   - **源仓库**: 选择你的 GitHub 仓库 `nlbot-vitepress`
   - **构建命令**: `npm install && npm run build`
   - **输出目录**: `docs/.vitepress/dist`（必须填写，这是包含 index.html 的目录）
   - **静态资源目录**: 留空（系统会自动识别）
   - **函数文件路径**: 留空
   - **Node 版本**: 18 或更高
   - **配置文件**: 项目根目录已有 `esa.jsonc` 配置文件（包含路由重写规则）
5. 保存并部署

## 关键配置说明

### 输出目录

VitePress 默认输出到 `docs/.vitepress/dist`，所以阿里云 Pages 的输出目录必须设置为：
```
docs/.vitepress/dist
```

### 构建命令

标准构建命令：
```bash
npm install && npm run build
```

## 步骤 4: 更新配置（如果需要）

如果部署后路径有问题，可以修改 `.vitepress/config.ts` 中的 `base` 配置：

```typescript
export default defineConfig({
  base: '/',  // 如果部署在子路径，改为 '/your-path/'
  // ...
})
```

## 故障排查

### 构建失败：找不到 assets 和 function js 文件

**问题**：阿里云 Pages 报错 "Both assets and function js file are not found"

**解决**：
1. 确认输出目录设置为：`docs/.vitepress/dist`
2. 确认构建命令正确：`npm install && npm run build`
3. 检查构建日志，确认构建成功
4. 如果还是失败，尝试在构建命令后添加复制步骤：
   ```bash
   npm install && npm run build && cp -r docs/.vitepress/dist/* dist/ 2>/dev/null || true
   ```
   并将输出目录改为：`dist`

## 后续更新

每次更新文档后：

```bash
git add .
git commit -m "更新文档"
git push origin main
```

阿里云 Pages 会自动检测更新并重新部署。
