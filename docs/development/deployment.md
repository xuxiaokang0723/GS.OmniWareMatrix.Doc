# VitePress 文档部署到 GitHub Pages 指南

## 📋 概述

本指南将帮助您将 VitePress 文档网站自动部署到 GitHub Pages。部署完成后，您的文档将可以通过以下地址访问：
- `https://<用户名>.github.io/<仓库名>/`

## 🚀 快速开始

### 步骤 1：初始化 Git 仓库（如果还没有）

```bash
git init
git add .
git commit -m "Initial commit"
```

### 步骤 2：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com/)
2. 点击右上角的 `+` 号，选择 `New repository`
3. 填写仓库名称（例如：`GS.OmniWareMatrix.Doc`）
4. 选择公开（Public）或私有（Private）
5. **不要**勾选 "Add a README file"
6. 点击 `Create repository`

### 步骤 3：关联本地仓库和 GitHub 仓库

```bash
# 将 <用户名> 和 <仓库名> 替换为您的实际信息
git remote add origin https://github.com/<用户名>/<仓库名>.git
git branch -M main
git push -u origin main
```

### 步骤 4：配置 base 路径

**重要：** 打开 `docs/.vitepress/config.mts` 文件，修改 `base` 配置：

```typescript
export default defineConfig({
  // ...其他配置
  
  // 如果仓库名是 GS.OmniWareMatrix.Doc
  base: '/GS.OmniWareMatrix.Doc/',
  
  // 如果部署到 https://<用户名>.github.io/ (根域名)
  // base: '/',
  
  // ...其他配置
})
```

**规则：**
- 部署到 `https://<用户名>.github.io/<仓库名>/` → `base: '/<仓库名>/'`
- 部署到 `https://<用户名>.github.io/` → `base: '/'`
- 部署到自定义域名 → `base: '/'`

### 步骤 5：启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 `Settings`（设置）
3. 在左侧菜单中找到 `Pages`
4. 在 **Source** 部分，选择：
   - Source: `GitHub Actions`
   
   ![GitHub Pages设置](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/configure-github-actions-source.webp)

### 步骤 6：推送代码触发部署

```bash
git add .
git commit -m "Add VitePress config and GitHub Actions workflow"
git push
```

### 步骤 7：查看部署状态

1. 在 GitHub 仓库页面，点击 `Actions` 标签
2. 您会看到一个正在运行的工作流
3. 等待工作流完成（通常需要 1-3 分钟）
4. 部署成功后，访问 `https://<用户名>.github.io/<仓库名>/`

## 📁 已创建的文件说明

### 1. `docs/.vitepress/config.mts`
VitePress 配置文件，包含：
- 网站标题和描述
- 导航菜单配置
- 侧边栏配置
- 搜索功能
- base 路径配置（重要！）
- 中文本地化配置

### 2. `.github/workflows/deploy.yml`
GitHub Actions 工作流配置文件，自动完成：
- 安装依赖
- 构建 VitePress 网站
- 部署到 GitHub Pages

工作流会在以下情况触发：
- 推送代码到 `main` 分支
- 手动触发（在 Actions 页面）

### 3. `.gitignore`
Git 忽略文件，排除：
- `node_modules/` - 依赖包
- `docs/.vitepress/dist` - 构建输出
- `docs/.vitepress/cache` - 缓存文件
- 其他临时文件和日志

## 🔧 常见配置

### 修改触发分支

如果您使用的是 `master` 或其他分支，修改 `.github/workflows/deploy.yml`：

```yaml
on:
  push:
    branches: [master]  # 改为您的分支名
```

### 修改 Node.js 版本

在 `.github/workflows/deploy.yml` 中修改：

```yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: 18  # 改为您需要的版本
```

### 使用自定义域名

1. 在 GitHub Pages 设置中添加自定义域名
2. 修改 `docs/.vitepress/config.mts`：
   ```typescript
   base: '/',  // 自定义域名使用根路径
   ```
3. 在 `docs/public/` 目录下创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

## 🐛 常见问题

### Q1: 部署后页面样式丢失或 404

**原因：** `base` 路径配置不正确

**解决方案：**
1. 检查 `docs/.vitepress/config.mts` 中的 `base` 配置
2. 确保格式为 `/仓库名/`（注意前后都有斜杠）
3. 重新构建并推送

### Q2: GitHub Actions 失败

**可能原因：**
- 没有启用 GitHub Pages
- 权限不足

**解决方案：**
1. 检查 Settings → Pages 是否设置为 "GitHub Actions"
2. 检查 Actions 日志查看具体错误
3. 确保仓库不是 fork（fork 仓库需要额外权限）

### Q3: 推送代码后没有触发部署

**解决方案：**
1. 检查是否推送到了正确的分支（默认是 `main`）
2. 检查 `.github/workflows/deploy.yml` 文件是否正确
3. 在 Actions 页面手动触发工作流

### Q4: 本地构建成功但部署失败

**可能原因：**
- 依赖版本不兼容
- 环境差异

**解决方案：**
1. 检查 `package.json` 中的依赖版本
2. 使用 `npm ci` 而不是 `npm install`（工作流已配置）
3. 查看 Actions 日志获取详细错误信息

## 📝 更新文档流程

每次更新文档后：

```bash
# 1. 修改文档文件（如 docs/guide/index.md）

# 2. 本地预览（可选）
npm run docs:dev

# 3. 构建测试（可选）
npm run docs:build
npm run docs:preview

# 4. 提交并推送
git add .
git commit -m "更新文档内容"
git push

# 5. 等待自动部署完成（1-3分钟）
# 6. 访问网站查看更新
```

## 🔒 私有仓库注意事项

如果使用私有仓库：
- 免费用户的私有仓库无法使用 GitHub Pages
- 需要 GitHub Pro、Team 或 Enterprise 账户
- 或者将仓库设置为公开（Public）

## 🌟 进阶配置

### 添加部署通知

修改 `.github/workflows/deploy.yml`，在最后添加：

```yaml
- name: Deployment Status
  if: success()
  run: echo "✅ 部署成功！访问 https://<用户名>.github.io/<仓库名>/"
```

### 优化构建速度

使用 pnpm 替代 npm（更快）：

1. 修改 `package.json`：
   ```json
   {
     "packageManager": "pnpm@8.0.0"
   }
   ```

2. 修改 `.github/workflows/deploy.yml`：
   ```yaml
   - name: Setup Node
     uses: actions/setup-node@v4
     with:
       node-version: 20
       cache: pnpm
   
   - name: Install dependencies
     run: pnpm install --frozen-lockfile
   
   - name: Build with VitePress
     run: pnpm docs:build
   ```

## 📚 相关资源

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [GitHub Actions 文档](https://docs.github.com/actions)

## 🎉 完成！

按照以上步骤操作后，您的文档网站将自动部署到 GitHub Pages。每次推送代码到 main 分支时，都会自动触发重新部署。

如有问题，请查看 Actions 日志或参考常见问题部分。

---

**最后更新：** 2026年1月17日
