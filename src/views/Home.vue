<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0 group">
            <img src="../assets/img/logo.jpg" alt="点一云科技" class="h-8 transition-transform duration-300 group-hover:scale-105" />
          </div>
          
          <!-- 桌面端导航 -->
          <div class="hidden md:flex space-x-8">
            <a v-for="item in navItems" :key="item.id" 
               :href="item.href"
               @click.prevent="scrollToSection(item.href)"
               class="relative text-gray-600 hover:text-primary-600 transition-colors duration-300 py-2 group">
              <span class="relative z-10">{{ item.name }}</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                         group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <!-- 移动端菜单按钮 -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" 
                    class="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100/50 
                           transition-colors duration-300">
              <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
              <CloseIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- 移动端菜单 -->
        <div v-if="isMenuOpen" 
             class="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100/50
                    animate-slide-down">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a v-for="item in navItems" :key="item.id"
               :href="item.href"
               @click.prevent="scrollToSection(item.href)"
               class="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50/50 
                      rounded-lg transition-colors duration-300">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主横幅 -->
    <section id="home" class="min-h-[90vh] pt-16 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.3),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(90vh-4rem)]">
          <!-- 左侧内容 -->
          <div class="text-white space-y-8">
            <div class="space-y-4">
              <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                          rounded-full px-4 py-1 border border-blue-400/30 backdrop-blur-sm
                          hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 
                          transition-all duration-500">
                <span class="animate-pulse w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-medium">
                  全球领先的云服务提供商
                </span>
              </div>
              
              <h1 class="text-5xl lg:text-7xl font-bold tracking-tight">
                <span class="block text-transparent bg-clip-text animate-gradient-fast
                             bg-gradient-to-r from-white via-blue-300 to-purple-300">
                  点一云科技
                </span>
              </h1>
            </div>

            <div class="text-white">
              通过技术创新与资源整合，为企业提供全方位的云服务解决方案，
              助力客户在AI时代实现全球化业务拓展。
            </div>

            <div class="flex flex-wrap gap-4">
              <button @click="scrollToSection('cases')" 
                        class="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 
                                     transition-all duration-500 hover:scale-105 
                                     hover:shadow-lg hover:shadow-blue-500/25">
                <span>了解更多</span>
                <ArrowRightIcon class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button @click="scrollToSection('#contact')"
                      class="group relative inline-flex items-center gap-2 px-6 py-3 
                             border-2 border-gradient-to-r from-blue-400/50 to-purple-400/50
                             hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10
                             rounded-lg font-semibold text-white
                             transition-all duration-500">
                <span>联系我们</span>
                <PhoneIcon class="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>

            <!-- 数据统计 -->
            <div class="grid grid-cols-2 gap-4 pt-8 border-t border-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div class="space-y-2 group">
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                              from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300
                              transition-all duration-500">200+</span>
                </div>
                <p class="text-sm text-blue-200/70 group-hover:text-purple-200/70 transition-colors duration-500">
                  覆盖国家和地区
                </p>
              </div>
              <div class="space-y-2 group">
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                              from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300
                              transition-all duration-500">99.9%</span>
                </div>
                <p class="text-sm text-purple-200/70 group-hover:text-blue-200/70 transition-colors duration-500">
                  服务可用性
                </p>
              </div>
            </div>
          </div>

          <!-- 右侧图形 -->
          <div class="relative hidden lg:block">
            <!-- 背景光晕 -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent 
                        rounded-full blur-3xl animate-pulse-slow"></div>
            
            <div class="relative">
              <!-- 合作伙伴图片组 -->
              <div class="relative w-full h-[500px]">
                <!-- 第一组图片 -->
                <div class="absolute top-[10%] left-[15%] w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg 
                            border border-white/20 shadow-lg transform rotate-4
                            animate-float-1">
                  <img src="../assets/img/partner/1.jpg" alt="合作伙伴" class="w-full h-full object-contain p-4" />
                </div>
                <div class="absolute top-[25%] right-[20%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg 
                            border border-white/20 shadow-lg transform -rotate-6
                            animate-float-2">
                  <img src="../assets/img/partner/2.jpg" alt="合作伙伴" class="w-full h-full object-contain p-4" />
                </div>
                <div class="absolute bottom-[20%] left-[25%] w-36 h-36 bg-white/10 backdrop-blur-sm rounded-lg 
                            border border-white/20 shadow-lg transform rotate-3
                            animate-float-3">
                  <img src="../assets/img/partner/3.jpg" alt="合作伙伴" class="w-full h-full object-contain p-4" />
                </div>
                <div class="absolute top-[60%] right-[25%] w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg 
                            border border-white/20 shadow-lg transform -rotate-3
                            animate-float-4">
                  <img src="../assets/img/partner/4.jpg" alt="合作伙伴" class="w-full h-full object-contain p-4" />
                </div>
                <div class="absolute bottom-[35%] left-[10%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg 
                            border border-white/20 shadow-lg transform rotate-12
                            animate-float-5">
                  <img src="../assets/img/partner/5.jpg" alt="合作伙伴" class="w-full h-full object-contain p-4" />
                </div>
                
                <!-- 装饰线条 -->
                <div class="absolute inset-0">
                  <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r 
                              from-transparent via-blue-500/30 to-transparent
                              animate-pulse"></div>
                  <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b 
                              from-transparent via-purple-500/30 to-transparent
                              animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部装饰 -->
      <div class="absolute bottom-0 left-0 right-0">
        <div class="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </section>

    <!-- 产品服务 -->
    <section id="services" class="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-white">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid opacity-5"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <h2 class="section-title">产品服务</h2>
          <p class="section-subtitle">为您提供全方位的云服务解决方案</p>
        </div>

        <!-- 产品服务卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" 
               class="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 shadow-lg
                      hover:shadow-xl hover:from-blue-600 hover:to-blue-700
                      transform hover:-translate-y-1 transition-all duration-300">
            <div class="bg-white/10 backdrop-blur-lg rounded-lg p-3 w-16 h-16 mb-4
                        group-hover:bg-white/20 transition-colors duration-300">
              <component :is="service.icon" 
                         class="h-10 w-10 text-white group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">
              {{ service.title }}
            </h3>
            <p class="text-blue-100">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案 -->
    <section id="solutions" class="py-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-white">解决方案</h2>
          <p class="text-gray-400">为您的业务提供全方位的技术支持</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 一站式出海解决方案 -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
            <div class="p-8">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <GlobeAltIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white">一站式出海解决方案</h3>
              </div>
              <p class="text-blue-100">为企业提供完整的跨境业务平台，包含市场调研、策略规划、运营管理等全方位服务</p>
            </div>
          </div>

          <!-- 国际营销短信服务 -->
          <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden">
            <div class="p-8">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white">国际营销短信服务</h3>
              </div>
              <p class="text-green-100">提供全球覆盖的短信发送服务，支持多语言、高到达率、快速稳定</p>
            </div>
          </div>

          <!-- 高防DDoS解决方案 -->
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl overflow-hidden">
            <div class="p-8">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheckIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white">高防DDoS解决方案</h3>
              </div>
              <p class="text-purple-100">提供强大的DDoS防护能力，保护您的业务免受各类网络攻击的威胁</p>
            </div>
          </div>

          <!-- 跨境加速安全解决方案 -->
          <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl overflow-hidden">
            <div class="p-8">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <RocketLaunchIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white">跨境加速安全解决方案</h3>
              </div>
              <p class="text-indigo-100">通过全球节点网络，为您的跨境业务提供安全、稳定、高速的网络加速服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 案例中心 -->
    <section id="cases" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">案例中心</h2>
          <p class="text-lg text-gray-600">探索我们的成功案例，了解如何为客户创造价值</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 案例1 -->
          <a href="/blog/cross-border" class="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <!-- <div class="aspect-w-16 aspect-h-9">
              <img src="../assets/img/case1.jpg" alt="案例1" class="w-full h-full object-cover" />
            </div> -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">跨境电商解决方案</h3>
              <p class="text-gray-600 mb-4">为某知名跨境电商平台提供一站式出海解决方案，包括支付系统、物流对接、多语言支持等，帮助客户快速拓展海外市场。</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">跨境电商</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">支付系统</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">多语言</span>
              </div>
            </div>
          </a>

          <!-- 案例2 -->
          <a href="/blog/ddos" class="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <!-- <div class="aspect-w-16 aspect-h-9">
              <img src="../assets/img/case2.jpg" alt="案例2" class="w-full h-full object-cover" />
            </div> -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">高防DDoS防护方案</h3>
              <p class="text-gray-600 mb-4">为某游戏公司提供高防DDoS解决方案，通过智能防护系统有效抵御各类网络攻击，确保游戏服务器稳定运行。</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">DDoS防护</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">游戏服务器</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">网络安全</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 公司动态 -->
    <section id="news" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-white mb-4">公司动态</h2>
          <p class="text-gray-400">了解我们的最新发展</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700">
            <div class="prose prose-lg max-w-none prose-invert">
              <p class="text-gray-300 leading-relaxed">
                香港点一云科技有限公司是华为云、腾讯云、阿里云、亚马逊云等云厂科技核心级服务合作伙伴，致力于为客户提供云运维托管、成本管理、架构咨询、云迁移、数据库等服务，覆盖游戏、音视频直播、WEB3、零售电商、AI智能、新能源等行业。始终为客户提供可信赖的云上服务与解决方案，通过与各大云原厂的技术深度集成，为客户提供音视频直播、WEB3区块链生态、现代AI智能分析、游戏托管运维、电商服务、内容审核等多行业解决方案，并将持续探索云计算创新云改革，为客户提供更全面、高效、安全的云服务，助力其在数字化时代取得成功。
              </p>
              <p class="text-gray-300 leading-relaxed mt-6">
                点一云总部位于香港，在迪拜、深圳设有分公司，现有团队已有50+人，公司具有AWS、腾讯云、华为云等专业认证。成员均为在IT互联网行业服务三年以上，拥有丰富的技术以及经验。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <div id="contact" class="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-white mb-2">联系我们</h2>
          <p class="text-gray-400 text-sm">随时为您提供专业服务</p>
        </div>

        <!-- 联系方式 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-white mb-0.5">邮箱</h3>
                <p class="text-gray-400 text-sm">support@dianyicloud.com</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 9.19 19.86 19.86 0 0 1 .92 2.18 2 2 0 0 1 2.92 0h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L6.37 7.91a16 16 0 0 0 6.72 6.72l1.74-1.74a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-white mb-0.5">电话</h3>
                <p class="text-gray-400 text-sm">+852 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 社交媒体链接 -->
        <div class="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" class="group">
            <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </a>
          <a href="#" class="group relative">
            <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 flex items-center justify-center">
              <img src="../assets/img/wechat.png" alt="微信" class="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
            </div>
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
              <div class="bg-white p-2 rounded-lg shadow-lg w-36 h-36 flex flex-col items-center justify-center">
                <img src="../assets/img/logo.png" alt="微信二维码" class="w-28 h-28 object-contain rounded" />
                <div class="text-center mt-1 text-xs text-gray-600">扫码添加微信</div>
              </div>
            </div>
          </a>
          <a href="https://t.me" target="_blank" class="group">
            <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-sky-500/50 transition-all duration-300 flex items-center justify-center">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-sky-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
          </a>
        </div>

        <div class="mt-8 text-center">
          <p class="text-gray-500 text-sm">© 2024 香港点一云科技有限公司. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ChartBarIcon,
  EyeIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ChartPieIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  BeakerIcon,
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  ServerStackIcon,
  ClockIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/vue/24/outline'

