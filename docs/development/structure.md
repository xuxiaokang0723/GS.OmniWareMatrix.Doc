# 项目目录结构说明

## 📂 标准化后的目录结构

本项目已按照 VitePress 最佳实践进行了目录整理，结构清晰规范。

### 完整目录树

```
GS.OmniWareMatrix.Doc/
│
├── 📂 .github/                    # GitHub 配置
│   └── workflows/
│       └── deploy.yml             # GitHub Actions 自动部署工作流
│
├── 📂 docs/                       # 📝 所有文档内容（核心目录）
│   │
│   ├── 📂 .vitepress/             # VitePress 配置
│   │   ├── config.mts             # 主配置文件
│   │   ├── cache/                 # 缓存目录（自动生成）
│   │   └── dist/                  # 构建输出（自动生成）
│   │
│   ├── 📂 public/                 # 静态资源
│   │   └── images/                # 图片资源 (10张)
│   │       ├── image.png
│   │       ├── image-1.png
│   │       ├── image-2.png
│   │       └── ...
│   │
│   ├── 📂 guide/                  # 使用指南
│   │   └── index.md               # 软件使用帮助文档
│   │
│   ├── 📂 development/            # 开发文档
│   │   ├── setup.md               # 安装和使用说明
│   │   ├── deployment.md          # GitHub Pages 部署指南
│   │   ├── project-overview.md    # 项目概览
│   │   └── structure.md           # 本文件 - 目录结构说明
│   │
│   ├── index.md                   # 🏠 网站首页
│   ├── about.md                   # 关于页面
│   └── changelog.md               # 更新日志
│
├── 📂 node_modules/               # npm 依赖包（自动生成）
│
├── 📄 .gitignore                  # Git 忽略规则
├── 📄 package.json                # 项目配置和依赖
├── 📄 package-lock.json           # 依赖版本锁定
├── 📄 README.md                   # 📖 项目说明文档
│
└── 📦 批处理脚本（Windows 快捷方式）
    ├── install.bat                # 安装依赖
    ├── dev.bat                    # 启动开发服务器
    └── build.bat                  # 构建生产版本
```

## 🎯 目录职责说明

### 根目录（项目配置层）

| 文件/目录 | 说明 | 类型 |
|----------|------|------|
| `.github/` | GitHub 相关配置（Actions 工作流） | 配置 |
| `docs/` | **所有文档内容**（最重要的目录） | 内容 |
| `node_modules/` | npm 依赖包（不提交到 Git） | 自动生成 |
| `.gitignore` | Git 忽略规则 | 配置 |
| `package.json` | 项目配置、依赖和脚本 | 配置 |
| `package-lock.json` | 依赖版本锁定 | 自动生成 |
| `README.md` | 项目说明和快速开始 | 文档 |
| `*.bat` | Windows 批处理快捷脚本 | 工具 |

### docs/ 目录（内容层）

| 文件/目录 | 说明 | 用途 |
|----------|------|------|
| `.vitepress/` | VitePress 配置和缓存 | 配置 |
| `public/` | 静态资源（图片、文件等） | 资源 |
| `guide/` | 软件使用指南 | 用户文档 |
| `development/` | 开发相关文档 | 开发文档 |
| `index.md` | 网站首页 | 页面 |
| `about.md` | 关于页面 | 页面 |
| `changelog.md` | 更新日志 | 页面 |

## ✅ 整理前后对比

### ❌ 整理前（混乱）

```
项目根目录/
├── docs/
├── package.json
├── README.md
├── 快速开始.md           ⚠️ 散落在根目录
├── 安装和使用说明.md       ⚠️ 散落在根目录
├── 项目清单.md            ⚠️ 散落在根目录
├── 部署到GitHub-Pages说明.md ⚠️ 散落在根目录
├── 开始使用.txt           ⚠️ 冗余文件
└── ...
```

**问题：**
- 根目录文档散乱
- 不符合 VitePress 规范
- 难以维护和管理

### ✅ 整理后（规范）

```
项目根目录/
├── .github/              # GitHub 配置
├── docs/                 # 所有文档统一管理
│   ├── .vitepress/
│   ├── public/
│   ├── guide/
│   ├── development/      ✅ 新增：开发文档目录
│   │   ├── setup.md
│   │   ├── deployment.md
│   │   └── project-overview.md
│   └── *.md
├── package.json
├── README.md             ✅ 精简的项目说明
└── *.bat
```

