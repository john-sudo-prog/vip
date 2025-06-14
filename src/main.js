import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { messages } from './i18n'
import './assets/tailwind.css'

// 创建应用实例
const app = createApp(App)

// 检查i18n配置
console.log('i18n messages:', messages)
console.log('Current locale:', i18n.global.locale.value)

// 使用插件
app.use(i18n)
app.use(router)

// 挂载应用
app.mount('#app') 