import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WCS调试工具使用文档",
  description: "WCS调度系统调试工具的详细使用指南",
  
  // 重要：GitHub Pages部署配置
  // 如果部署到 https://username.github.io/repo-name/
  // 则需要设置 base 为 '/repo-name/'
  // 如果部署到自定义域名或 https://username.github.io/，则设置为 '/'
  base: '/GS.OmniWareMatrix.Doc/',  // 请根据您的仓库名称修改
  
  // 语言设置
  lang: 'zh-CN',
  
  // 最后更新时间
  lastUpdated: true,
  
  // 清理URL
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/' },
      // { 
      //   text: '开发文档',
      //   items: [
      //     { text: '安装和使用', link: '/development/setup' },
      //     { text: '部署指南', link: '/development/deployment' },
      //     { text: '项目概览', link: '/development/project-overview' },
      //     { text: '目录结构', link: '/development/structure' }
      //   ]
      // },
      { text: 'V1.0', link: '/V1.0' },
      { text: '更新日志', link: '/changelog' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '开始使用', link: '/guide/' }
        ]
      },
      {
        text: '功能说明',
        items: [
          { text: 'WCS客户端', link: '/guide/#wcs客户端功能' },
          { text: '本地工具', link: '/guide/#wcs本地工具' }
        ]
      },
      {
        text: '开发文档',
        items: [
          { text: '安装和使用', link: '/development/setup' },
          { text: '部署指南', link: '/development/deployment' },
          { text: '项目概览', link: '/development/project-overview' },
          { text: '目录结构', link: '/development/structure' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/yourusername/yourrepo' }
    ],

    // 页脚
    footer: {
      message: 'WCS调度系统调试工具',
      copyright: 'Copyright © 2026 GenSong'
    },

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲标题
    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    // 最后更新时间文本
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 返回顶部文本
    returnToTopLabel: '返回顶部',

    // 侧边栏文本
    sidebarMenuLabel: '菜单',

    // 深色模式切换文本
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
