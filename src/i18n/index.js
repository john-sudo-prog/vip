import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import en from './en'

const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en
}

// 获取初始语言设置
const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && messages[savedLocale]) {
    console.log('Using saved locale:', savedLocale)
    return savedLocale
  }
  return 'zh-TW'
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

// 监听语言变化
i18n.global.locale.value = getInitialLocale()

// 导出实例和消息
export { i18n as default, messages } 