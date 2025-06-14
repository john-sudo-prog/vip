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
  silentTranslationWarn: false,
  silentFallbackWarn: false,
  missingWarn: true,
  fallbackWarn: true,
  runtimeOnly: false,
  allowComposition: true
})

// 导出语言包和实例
export { messages }
export default i18n 