// 导航菜单状态
const isMenuOpen = ref(false)

// 平滑滚动函数
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

// 导航项目
const navItems = [
  { id: 1, name: '首页', href: '#home' },
  { id: 2, name: '产品服务', href: '#services' },
  { id: 3, name: '解决方案', href: '#solutions' },
  { id: 4, name: '案例中心', href: '#cases' },
  { id: 4, name: '合作伙伴', href: '#partners' },
  { id: 5, name: '公司动态', href: '#news' }, 
  { id: 6, name: '联系我们', href: '#contact' }
]

// 产品服务
const services = [
  {
    id: 1,
    title: '公有云代理',
    description: '提供稳定、高效、安全的云计算服务，快速开户流程，7x24专业技术支持',
    icon: CloudIcon
  },
  {
    id: 2,
    title: 'GPU算力服务',
    description: '专享高性能GPU云主机，适用于AI训练、深度学习等场景',
    icon: CpuChipIcon
  },
  {
    id: 3,
    title: 'AI海外矩阵营销',
    description: '引流一站式方案云手机 + 自动机器人 + AIGC',
    icon: RocketLaunchIcon
  },
  {
    id: 4,
    title: '边缘计算',
    description: '全球200+边缘节点，提供高效的跨境网络服务',
    icon: GlobeAltIcon
  },
  {
    id: 5,
    title: '人工智能应用',
    description: '高效率处理大量数据和复杂模型，为人工智能的应用提供强大的运算能力和资源',
    icon: ShieldCheckIcon
  },
  {
    id: 6,
    title: '国际营销短信服务',
    description: '覆盖全球 230 个国家和地区，支持全球语言，助力企业拓展海外市场简单、迅速、低成本',
    icon: ShieldCheckIcon
  }
]

