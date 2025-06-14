import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { messages } from './i18n'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh-TW',
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

// 创建应用实例
const app = createApp(App)

// 使用插件
app.use(router)
app.use(i18n)

// 挂载应用
app.mount('#app') 