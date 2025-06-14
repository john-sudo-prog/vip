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

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en': en
  },
  sync: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

// 监听语言变化并保存到 localStorage
i18n.global.locale.value = getBrowserLanguage()
localStorage.setItem('locale', i18n.global.locale.value)

export default i18n 