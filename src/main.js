import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { messages } from './i18n'

const i18n = createI18n({
  // 使用 Composition API 模式，支持 useI18n()
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages,
  // 允许在模板中直接使用 `$t`
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false
})

// 创建应用实例
const app = createApp(App)

// 使用插件
app.use(router)
app.use(i18n)

// 挂载应用
app.mount('#app') 