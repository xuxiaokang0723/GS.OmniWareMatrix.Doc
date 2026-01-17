# 安装和使用说明

## 📦 项目说明

本项目使用 VitePress 将 WCS调试工具使用文档 构建为一个现代化的静态网站。

## 🚀 快速开始

### 第一步：安装 Node.js

确保您的电脑上已安装 Node.js（建议版本 18 或更高）。

**下载地址**: https://nodejs.org/

安装后，在命令行中运行以下命令验证：

```bash
node --version
npm --version
```

### 第二步：安装项目依赖

#### 方式一：使用批处理文件（推荐Windows用户）

双击 `install.bat` 文件，等待依赖安装完成。

#### 方式二：使用命令行

在项目根目录下（即包含 package.json 的目录），打开命令行窗口，运行：

```bash
npm install
```

这将安装所有必需的依赖包，包括 VitePress。

如果安装速度慢，可以使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### 第三步：启动开发服务器

#### 方式一：使用批处理文件

双击 `dev.bat` 文件，开发服务器将自动启动。

#### 方式二：使用命令行

安装完成后，运行以下命令启动开发服务器：

```bash
npm run docs:dev
```

开发服务器启动后，您将看到类似以下的提示：

```
vitepress v1.0.0

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

在浏览器中打开 `http://localhost:5173` 即可预览网站。

**特点：**
- 🔥 支持热更新，修改文件后自动刷新
- ⚡ 快速响应，毫秒级编译
- 📱 响应式设计，支持移动端

## 🏗️ 构建生产版本

当您准备好部署网站时，运行以下命令构建生产版本：

#### 方式一：使用批处理文件

双击 `build.bat` 文件，构建完成后，静态文件位于 `docs\.vitepress\dist` 目录。

#### 方式二：使用命令行

```bash
npm run docs:build
```

构建完成后，静态文件将生成在 `docs\.vitepress\dist` 目录下。

您可以将这个 `dist` 目录部署到任何静态网站托管服务，例如：
- GitHub Pages
- Netlify
- Vercel
- 或者您自己的服务器

## 👀 预览生产版本

构建完成后，您可以在本地预览生产版本：

```bash
npm run docs:preview
```

这将启动一个本地服务器来预览构建后的网站。

## 🎨 自定义配置

### 修改网站配置

编辑 `docs\.vitepress\config.mts` 文件可以修改：
- 网站标题和描述
- 导航菜单
- 侧边栏结构
- 搜索功能
- 页脚信息
- base 路径（用于部署）

### 添加新页面

在 `docs/` 目录下创建新的 `.md` 文件，然后在 `config.mts` 中添加到导航或侧边栏即可。

## 📝 编辑文档内容

主要文档内容位于 `docs\guide\index.md`，使用 Markdown 格式编写。

**Markdown 语法特性：**
- 支持标题、列表、表格等基本语法
- 支持代码块高亮
- 支持图片插入
- 支持自定义容器（提示框、警告框等）
- 支持 Vue 组件（高级功能）

**示例：**

```markdown
# 标题

## 二级标题

- 列表项 1
- 列表项 2

::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

![图片描述](/images/example.png)
```

## 🖼️ 图片管理

所有图片文件存放在 `docs\public\images\` 目录下。

在 Markdown 中引用图片：

```markdown
![图片描述](/images/image-1.png)
```

**注意：** 路径以 `/` 开头，相对于 `public` 目录。

## 🔧 常见问题

### Q: 运行 npm install 时速度很慢怎么办？

A: 可以使用国内镜像源：

```bash
npm config set registry https://registry.npmmirror.com
```

### Q: 图片不显示怎么办？

A: 检查以下几点：
1. 图片路径是否正确（以 `/` 开头）
2. 图片是否已复制到 `docs\public\images\` 目录
3. 文件名是否匹配（注意大小写）

### Q: 修改配置后没有生效？

A: 尝试以下步骤：
1. 停止开发服务器（Ctrl+C）
2. 删除 `docs\.vitepress\cache` 目录（如果存在）
3. 重新运行 `npm run docs:dev`

### Q: 端口被占用？

A: 在 `config.mts` 中添加端口配置：

```typescript
export default defineConfig({
  // ... 其他配置
  vite: {
    server: {
      port: 3000  // 修改为其他端口
    }
  }
})
```

### Q: 构建后的网站在服务器上无法访问？

A: 检查以下几点：
1. 确认 `config.mts` 中的 `base` 配置是否正确
2. 检查服务器的目录权限
3. 确认服务器已正确配置 URL 重写规则（用于 SPA 路由）

## 📚 学习资源

- **VitePress 官方文档**: https://vitepress.dev/
- **Markdown 语法指南**: https://www.markdownguide.org/
- **Vue 3 文档**: https://vuejs.org/

## 💡 提示

- 开发时保持开发服务器运行，可以实时预览修改效果
- 定期运行 `npm run docs:build` 确保构建成功
- 建议使用 Git 管理项目版本
- 部署前务必测试生产版本

## 📮 技术支持

如有问题，请联系技术支持团队。

---

**祝您使用愉快！** 🎉
