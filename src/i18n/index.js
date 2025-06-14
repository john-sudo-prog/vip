import { createI18n } from 'vue-i18n'

// 直接导入语言文件
const zhCN = {
  nav: {
    home: '首页',
    services: '产品服务',
    solutions: '解决方案',
    cases: '案例中心',
    partners: '合作伙伴',
    news: '公司动态',
    contact: '联系我们',
    logo: '点一云科技'
  },
  hero: {
    title: '全球领先的云服务提供商',
    company: '点一云科技',
    subtitle: '通过技术创新和资源整合，为企业提供全方位的云服务解决方案，助力客户在AI时代实现全球业务拓展。',
    learnMore: '了解更多',
    contactUs: '联系我们',
    stats: {
      countries: '国家地区',
      availability: '服务可用性'
    },
    partners: {
      alt: '合作伙伴'
    }
  },
  services: {
    title: '产品服务',
    subtitle: '为企业提供全方位的云服务解决方案',
    items: {
      cloud: {
        title: '公有云代理',
        desc: '提供稳定、高效、安全的云计算服务，快速开户，7*24小时技术支持'
      },
      gpu: {
        title: 'GPU算力服务',
        desc: '专为AI训练、深度学习等场景打造的高性能GPU云主机'
      },
      ai: {
        title: 'AI海外矩阵营销',
        desc: '一站式解决方案：云手机 + 自动化机器人 + AIGC'
      },
      edge: {
        title: '边缘计算',
        desc: '200+全球边缘节点，提供高效的跨境网络服务'
      },
      security: {
        title: '人工智能应用',
        desc: '高效处理海量数据和复杂模型，为AI应用提供强大的计算能力和资源'
      },
      sms: {
        title: '国际营销短信服务',
        desc: '覆盖全球230个国家和地区，支持多语言，帮助企业简单、快速、低成本地拓展海外市场'
      }
    }
  },
  solutions: {
    title: '解决方案',
    subtitle: '为您的业务提供全方位的技术支持',
    items: {
      crossBorder: {
        title: '一站式出海解决方案',
        desc: '为企业提供完整的跨境业务平台，包含市场调研、策略规划、运营管理等全方位服务'
      },
      sms: {
        title: '国际营销短信服务',
        desc: '提供全球覆盖的短信发送服务，支持多语言、高到达率、快速稳定'
      },
      ddos: {
        title: '高防DDoS解决方案',
        desc: '提供强大的DDoS防护能力，保护您的业务免受各类网络攻击的威胁'
      },
      acceleration: {
        title: '跨境加速安全解决方案',
        desc: '通过全球节点网络，为您的跨境业务提供安全、稳定、高速的网络加速服务'
      }
    }
  },
  cases: {
    title: '案例中心',
    subtitle: '探索我们的成功案例，了解如何为客户创造价值',
    items: {
      crossBorder: {
        title: '跨境电商解决方案',
        desc: '为某知名跨境电商平台提供一站式出海解决方案，包括支付系统、物流对接、多语言支持等，帮助客户快速拓展海外市场。',
        tags: {
          ecommerce: '跨境电商',
          payment: '支付系统',
          multilingual: '多语言'
        }
      },
      ddos: {
        title: '高防DDoS防护方案',
        desc: '为某游戏公司提供高防DDoS解决方案，通过智能防护系统有效抵御各类网络攻击，确保游戏服务器稳定运行。',
        tags: {
          protection: 'DDoS防护',
          gameserver: '游戏服务器',
          security: '网络安全'
        }
      }
    },
    backToHome: '返回首页'
  },
  news: {
    title: '公司动态',
    subtitle: '了解我们的最新发展',
    content: {
      paragraph1: '香港点一云科技有限公司是华为云、腾讯云、阿里云、亚马逊云等云厂科技核心级服务合作伙伴，致力于为客户提供云运维托管、成本管理、架构咨询、云迁移、数据库等服务，覆盖游戏、音视频直播、WEB3、零售电商、AI智能、新能源等行业。始终为客户提供可信赖的云上服务与解决方案，通过与各大云原厂的技术深度集成，为客户提供音视频直播、WEB3区块链生态、现代AI智能分析、游戏托管运维、电商服务、内容审核等多行业解决方案，并将持续探索云计算创新云改革，为客户提供更全面、高效、安全的云服务，助力其在数字化时代取得成功。',
      paragraph2: '点一云总部位于香港，在迪拜、深圳设有分公司，现有团队已有50+人，公司具有AWS、腾讯云、华为云等专业认证。成员均为在IT互联网行业服务三年以上，拥有丰富的技术以及经验。'
    }
  },
  partners: {
    title: '合作伙伴',
    items: {
      partner1: '华为云',
      partner2: '腾讯云',
      partner3: '阿里云',
      partner4: '亚马逊云',
      partner5: '微软云',
      partner6: '谷歌云'
    }
  },
  contact: {
    title: '联系我们',
    subtitle: '随时为您提供专业服务',
    email: {
      title: '邮箱',
      value: 'san@dycloud.ai'
    },
    phone: {
      title: '电话',
      value: '15989283653 刘先生'
    },
    wechat: {
      title: '微信',
      qrcode: '微信二维码',
      scan: '扫码添加微信'
    },
    copyright: '© 2024 香港点一云科技有限公司. All rights reserved.'
  }
}

