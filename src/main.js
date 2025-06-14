import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/tailwind.css'

const app = createApp(App)

// 确保 i18n 在路由之前初始化
app.use(i18n)
app.use(router)

// 等待 i18n 准备就绪
i18n.global.locale.value = localStorage.getItem('locale') || 'zh-TW'

app.mount('#app') 