import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.js'
import zhTW from './zh-TW.js'
import en from './en.js'

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