// 解决方案
const solutions = [
  {
    id: 1,
    title: '一站式出海解决方案',
    description: '为企业提供完整的跨境业务平台，包含市场调研、策略规划、运营管理等全方位服务',
    icon: RocketLaunchIcon
  },
  {
    id: 2,
    title: '国际营销短信服务',
    description: '提供全球覆盖的短信发送服务，支持多语言、高到达率、快速稳定',
    icon: EnvelopeIcon
  },
  {
    id: 3,
    title: '高防DDoS解决方案',
    description: '提供强大的DDoS防护能力，保护您的业务免受各类网络攻击的威胁',
    icon: ShieldCheckIcon
  },
  {
    id: 4,
    title: '跨境加速安全解决方案',
    description: '通过全球节点网络，为您的跨境业务提供安全、稳定、高速的网络加速服务',
    icon: GlobeAltIcon
  }
]

// 轮播控制
const currentSlide = ref(0)
const totalSlides = 4

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

// 自动轮播
let autoplayInterval: number | null = null

const startAutoplay = () => {
  autoplayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// 组件挂载时启动自动轮播
onMounted(() => {
  startAutoplay()
})

// 组件卸载时清除定时器
onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out;
  animation-delay: 0.3s;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out;
  animation-delay: 0.6s;
}

