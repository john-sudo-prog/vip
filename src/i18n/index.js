import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import en from './en'

// 创建语言包对象
const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en
}

// 获取初始语言设置
const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  console.log('Saved locale:', savedLocale)
  return savedLocale || 'zh-TW'
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false
})

// 导出i18n实例和语言包
export { messages }
export default i18n 