const zhTW = {
  nav: {
    home: '首頁',
    services: '產品服務',
    solutions: '解決方案',
    cases: '案例中心',
    partners: '合作夥伴',
    news: '公司動態',
    contact: '聯繫我們',
    logo: '點一雲科技'
  },
  hero: {
    title: '全球領先的雲服務提供商',
    company: '點一雲科技',
    subtitle: '通過技術創新和資源整合，為企業提供全方位的雲服務解決方案，助力客戶在AI時代實現全球業務拓展。',
    learnMore: '了解更多',
    contactUs: '聯繫我們',
    stats: {
      countries: '國家地區',
      availability: '服務可用性'
    },
    partners: {
      alt: '合作夥伴'
    }
  },
  services: {
    title: '產品服務',
    subtitle: '為企業提供全方位的雲服務解決方案',
    items: {
      cloud: {
        title: '公有雲代理',
        desc: '提供穩定、高效、安全的雲計算服務，快速開戶，7*24小時技術支持'
      },
      gpu: {
        title: 'GPU算力服務',
        desc: '專為AI訓練、深度學習等場景打造的高性能GPU雲主機'
      },
      ai: {
        title: 'AI海外矩陣營銷',
        desc: '一站式解決方案：雲手機 + 自動化機器人 + AIGC'
      },
      edge: {
        title: '邊緣計算',
        desc: '200+全球邊緣節點，提供高效的跨境網絡服務'
      },
      security: {
        title: '人工智能應用',
        desc: '高效處理海量數據和複雜模型，為AI應用提供強大的計算能力和資源'
      },
      sms: {
        title: '國際營銷短信服務',
        desc: '覆蓋全球230個國家和地區，支持多語言，幫助企業簡單、快速、低成本地拓展海外市場'
      }
    }
  },
  solutions: {
    title: '解決方案',
    subtitle: '為您的業務提供全方位的技術支持',
    items: {
      crossBorder: {
        title: '一站式出海解決方案',
        desc: '為企業提供完整的跨境業務平台，包含市場調研、策略規劃、運營管理等全方位服務'
      },
      sms: {
        title: '國際營銷短信服務',
        desc: '提供全球覆蓋的短信發送服務，支持多語言、高到達率、快速穩定'
      },
      ddos: {
        title: '高防DDoS解決方案',
        desc: '提供強大的DDoS防護能力，保護您的業務免受各類網絡攻擊的威脅'
      },
      acceleration: {
        title: '跨境加速安全解決方案',
        desc: '通過全球節點網絡，為您的跨境業務提供安全、穩定、高速的網絡加速服務'
      }
    }
  },
  cases: {
    title: '案例中心',
    subtitle: '探索我們的成功案例，了解如何為客戶創造價值',
    items: {
      crossBorder: {
        title: '跨境電商解決方案',
        desc: '為某知名跨境電商平台提供一站式出海解決方案，包括支付系統、物流對接、多語言支持等，幫助客戶快速拓展海外市場。',
        tags: {
          ecommerce: '跨境電商',
          payment: '支付系統',
          multilingual: '多語言'
        }
      },
      ddos: {
        title: '高防DDoS防護方案',
        desc: '為某遊戲公司提供高防DDoS解決方案，通過智能防護系統有效抵禦各類網絡攻擊，確保遊戲服務器穩定運行。',
        tags: {
          protection: 'DDoS防護',
          gameserver: '遊戲服務器',
          security: '網絡安全'
        }
      }
    },
    backToHome: '返回首頁'
  },
  news: {
    title: '公司動態',
    subtitle: '了解我們的最新發展',
    content: {
      paragraph1: '香港點一雲科技有限公司是華為雲、騰訊雲、阿里雲、亞馬遜雲等雲廠科技核心級服務合作夥伴，致力於為客戶提供雲運維託管、成本管理、架構諮詢、雲遷移、數據庫等服務，覆蓋遊戲、音視頻直播、WEB3、零售電商、AI智能、新能源等行業。始終為客戶提供可信賴的雲上服務與解決方案，通過與各大雲原廠的技術深度集成，為客戶提供音視頻直播、WEB3區塊鏈生態、現代AI智能分析、遊戲託管運維、電商服務、內容審核等多行業解決方案，並將持續探索雲計算創新雲改革，為客戶提供更全面、高效、安全的雲服務，助力其在數字化時代取得成功。',
      paragraph2: '點一雲總部位於香港，在迪拜、深圳設有分公司，現有團隊已有50+人，公司具有AWS、騰訊雲、華為雲等專業認證。成員均為在IT互聯網行業服務三年以上，擁有豐富的技術以及經驗。'
    }
  },
  partners: {
    title: '合作夥伴',
    items: {
      partner1: '華為雲',
      partner2: '騰訊雲',
      partner3: '阿里雲',
      partner4: '亞馬遜雲',
      partner5: '微軟雲',
      partner6: '谷歌雲'
    }
  },
  contact: {
    title: '聯繫我們',
    subtitle: '隨時為您提供專業服務',
    email: {
      title: '郵箱',
      value: 'san@dycloud.ai'
    },
    phone: {
      title: '電話',
      value: '15989283653 劉先生'
    },
    wechat: {
      title: '微信',
      qrcode: '微信二維碼',
      scan: '掃碼添加微信'
    },
    copyright: '© 2024 香港點一雲科技有限公司. All rights reserved.'
  }
}

