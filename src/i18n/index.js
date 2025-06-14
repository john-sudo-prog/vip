import { createI18n } from 'vue-i18n'
import zhCN from '../assets/zh-CN'
import zhTW from '../assets/zh-TW'
import en from '../assets/en'

// 确保语言包被正确导入
console.log('Language packs loaded:', { zhCN, zhTW, en })

const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh-TW',
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  silentTranslationWarn: false, // 开启警告以便调试
  silentFallbackWarn: false,
  missingWarn: true,
  fallbackWarn: true
})

// 导出语言包和实例
export { messages }
export default i18n 