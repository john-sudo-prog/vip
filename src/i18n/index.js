import { createI18n } from 'vue-i18n'

// 异步加载语言包
const messages = {
  'zh-CN': () => import('./zh-CN'),
  'zh-TW': () => import('./zh-TW'),
  'en': () => import('./en')
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
  messages: {
    'zh-CN': {},
    'zh-TW': {},
    'en': {}
  },
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false
})

// 异步加载语言包
export async function loadLanguageAsync(locale) {
  // 检查语言是否已加载
  if (!Object.keys(i18n.global.messages).includes(locale)) {
    const messages = await import(`./${locale}`)
    i18n.global.setLocaleMessage(locale, messages.default)
  }
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
}

export default i18n 