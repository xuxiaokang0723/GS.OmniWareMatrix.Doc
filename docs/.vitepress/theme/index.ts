import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import GiteeVersion from './components/GiteeVersion.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('GiteeVersion', GiteeVersion)
  }
}