**优点：**
- ✅ 符合 VitePress 最佳实践
- ✅ 目录结构清晰
- ✅ 易于维护和扩展
- ✅ 根目录简洁
- ✅ 所有文档集中在 docs/ 下

## 📝 文件命名规范

### Markdown 文件

- 使用小写字母和连字符：`project-overview.md` ✅
- 避免空格和特殊字符：`项目 清单.md` ❌
- 英文命名优先（便于 URL）

### 图片文件

- 放在 `docs/public/images/` 目录
- 使用描述性名称：`login-page.png` ✅
- 避免中文：`登录页面.png` ❌
- 支持格式：png, jpg, gif, svg

### 目录命名

- 全小写：`development/` ✅
- 使用连字符分隔：`user-guide/` ✅
- 避免大写：`Development/` ❌

## 🔍 查找文件指南

### 我想找...

| 需求 | 位置 |
|------|------|
| 软件使用说明 | `docs/guide/index.md` |
| 如何安装和运行项目 | `docs/development/setup.md` 或 `README.md` |
| 如何部署到 GitHub Pages | `docs/development/deployment.md` |
| 项目整体信息 | `docs/development/project-overview.md` |
| 目录结构说明 | `docs/development/structure.md`（本文件） |
| 快速开始 | `README.md` |
| 修改网站配置 | `docs/.vitepress/config.mts` |
| 添加图片 | `docs/public/images/` |
| 自动部署配置 | `.github/workflows/deploy.yml` |

## 🚀 常见操作

### 添加新的文档页面

1. 在 `docs/` 下创建 `.md` 文件
   ```bash
   # 例如创建常见问题页面
   docs/faq.md
   ```

2. 编辑 `docs/.vitepress/config.mts`
   ```typescript
   nav: [
     // ... 其他导航
     { text: '常见问题', link: '/faq' }
   ]
   ```

### 添加新的文档分类

1. 在 `docs/` 下创建目录
   ```bash
   mkdir docs/api
   ```

2. 创建文档文件
   ```bash
   docs/api/index.md
   docs/api/reference.md
   ```

3. 更新配置
   ```typescript
   sidebar: [
     {
       text: 'API 文档',
       items: [
         { text: '概览', link: '/api/' },
         { text: '接口参考', link: '/api/reference' }
       ]
     }
   ]
   ```

### 添加图片

1. 将图片放到 `docs/public/images/`
2. 在 Markdown 中引用
   ```markdown
   ![描述](/images/your-image.png)
   ```

## 💡 最佳实践

### ✅ 推荐

- 所有文档放在 `docs/` 目录下
- 使用英文命名文件和目录
- 图片统一放在 `docs/public/images/`
- 根目录只保留必要的配置文件
- 定期整理和分类文档

### ❌ 避免

- 在根目录创建散落的文档文件
- 使用中文文件名（影响 URL）
- 图片放在文档同级目录
- 创建过深的目录层级（≤3层）
- 文件和目录命名不一致

## 🔄 迁移指南

如果您在其他项目中也遇到类似的目录混乱问题，可以参考以下步骤：

### 步骤 1：创建标准目录结构

```bash
mkdir -p docs/development
mkdir -p docs/public/images
```

### 步骤 2：移动文档文件

```bash
# 将散落的文档移到合适位置
mv 安装说明.md docs/development/setup.md
mv 部署指南.md docs/development/deployment.md
```

### 步骤 3：更新 VitePress 配置

编辑 `docs/.vitepress/config.mts`，更新导航和侧边栏。

### 步骤 4：精简 README.md

保持根目录 README 简洁，只包含：
- 项目简介
- 快速开始
- 基本使用
- 链接到详细文档

### 步骤 5：清理冗余文件

删除重复或过时的文档文件。

## 📚 相关资源

- [VitePress 项目结构](https://vitepress.dev/guide/getting-started#file-structure)
- [Markdown 最佳实践](https://www.markdownguide.org/basic-syntax/)
- [Git 忽略规则](https://git-scm.com/docs/gitignore)

---

**最后更新：** 2026年1月17日
