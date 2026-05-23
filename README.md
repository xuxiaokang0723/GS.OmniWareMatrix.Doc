# WCS调试工具使用文档

<div align="center">

![VitePress](https://img.shields.io/badge/VitePress-1.0.0-646CFF?style=flat-square&logo=vite)
![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat-square&logo=vue.js)
![Node](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)

基于 VitePress 构建的 WCS 调度系统调试工具使用文档

[快速开始](#-快速开始) • [文档说明](#-文档说明) • [部署](#-部署)

</div>

---

## ✨ 特性

- 🚀 **快速开发** - 基于 Vite 的毫秒级热更新
- 📱 **响应式设计** - 完美支持移动端和桌面端
- 🔍 **全文搜索** - 内置本地搜索功能
- 🎨 **主题切换** - 支持亮色/暗色主题
- 📝 **Markdown增强** - 支持自定义容器、代码高亮等
- ⚡ **优化构建** - 生成高性能的静态网站

## 📦 与客户端一起发布（内嵌离线文档）

客户端会在 `127.0.0.1` 上托管本仓库 **生产构建** 的静态文件，用户无需安装 Node 或运行 `dev.bat`。

1. 在本目录执行 `build.bat`（或 `npm run docs:build`），生成 `docs\.vitepress\dist`
2. 构建/发布 `GS.OmniWareMatrix.Desktop` 时，MSBuild 会自动将 `dist` 复制到输出目录的 `www\doc\`
3. 用户点击主界面「使用文档」按钮即可在浏览器中打开本地站点；若未打包文档则回退到 [在线文档](https://xuxiaokang0723.github.io/GS.OmniWareMatrix.Doc/)

> 修改 `base` 时须同步更新客户端 `LocalDocSiteService.DefaultPathBase`。

## 🚀 快速开始

### 前置要求

- Node.js 18+ ([下载地址](https://nodejs.org/))
- npm 或 yarn

### 方式一：使用批处理文件（推荐 Windows 用户）

```bash
# 1. 安装依赖
双击 install.bat

# 2. 启动开发服务器
双击 dev.bat

# 3. 访问网站
浏览器打开 http://localhost:5173

# 4. 构建生产版本
双击 build.bat
```

### 方式二：使用命令行

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run docs:dev

# 3. 构建生产版本
npm run docs:build

# 4. 预览生产版本
npm run docs:preview
```

## 📁 项目结构

```
GS.OmniWareMatrix.Doc/
├── .github/              # GitHub Actions 配置
│   └── workflows/
│       └── deploy.yml    # 自动部署工作流
├── docs/                 # 文档源文件
│   ├── .vitepress/       # VitePress 配置
│   │   └── config.mts    # 主配置文件
│   ├── public/           # 静态资源
│   │   └── images/       # 图片资源
│   ├── guide/            # 使用指南
│   │   └── index.md      # 主要文档
│   ├── development/      # 开发文档
│   │   ├── setup.md      # 安装和使用说明
│   │   ├── deployment.md # 部署指南
│   │   └── project-overview.md # 项目概览
│   ├── index.md          # 首页
│   ├── about.md          # 关于
│   └── changelog.md      # 更新日志
├── package.json          # 项目配置
├── .gitignore            # Git 忽略规则
├── README.md             # 本文件
└── *.bat                 # Windows 批处理脚本
```

## 📝 文档说明

### 主要文档内容

- **使用指南** (`docs/guide/index.md`) - 软件使用帮助文档
  - 前言
  - 安装与部署
  - 软件基础功能
  - WCS 客户端功能
  - WCS 本地工具

- **开发文档** (`docs/development/`)
  - 安装和使用说明
  - 部署指南
  - 项目概览

### 编辑文档

1. 修改 `docs/guide/index.md` - 编辑主要内容
2. 修改 `docs/.vitepress/config.mts` - 配置导航和侧边栏
3. 添加图片到 `docs/public/images/` - 管理图片资源
4. 在 `docs/` 下创建新 `.md` 文件 - 添加新页面

### 图片引用

```markdown
![图片描述](/images/image-1.png)
```

## 🌐 部署

### GitHub Pages（推荐）

本项目已配置 GitHub Actions 自动部署：

1. **修改配置**：编辑 `docs/.vitepress/config.mts` 中的 `base` 路径
   ```typescript
   base: '/你的仓库名/',  // 例如：'/GS.OmniWareMatrix.Doc/'
   ```

2. **推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/用户名/仓库名.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

4. **完成！** 访问 `https://用户名.github.io/仓库名/`

详细部署说明请查看 [部署指南](docs/development/deployment.md)

### 其他托管平台

- **Netlify** / **Vercel**
  - 构建命令：`npm run docs:build`
  - 输出目录：`docs/.vitepress/dist`

- **自己的服务器**
  - 上传 `docs/.vitepress/dist` 目录内容
  - 配置 Web 服务器（Nginx/Apache）

## 🔧 配置

### 网站配置

编辑 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  title: "网站标题",
  description: "网站描述",
  base: '/仓库名/',  // 部署路径
  // ... 其他配置
})
```

### npm 镜像加速

如果安装依赖速度慢：

```bash
npm config set registry https://registry.npmmirror.com
```

## 📚 技术栈

- [VitePress 1.0.0](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Markdown](https://www.markdownguide.org/) - 文档格式

## 📖 学习资源

- **VitePress 官方文档**: https://vitepress.dev/
- **Markdown 语法指南**: https://www.markdownguide.org/
- **Vue 3 文档**: https://vuejs.org/

## 🐛 常见问题

<details>
<summary>安装依赖时速度很慢？</summary>

使用国内镜像源：
```bash
npm config set registry https://registry.npmmirror.com
```
</details>

<details>
<summary>图片不显示？</summary>

检查：
- 图片路径是否以 `/` 开头
- 图片是否在 `docs/public/images/` 目录
- 文件名是否匹配（注意大小写）
</details>

<details>
<summary>修改配置后没有生效？</summary>

尝试：
1. 停止开发服务器（Ctrl+C）
2. 删除 `docs/.vitepress/cache` 目录
3. 重新运行 `npm run docs:dev`
</details>

<details>
<summary>部署后页面样式丢失？</summary>

检查 `docs/.vitepress/config.mts` 中的 `base` 配置是否正确：
```typescript
base: '/仓库名/',  // 注意前后都有斜杠
```
</details>

## 📄 文档版本

当前文档基于 **V1.0.0-Beta.1** 版本制作。

查看 [更新日志](docs/changelog.md) 了解版本历史。

## 💡 提示

- 开发时保持开发服务器运行，实时预览修改
- 定期运行 `npm run docs:build` 确保构建成功
- 使用 Git 管理项目版本
- 部署前务必测试生产版本

## 📮 技术支持

如有问题或需要帮助，请联系技术支持团队。

## 📜 许可

版权所有 © 2026 GenSong. 保留所有权利。

---

<div align="center">

**祝您使用愉快！** 🎉

Made with ❤️ using VitePress

</div>
