import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/tailwind.css'

// 创建应用实例
const app = createApp(App)

// 使用插件
app.use(i18n)
app.use(router)

// 挂载应用
app.mount('#app') 