# 📋 项目概览

## ✅ 项目信息

本项目使用 VitePress 构建 WCS调试工具的使用文档网站。

- **项目名称**: WCS调试工具使用文档
- **创建日期**: 2026年1月17日
- **版本**: V1.0.0
- **文档版本**: V1.0.0-Beta.1

## 📂 项目文件结构

```
GS.OmniWareMatrix.Doc/
│
├── 📂 .github/               # GitHub配置
│   └── workflows/
│       └── deploy.yml        # 自动部署工作流
│
├── 📂 docs/                  # 文档源文件目录
│   │
│   ├── 📂 .vitepress/        # VitePress配置
│   │   ├── config.mts        # 主配置文件
│   │   ├── cache/            # 缓存目录（自动生成）
│   │   └── dist/             # 构建输出（自动生成）
│   │
│   ├── 📂 public/            # 静态资源
│   │   └── images/           # 图片资源 (10张)
│   │
│   ├── 📂 guide/             # 使用指南
│   │   └── index.md          # 主要文档内容
│   │
│   ├── 📂 development/       # 开发文档
│   │   ├── setup.md          # 安装和使用说明
│   │   ├── deployment.md     # 部署指南
│   │   └── project-overview.md # 本文件
│   │
│   ├── index.md              # 网站首页
│   ├── about.md              # 关于页面
│   └── changelog.md          # 更新日志
│
├── 📂 node_modules/          # 依赖包（自动生成）
│
├── 📄 package.json           # 项目配置
├── 📄 package-lock.json      # 依赖锁定
├── 📄 .gitignore             # Git忽略规则
├── 📄 README.md              # 项目说明
│
└── 📦 批处理脚本 (Windows)
    ├── install.bat           # 安装依赖
    ├── dev.bat               # 启动开发服务器
    └── build.bat             # 构建生产版本
```

## 🎯 核心功能

### 文档功能
- ✅ 现代化文档网站界面
- ✅ 响应式设计（支持移动端）
- ✅ 全文搜索功能
- ✅ 自动生成导航和侧边栏
- ✅ 暗色/亮色主题切换
- ✅ 热更新（修改即时预览）

### 文档内容
- ✅ 前言和使用说明
- ✅ 安装与部署指南
- ✅ 软件基础功能介绍
- ✅ WCS客户端功能说明
- ✅ WCS本地工具介绍
- ✅ 开发文档
- ✅ 部署指南

## 📊 技术规格

| 项目 | 说明 |
|------|------|
| **框架** | VitePress 1.0.0 |
| **前端** | Vue 3 |
| **构建工具** | Vite |
| **文档格式** | Markdown |
| **样式** | CSS3 |
| **Node.js** | 18+ |

## 🚀 开发流程

### 1. 安装依赖

```bash
npm install
# 或使用批处理
双击 install.bat
```

### 2. 启动开发服务器

```bash
npm run docs:dev
# 或使用批处理
双击 dev.bat
```

访问 `http://localhost:5173`

### 3. 编辑文档

主要文档位于 `docs/guide/index.md`，修改后自动刷新。

### 4. 构建生产版本

```bash
npm run docs:build
# 或使用批处理
双击 build.bat
```

输出目录：`docs/.vitepress/dist`

### 5. 预览生产版本

```bash
npm run docs:preview
```

## 🌐 部署

### GitHub Pages（推荐）

已配置 GitHub Actions 自动部署：

1. 推送代码到 GitHub
2. 启用 GitHub Pages（Source: GitHub Actions）
3. 每次推送 main 分支自动部署

详细说明请查看 [部署指南](./deployment.md)

### 其他平台

- **Netlify**: 导入仓库，设置构建命令 `npm run docs:build`，输出目录 `docs/.vitepress/dist`
- **Vercel**: 同上
- **自己的服务器**: 上传 `dist` 目录内容到 Web 服务器

## 📝 文档编辑指南

### 添加新页面

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 编辑 `docs/.vitepress/config.mts`，添加到导航或侧边栏
3. 保存后自动生效

### 添加图片

1. 将图片放到 `docs/public/images/` 目录
2. 在 Markdown 中引用：`![描述](/images/filename.png)`

### 使用自定义容器

```markdown
::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

::: danger 危险
这是一个危险警告框
:::

::: info 信息
这是一个信息框
:::
```

## 🔧 配置文件说明

### package.json

定义了项目的依赖和脚本命令：

- `docs:dev` - 启动开发服务器
- `docs:build` - 构建生产版本
- `docs:preview` - 预览生产版本

### docs/.vitepress/config.mts

VitePress 主配置文件，包含：

- 网站标题和描述
- base 路径配置（用于部署）
- 导航菜单
- 侧边栏结构
- 搜索功能
- 中文本地化配置

### .gitignore

定义 Git 忽略的文件和目录：

- `node_modules/` - 依赖包
- `docs/.vitepress/dist` - 构建输出
- `docs/.vitepress/cache` - 缓存文件

## 💡 最佳实践

### 开发时

1. 保持开发服务器运行，实时预览修改
2. 使用 Markdown 预览插件（如 VS Code 的 Markdown Preview）
3. 定期提交代码到 Git

### 构建前

1. 运行 `npm run docs:build` 确保构建成功
2. 运行 `npm run docs:preview` 预览生产版本
3. 检查所有链接和图片是否正常

### 部署前

1. 确认 `base` 配置正确
2. 测试生产版本
3. 确保所有更改已提交

## 📚 相关资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)

## 🎉 项目状态

**状态：✅ 已完成**

所有核心功能已实现，项目可以立即使用！

---

**最后更新：** 2026年1月17日
