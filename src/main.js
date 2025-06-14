import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { loadLanguageAsync } from './i18n'
import './assets/tailwind.css'

// 创建应用实例
const app = createApp(App)

// 使用插件
app.use(i18n)
app.use(router)

// 初始化语言设置
const savedLocale = localStorage.getItem('locale') || 'zh-TW'
loadLanguageAsync(savedLocale).then(() => {
  // 挂载应用
  app.mount('#app')
}) 