import { createI18n } from 'vue-i18n'
import zhCN from '@/assets/zh-CN'
import zhTW from '@/assets/zh-TW'
import en from '@/assets/en'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh-TW',
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en': en
  },
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false
})

export default i18n 