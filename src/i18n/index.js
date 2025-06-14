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

// 获取初始语言设置
const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  console.log('Initial locale:', savedLocale)
  return savedLocale || 'zh-TW'
}

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

// 导出语言包和实例
export { messages }
export default i18n 