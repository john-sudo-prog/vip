import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.js'
import zhTW from './zh-TW.js'
import en from './en.js'

// 语言包
export const messages = {
  'zh-CN': {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务项目',
      contact: '联系我们'
    },
    hero: {
      title: '专业翻译服务',
      subtitle: '提供高质量的多语言翻译解决方案',
      description: '我们提供专业的翻译服务，包括文档翻译、网站本地化、口译服务等。',
      cta: '立即咨询',
      contact: '联系我们'
    }
  },
  'zh-TW': {
    nav: {
      home: '首頁',
      about: '關於我們',
      services: '服務項目',
      contact: '聯繫我們'
    },
    hero: {
      title: '專業翻譯服務',
      subtitle: '提供高質量的多語言翻譯解決方案',
      description: '我們提供專業的翻譯服務，包括文檔翻譯、網站本地化、口譯服務等。',
      cta: '立即諮詢',
      contact: '聯繫我們'
    }
  },
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

class I18n {
  constructor() {
    this.locale = localStorage.getItem('locale') || 'zh-TW'
    this.messages = messages
  }

  t(key) {
    const keys = key.split('.')
    let result = this.messages[this.locale]
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k]
      } else {
        return key
      }
    }
    
    return result
  }

  setLocale(locale) {
    this.locale = locale
    localStorage.setItem('locale', locale)
  }
}

export const i18nInstance = new I18n()
export default i18n 