.animate-slide-down {
  animation: slideDown 1s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-delay-3 {
  animation: fadeIn 1s ease-out;
  animation-delay: 0.9s;
}

.section-title {
  @apply text-3xl md:text-4xl font-bold mb-4 text-gray-900;
}

.section-subtitle {
  @apply text-lg text-gray-600 max-w-2xl mx-auto;
}

.bg-grid {
  background-size: 30px 30px;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}

.animate-gradient {
  background-size: 200%;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin 15s linear infinite reverse;
}

.animate-float-1 {
  animation: float1 6s ease-in-out infinite;
}

.animate-float-2 {
  animation: float2 7s ease-in-out infinite;
}

.animate-float-3 {
  animation: float3 8s ease-in-out infinite;
}

.animate-float-4 {
  animation: float4 7s ease-in-out infinite;
}

.animate-float-5 {
  animation: float5 9s ease-in-out infinite;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(4deg); }
  50% { transform: translate(-30px, 30px) rotate(8deg); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) rotate(-6deg); }
  50% { transform: translate(30px, -30px) rotate(-12deg); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) rotate(3deg); }
  50% { transform: translate(-25px, -25px) rotate(6deg); }
}

@keyframes float4 {
  0%, 100% { transform: translate(0, 0) rotate(-3deg); }
  50% { transform: translate(25px, 25px) rotate(-6deg); }
}

@keyframes float5 {
  0%, 100% { transform: translate(0, 0) rotate(12deg); }
  50% { transform: translate(-35px, 35px) rotate(24deg); }
}

/* 优化主要内容的过渡动画 */
.prose p {
  @apply transition-all duration-500;
}

.prose p:hover {
  @apply transform -translate-y-1 text-blue-100;
}

button {
  @apply transition-all duration-500;
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-200;
  background-size: 200% 100%;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-fast {
  background-size: 200%;
  animation: gradient 4s linear infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.border-gradient-to-r {
  border-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1;
}

.animate-particle {
  animation: particle 4s ease-in-out infinite;
}

@keyframes particle {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

/* 优化主要内容的过渡动画 */
.prose p {
  @apply transition-all duration-500;
}

.prose p:hover {
  @apply transform -translate-y-1 text-blue-100;
}

button {
  @apply transition-all duration-500;
}

.animate-gradient-fast {
  background-size: 200%;
  animation: gradient 4s linear infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.border-gradient-to-r {
  border-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1;
}

.animate-float-4 {
  animation: float4 7s ease-in-out infinite;
}

.animate-float-5 {
  animation: float5 9s ease-in-out infinite;
}
</style> 