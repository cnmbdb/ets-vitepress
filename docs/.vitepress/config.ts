import { defineConfig } from 'vitepress'

const sharedNav = [
  {
    text: '首页',
    items: [
      { text: '网站首页', link: 'https://hfz.pw/home' },
      { text: 'HF-Web', link: 'https://hfz.pw/' },
      { text: '商城首页', link: 'https://hfz.pw/shop' }
    ]
  },
  {
    text: '产品',
    items: [
      { text: 'Token API', link: 'https://token.macosabc.com/' },
      { text: 'TelegramBot', link: 'https://telegrampress.hfz.pw/' },
      { text: 'ETS插件扩展平台', link: 'https://dujiaoka-ets.hfz.pw/' },
      { text: '服务器 / VPS', link: 'https://cloud.hfz.pw/' }
    ]
  },
  {
    text: '教程导航',
    items: [
      { text: '基础教学', link: 'https://hfz.pw/' },
      { text: '发卡网站', link: 'https://hfz.pw/' },
      { text: '收款 / 支付程序', link: 'https://hfz.pw/' },
      { text: 'WordPress', link: 'https://hfz.pw/' },
      { text: 'HTML', link: 'https://hfz.pw/' },
      { text: 'WHMCS', link: 'https://hfz.pw/' },
      { text: 'Telegram机器人', link: 'https://hfz.pw/' },
      { text: 'ChatGPT', link: 'https://hfz.pw/' }
    ]
  },
  {
    text: '合作',
    items: [
      { text: '担保合作平台', link: 'https://hfz.pw/' },
      { text: '入驻 / 发布教程', link: 'https://hfz.pw/' },
      { text: '克隆代理本站', link: 'https://hfz.pw/' }
    ]
  },
  {
    text: '平台入口',
    items: [
      { text: '自由货源平台', link: 'https://hfz.pw/' },
      { text: '商城首页', link: 'https://store.hfz.pw/' }
    ]
  },
  {
    text: '在线联系',
    items: [
      { text: 'Telegram客服', link: 'https://t.me/HFTGID' }
    ]
  }
]

const zhSidebar = {
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
      text: '已上线插件扩展',
      collapsed: false,
      items: [
        {
          text: 'Wordpress',
          collapsed: false,
          items: [
            {
              text: '1. YingChun主题',
              collapsed: false,
              items: [
                { text: '程序介绍', link: '/plugins/wordpress/yingchun-theme/intro' }
              ]
            },
            {
              text: '2. 博客新闻文章机器人',
              collapsed: false,
              items: [
                { text: '程序介绍', link: '/plugins/wordpress/blog-news-bot/intro' }
              ]
            }
          ]
        },
        {
          text: 'dujiao-next',
          collapsed: false,
          items: [
            { text: '1. 首页去广告页脚', link: '/plugins/dujiao-next/remove-ad-footer' },
            { text: '2. 发卡机器人', link: '/plugins/dujiao-next/faka-bot' },
            { text: '3. Yingchun主题', link: '/plugins/dujiao-next/yingchun-theme' },
            { text: '4. Alouer授权合约插件', link: '/plugins/dujiao-next/alouer-license' },
            { text: '5. AER流媒体账号合租主题', link: '/plugins/dujiao-next/aer-streaming' }
          ]
        },
        {
          text: '异次元发卡',
          collapsed: false,
          items: [
            { text: '1. YingChun主题', link: '/plugins/yiciyuan/yingchun-theme' },
            { text: '2. 发卡机器人', link: '/plugins/yiciyuan/faka-bot' },
            { text: '3. 对接某个上游A的API插件', link: '/plugins/yiciyuan/upstream-a-api' },
            { text: '4. 对接B上游的API插件', link: '/plugins/yiciyuan/upstream-b-api' }
          ]
        },
        {
          text: '智简魔方',
          collapsed: false,
          items: [
            { text: '1. YingChun主题', link: '/plugins/zhijianmofang/yingchun-theme' },
            { text: '2. tg机器人插件', link: '/plugins/zhijianmofang/tg-bot' }
          ]
        }
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

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
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
    ['script', { src: 'https://emoji.fluent-cdn.com/latest/fluentemoji.min.js', crossorigin: 'anonymous' }]
  ],
  title: 'EtsPress',
  description: 'TGNL Admin 项目文档',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-tw/',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      link: '/hi/',
      themeConfig: {
        nav: sharedNav,
        sidebar: zhSidebar
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://hfz.pw' }
    ]
  }
})

