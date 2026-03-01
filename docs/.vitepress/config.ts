import { defineConfig } from 'vitepress'

export default defineConfig({
  // 当使用自定义域名时，base 应该设置为 '/'（或者直接移除该行，因为默认就是 '/'）
  // 之前的 '/ets-vitepress/' 仅适用于 github.io/repo-name 的情况
  base: '/',
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    // 适配深色模式的 theme-color
    ['script', {}, `
      (() => {
        const updateThemeColor = () => {
          const isDark = document.documentElement.classList.contains('dark');
          document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#1b1b1f' : '#ffffff');
        };
        const observer = new MutationObserver(updateThemeColor);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        updateThemeColor();
      })()
    `],
    // 引入 Fluent Emoji 3D 替换库
    ['script', { src: 'https://emoji.fluent-cdn.com/latest/fluentemoji.min.js', crossorigin: 'anonymous' }]
  ],
  title: 'EtsPress',
  description: 'TGNL Admin 项目文档',

  // 多语言（右上角语言切换）
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          {
            text: '1.3.2',
            items: [
              { text: '1.3.2（当前）', link: '/' },
              { text: '1.3.1', link: '/' },
              { text: '1.3.0', link: '/' }
            ]
          }
        ],
        sidebar: {
          '/': [
            {
              text: '项目概览',
              collapsed: false,
              items: [
                { text: '项目介绍', link: '/guide/app-store-intro' },
                { text: '开发计划', link: '/guide/app-store-roadmap' }
              ]
            },
            {
              text: '快速开始',
              collapsed: false,
              items: [
                { text: '快速部署', link: '/guide/quick-deployment' },
                { text: '配置说明', link: '/guide/configuration-guide' }
              ]
            },
            {
              text: '功能与架构',
              collapsed: false,
              items: [
                { text: '功能详解', link: '/guide/app-store-features' },
                { text: '架构与安全', link: '/guide/app-store-architecture' }
              ]
            },
            {
              text: '开发者中心',
              collapsed: false,
              items: [
                { text: '开发者指南', link: '/guide/app-store-dev-guide' }
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    // 顶部搜索输入框（Search ⌘K）
    search: {
      provider: 'local'
    },
    // 全局大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://hfz.pw' }
    ],
    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present EtsPress'
    }
  }
})

