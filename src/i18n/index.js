import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import en from './en'

const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

// 确保导出的是实例
export { i18n as default, messages } 