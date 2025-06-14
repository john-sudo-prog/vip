import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import en from './en'

// 获取浏览器语言或存储的语言设置
const getBrowserLanguage = () => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) return savedLocale
  
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.includes('zh-tw') || browserLang.includes('zh-hk')) return 'zh-TW'
  if (browserLang.includes('zh-cn') || browserLang.includes('zh-sg')) return 'zh-CN'
  if (browserLang.includes('en')) return 'en'
  
  return 'zh-TW' // 默认使用繁体中文
}

// 预加载所有语言文件
const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en
}

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages,
  sync: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false,
  globalInjection: true
})

// 确保语言设置被保存
const currentLocale = getBrowserLanguage()
i18n.global.locale.value = currentLocale
localStorage.setItem('locale', currentLocale)

// 导出 i18n 实例
export default i18n 