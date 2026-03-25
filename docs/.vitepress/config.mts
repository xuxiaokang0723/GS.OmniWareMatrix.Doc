import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "WCS调试工具使用文档",
  description: "WCS调试工具的详细使用指南",
  
  // 外观设置：默认暗色模式
  appearance: 'dark',
  
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
      { text: 'V1.0', link: '/V1.0' },
      { text: '更新日志', link: '/change-log' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/guide/Introduction' },
          { text: '下载与部署', link: '/guide/start' },
          { text: '基础设置', link: '/guide/base-setting' },
        ]
      },
      {
        text: 'WCS 客户端',
        items: [
          { text: 'WCS 首页', link: '/guide/wcs/wcs-home' },
          { text: '监控页面', link: '/guide/wcs/monitor' },
          { text: '设备中心', link: '/guide/wcs/device-center' },
          { text: '任务中心', link: '/guide/wcs/task-center',
            items: [
              { text: '任务诊断', link: '/guide/wcs/task-center/task-diagnosis' }
            ]
           },
          { text: '数据导入', link: '/guide/wcs/data-import' },
          { text: '历史回放', link: '/guide/wcs/history-playback' },
          { text: '工具中心', link: '/guide/wcs/tool-center' },
          { text: '输送线手动控制（推荐）', link: '/guide/wcs/wcs-conveyor-manual-control' },
        ]
      },
      {
        text: '数据监控',
        items: [
          { text: 'S7 数据采集', link: '/guide/data-monitor/s7-datacollection' },
          { text: '输送线手动控制部署', link: '/guide/data-monitor/conveyor-manual-control' },
          { text: '输送线手动控制使用（用户版）', link: '/guide/data-monitor/conveyor-manual-control-user' }
        ]
      },
      {
        text: '模拟仿真',
        items: [
          { text: '介绍', link: '/guide/simulation/Introduction' },
          { text: '设备模拟器', link: '/guide/simulation/device-simulator' }
        ]
      },
      {
        text: 'FAQ',
        items: [   
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/GenSong2025/GS.OmniWareMatrix' },
      //Minio
      { icon: 'minio', link: 'http://gen-song.vip:11433/' },
      //Gitee
      { icon: 'gitee', link: 'https://gitee.com/xxk0723/GS.OmniWareMatrix/releases' },
      //GitHub
      { icon: 'github', link: '' },
    ],

    // 页脚
    footer: {
      message: 'WCS 调试工具',
      copyright: 'Copyright © 2026'
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
}))
