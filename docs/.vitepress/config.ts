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
    `]
  ],
  title: 'TelegramPress',
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
            },
            {
              text: '旧版文档 (tgnl-admin)',
              collapsed: true,
              items: [
                {
                  text: '简介',
                  collapsed: false,
                  items: [
                    { text: '项目介绍', link: '/guide/introduction' }
                  ]
                },
                {
                  text: '部署指南',
                  collapsed: false,
                  items: [
                    { text: '快速开始', link: '/guide/getting-started' },
                    { text: '配置指南', link: '/guide/configuration' }
                  ]
                },
                {
                  text: '使用手册',
                  collapsed: false,
                  items: [
                    { text: '功能说明', link: '/guide/usage' }
                  ]
                }
              ]
            },
            {
              text: 'tgpro-admin',
              collapsed: false,
              items: [
                {
                  text: '简介',
                  collapsed: false,
                  items: [
                    { text: '项目介绍', link: '/tgpro-admin/introduction' }
                  ]
                },
                {
                  text: '部署指南',
                  collapsed: false,
                  items: [
                    { text: '快速开始', link: '/tgpro-admin/getting-started' },
                    { text: '配置指南', link: '/tgpro-admin/configuration' }
                  ]
                },
                {
                  text: '使用手册',
                  collapsed: false,
                  items: [
                    { text: '功能说明', link: '/tgpro-admin/usage' }
                  ]
                }
              ]
            },
            {
              text: 'tgbot-store',
              collapsed: false,
              items: [
                {
                  text: '简介',
                  collapsed: false,
                  items: [
                    { text: '项目介绍', link: '/tgbot-store/introduction' }
                  ]
                },
                {
                  text: '部署指南',
                  collapsed: false,
                  items: [
                    { text: '快速开始', link: '/tgbot-store/getting-started' }
                  ]
                },
                {
                  text: '使用手册',
                  collapsed: false,
                  items: [
                    { text: '功能说明', link: '/tgbot-store/usage' }
                  ]
                }
              ]
            },
            {
              text: 'tgbot-Ultra',
              collapsed: false,
              items: [
                {
                  text: '简介',
                  collapsed: false,
                  items: [
                    { text: '项目介绍', link: '/tgbot-Ultra/introduction' }
                  ]
                },
                {
                  text: '部署指南',
                  collapsed: false,
                  items: [
                    { text: '快速开始', link: '/tgbot-Ultra/getting-started' }
                  ]
                },
                {
                  text: '使用手册',
                  collapsed: false,
                  items: [
                    { text: '功能说明', link: '/tgbot-Ultra/usage' }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          {
            text: '1.3.2',
            items: [
              { text: '1.3.2 (Current)', link: '/en/' },
              { text: '1.3.1', link: '/en/' },
              { text: '1.3.0', link: '/en/' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                { text: 'Project Info', link: '/en/guide/introduction' }
              ]
            },
            {
              text: 'Deployment',
              collapsed: false,
              items: [
                { text: 'Quick Start', link: '/en/guide/getting-started' },
                { text: 'Configuration', link: '/en/guide/configuration' }
              ]
            },
            {
              text: 'Manual',
              collapsed: false,
              items: [
                { text: 'Usage', link: '/en/guide/usage' }
              ]
            }
          ]
        }
      }
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      link: '/pt/',
      themeConfig: {
        nav: [
           { text: '1.3.2', items: [{ text: '1.3.2', link: '/pt/' }] }
        ],
        sidebar: {
          '/pt/guide/': [
            {
              text: 'Guia',
              items: [
                { text: 'Introdução', link: '/pt/guide/introduction' },
                { text: 'Início Rápido', link: '/pt/guide/getting-started' },
                { text: 'Configuração', link: '/pt/guide/configuration' },
                { text: 'Uso', link: '/pt/guide/usage' }
              ]
            }
          ]
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      themeConfig: {
        nav: [
           { text: '1.3.2', items: [{ text: '1.3.2', link: '/ru/' }] }
        ],
        sidebar: {
          '/ru/guide/': [
            {
              text: 'Руководство',
              items: [
                { text: 'Введение', link: '/ru/guide/introduction' },
                { text: 'Быстрый старт', link: '/ru/guide/getting-started' },
                { text: 'Конфигурация', link: '/ru/guide/configuration' },
                { text: 'Использование', link: '/ru/guide/usage' }
              ]
            }
          ]
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      themeConfig: {
        nav: [
           { text: '1.3.2', items: [{ text: '1.3.2', link: '/es/' }] }
        ],
        sidebar: {
          '/es/guide/': [
            {
              text: 'Guía',
              items: [
                { text: 'Introducción', link: '/es/guide/introduction' },
                { text: 'Inicio Rápido', link: '/es/guide/getting-started' },
                { text: 'Configuración', link: '/es/guide/configuration' },
                { text: 'Uso', link: '/es/guide/usage' }
              ]
            }
          ]
        }
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/',
      themeConfig: {
        nav: [
           { text: '1.3.2', items: [{ text: '1.3.2', link: '/ko/' }] }
        ],
        sidebar: {
          '/ko/guide/': [
            {
              text: '가이드',
              items: [
                { text: '소개', link: '/ko/guide/introduction' },
                { text: '빠른 시작', link: '/ko/guide/getting-started' },
                { text: '구성', link: '/ko/guide/configuration' },
                { text: '사용법', link: '/ko/guide/usage' }
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
      copyright: 'Copyright © 2024-present TelegramPress'
    }
  }
})