const en = {
  nav: {
    home: 'Home',
    services: 'Services',
    solutions: 'Solutions',
    cases: 'Cases',
    partners: 'Partners',
    news: 'News',
    contact: 'Contact',
    logo: 'DianYi Cloud'
  },
  hero: {
    title: 'Global Leading Cloud Service Provider',
    company: 'DianYi Cloud',
    subtitle: 'Through technological innovation and resource integration, we provide comprehensive cloud service solutions for enterprises, helping customers achieve global business expansion in the AI era.',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    stats: {
      countries: 'Countries',
      availability: 'Service Availability'
    },
    partners: {
      alt: 'Partners'
    }
  },
  services: {
    title: 'Services',
    subtitle: 'Comprehensive Cloud Service Solutions for Enterprises',
    items: {
      cloud: {
        title: 'Public Cloud Agency',
        desc: 'Providing stable, efficient, and secure cloud computing services with quick account setup and 24/7 technical support'
      },
      gpu: {
        title: 'GPU Computing Service',
        desc: 'High-performance GPU cloud hosts specifically designed for AI training and deep learning scenarios'
      },
      ai: {
        title: 'AI Overseas Matrix Marketing',
        desc: 'One-stop solution: Cloud Phone + Automation Robot + AIGC'
      },
      edge: {
        title: 'Edge Computing',
        desc: '200+ global edge nodes providing efficient cross-border network services'
      },
      security: {
        title: 'AI Applications',
        desc: 'Efficiently processing massive data and complex models, providing powerful computing capabilities and resources for AI applications'
      },
      sms: {
        title: 'International SMS Marketing',
        desc: 'Covering 230 countries and regions worldwide, supporting multiple languages, helping enterprises expand overseas markets simply, quickly, and cost-effectively'
      }
    }
  },
  solutions: {
    title: 'Solutions',
    subtitle: 'Comprehensive Technical Support for Your Business',
    items: {
      crossBorder: {
        title: 'One-Stop Overseas Solution',
        desc: 'Providing enterprises with a complete cross-border business platform, including market research, strategy planning, and operation management'
      },
      sms: {
        title: 'International SMS Service',
        desc: 'Providing globally covered SMS sending services with multi-language support, high delivery rate, and fast stability'
      },
      ddos: {
        title: 'Anti-DDoS Solution',
        desc: 'Providing powerful DDoS protection capabilities to protect your business from various network attacks'
      },
      acceleration: {
        title: 'Cross-Border Acceleration Security Solution',
        desc: 'Providing secure, stable, and high-speed network acceleration services for your cross-border business through global node network'
      }
    }
  },
  cases: {
    title: 'Case Studies',
    subtitle: 'Explore our success stories and learn how we create value for our clients',
    items: {
      crossBorder: {
        title: 'Cross-Border E-commerce Solution',
        desc: 'Provided a one-stop overseas solution for a well-known cross-border e-commerce platform, including payment systems, logistics integration, and multi-language support, helping the client quickly expand into overseas markets.',
        tags: {
          ecommerce: 'Cross-Border E-commerce',
          payment: 'Payment System',
          multilingual: 'Multi-language'
        }
      },
      ddos: {
        title: 'Anti-DDoS Protection Solution',
        desc: 'Provided an anti-DDoS solution for a gaming company, effectively defending against various network attacks through an intelligent protection system, ensuring stable operation of game servers.',
        tags: {
          protection: 'DDoS Protection',
          gameserver: 'Game Server',
          security: 'Network Security'
        }
      }
    },
    backToHome: 'Back to Home'
  },
  news: {
    title: 'Company News',
    subtitle: 'Learn about our latest developments',
    content: {
      paragraph1: 'Hong Kong DianYi Cloud Technology Co., Ltd. is a core-level service partner of Huawei Cloud, Tencent Cloud, Alibaba Cloud, Amazon Cloud, and other cloud manufacturers. We are dedicated to providing cloud operation and maintenance hosting, cost management, architecture consulting, cloud migration, database, and other services, covering industries such as gaming, video streaming, WEB3, retail e-commerce, AI intelligence, and new energy. We consistently provide reliable cloud services and solutions to our clients. Through deep technical integration with major cloud manufacturers, we provide solutions for video streaming, WEB3 blockchain ecosystem, modern AI intelligent analysis, game hosting and operation, e-commerce services, content moderation, and other industries. We will continue to explore cloud computing innovation and reform, providing more comprehensive, efficient, and secure cloud services to help our clients succeed in the digital era.',
      paragraph2: 'DianYi Cloud is headquartered in Hong Kong with branches in Dubai and Shenzhen. Our current team has over 50 members, and the company holds professional certifications from AWS, Tencent Cloud, and Huawei Cloud. All team members have over three years of experience in the IT internet industry, possessing rich technical expertise and experience.'
    }
  },
  partners: {
    title: 'Partners',
    items: {
      partner1: 'Huawei Cloud',
      partner2: 'Tencent Cloud',
      partner3: 'Alibaba Cloud',
      partner4: 'Amazon Cloud',
      partner5: 'Microsoft Cloud',
      partner6: 'Google Cloud'
    }
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Professional Service Available 24/7',
    email: {
      title: 'Email',
      value: 'san@dycloud.ai'
    },
    phone: {
      title: 'Phone',
      value: '15989283653 Mr. Liu'
    },
    wechat: {
      title: 'WeChat',
      qrcode: 'WeChat QR Code',
      scan: 'Scan to add WeChat'
    },
    copyright: '© 2024 Hong Kong DianYi Cloud Technology Co., Ltd. All rights reserved.'
  }
}

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