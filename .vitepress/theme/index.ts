import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(VersionSelector)
    })
  }
} satisfies Theme

// 版本选择器组件
function VersionSelector() {
  const versions = [
    { text: '1.0.0', link: '/' },
    { text: '0.9.0', link: '/v0.9/' }
  ]
  
  return h('div', { class: 'version-selector' }, [
    h('select', {
      class: 'version-select',
      value: '/',
      onChange: (e: Event) => {
        const target = e.target as HTMLSelectElement
        if (target.value) {
          window.location.href = target.value
        }
      }
    }, versions.map(v => 
      h('option', { 
        value: v.link,
        selected: v.link === '/'
      }, v.text)
    ))
  ])
}
