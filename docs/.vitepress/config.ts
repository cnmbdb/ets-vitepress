import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'TGNL Admin 文档',
  description: 'TGNL Admin 项目文档',

  // 多语言（右上角语言切换）
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      link: '/pt/'
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/'
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/'
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/'
    }
  },

  themeConfig: {
    // 顶部搜索输入框（Search ⌘K）
    search: {
      provider: 'local'
    },

    // 顶部导航 + 版本下拉
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '参考', link: '/api/' },
      {
        text: 'Vitejs 中文网',
        link: 'https://vitejs.cn/vitepress/',
        target: '_blank'
      },
      {
        text: '1.3.2',
        items: [
          { text: '1.3.2（当前）', link: '/' },
          { text: '1.3.1', link: '/' },
          { text: '1.3.0', link: '/' }
        ]
      }
    ]
  }
})

