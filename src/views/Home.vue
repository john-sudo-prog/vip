<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-primary-600">点一云科技</h1>
            <!-- <img src="../assets/img/logo.png" alt="点一云科技" class="h-8"> -->
          </div>
          
          <!-- 桌面端导航 -->
          <div class="hidden md:flex space-x-8">
            <a v-for="item in navItems" :key="item.id" 
               :href="item.href"
               @click.prevent="scrollToSection(item.href)"
               class="text-gray-600 hover:text-primary-600 transition-colors">
              {{ item.name }}
            </a>
          </div>

          <!-- 移动端菜单按钮 -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600">
              <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
              <XMarkIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- 移动端菜单 -->
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a v-for="item in navItems" :key="item.id"
               :href="item.href"
               @click.prevent="scrollToSection(item.href)"
               class="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主横幅 -->
    <section id="home" class="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.3),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
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

            <div class="prose prose-lg prose-invert">
              <p class="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100
                        hover:from-blue-200 hover:to-purple-200 transition-all duration-500">
                通过技术创新与资源整合，为企业提供全方位的云服务解决方案，
                助力客户在AI时代实现全球化业务拓展。
              </p>
            </div>

            <div class="flex flex-wrap gap-4">
              <button @click="scrollToSection('#services')"
                      class="group relative inline-flex items-center gap-2 px-6 py-3 
                             bg-gradient-to-r from-blue-500 to-purple-500
                             hover:from-blue-600 hover:to-purple-600
                             rounded-lg font-semibold text-white overflow-hidden 
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
              <!-- 3D立体图形组 -->
              <div class="relative w-full h-[500px]">
                <!-- 圆环 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64
                            border-4 border-gradient-to-r from-blue-500/50 to-purple-500/50
                            rounded-full animate-spin-slow"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48
                            border-4 border-gradient-to-r from-purple-500/50 to-blue-500/50
                            rounded-full animate-spin-reverse-slow"></div>
                
                <!-- 浮动元素 -->
                <div class="absolute top-0 left-1/4 
                            w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 
                            backdrop-blur-lg rounded-xl border border-white/20
                            hover:from-blue-400/40 hover:to-purple-400/40
                            transition-all duration-500
                            animate-float-1 transform rotate-12"></div>
                
                <div class="absolute top-1/4 right-1/4
                            w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30
                            backdrop-blur-lg rounded-xl border border-white/20
                            hover:from-purple-400/40 hover:to-blue-400/40
                            transition-all duration-500
                            animate-float-2 transform -rotate-12"></div>
                
                <div class="absolute bottom-1/4 left-1/3
                            w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30
                            backdrop-blur-lg rounded-xl border border-white/20
                            hover:from-blue-400/40 hover:to-purple-400/40
                            transition-all duration-500
                            animate-float-3"></div>
                
                <!-- 装饰线条 -->
                <div class="absolute inset-0">
                  <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r 
                              from-transparent via-blue-500/30 to-transparent
                              animate-pulse"></div>
                  <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b 
                              from-transparent via-purple-500/30 to-transparent
                              animate-pulse delay-300"></div>
                </div>
                
                <!-- 粒子效果 -->
                <template v-for="i in 8" :key="i">
                  <div class="absolute w-2 h-2 rounded-full bg-gradient-to-r 
                              from-blue-400/50 to-purple-400/50
                              hover:from-blue-300/60 hover:to-purple-300/60
                              transition-all duration-300
                              animate-particle"
                       :style="{
                         top: `${Math.random() * 100}%`,
                         left: `${Math.random() * 100}%`,
                         animationDelay: `${i * 0.5}s`
                       }">
                  </div>
                </template>
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" 
               class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-blue-100">
            <div class="bg-blue-50 rounded-lg p-3 w-16 h-16 mb-4
                        group-hover:bg-blue-100/50 transition-colors duration-300">
              <component :is="service.icon" 
                         class="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案 -->
    <section id="solutions" class="py-20 relative overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.03),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid opacity-5"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <h2 class="section-title">解决方案</h2>
          <p class="section-subtitle">为您提供全方位的出海解决方案</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="solution in solutions" :key="solution.id" 
               class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-purple-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-purple-100">
            <div class="flex items-start">
              <div class="bg-purple-50 rounded-lg p-3 
                          group-hover:bg-purple-100/50 transition-colors duration-300">
                <component :is="solution.icon" 
                          class="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-800 transition-colors duration-300">
                  {{ solution.title }}
                </h3>
                <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {{ solution.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid opacity-5"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <h2 class="section-title">联系我们</h2>
          <p class="section-subtitle">随时为您提供专业的技术支持和服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-blue-100">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center
                          group-hover:bg-blue-100/50 transition-colors duration-300">
                <ClockIcon class="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <div class="text-2xl font-bold text-gray-800 group-hover:text-blue-800 mb-2 transition-colors duration-300">
                7x24
              </div>
              <div class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                全天候技术支持
              </div>
            </div>
          </div>

          <div class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-blue-100">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center
                          group-hover:bg-blue-100/50 transition-colors duration-300">
                <GlobeAltIcon class="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <div class="text-2xl font-bold text-gray-800 group-hover:text-blue-800 mb-2 transition-colors duration-300">
                200+
              </div>
              <div class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                覆盖国家和地区
              </div>
            </div>
          </div>

          <div class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-blue-100">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center
                          group-hover:bg-blue-100/50 transition-colors duration-300">
                <ShieldCheckIcon class="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <div class="text-2xl font-bold text-gray-800 group-hover:text-blue-800 mb-2 transition-colors duration-300">
                99.9%
              </div>
              <div class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                服务可用性
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-blue-100">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
              联系方式
            </h3>
            <ul class="space-y-4">
              <li class="flex items-center group/item">
                <div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3
                            group-hover/item:bg-blue-100/50 transition-colors duration-300">
                  <EnvelopeIcon class="h-5 w-5 text-blue-600 group-hover/item:text-blue-700 transition-colors duration-300" />
                </div>
                <span class="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">
                  邮箱：contact@dianyi.cloud
                </span>
              </li>
              <li class="flex items-center group/item">
                <div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3
                            group-hover/item:bg-blue-100/50 transition-colors duration-300">
                  <PhoneIcon class="h-5 w-5 text-blue-600 group-hover/item:text-blue-700 transition-colors duration-300" />
                </div>
                <span class="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">
                  电话：+852 51641419
                </span>
              </li>
            </ul>
          </div>
          <div class="group bg-white rounded-xl p-8 shadow-sm
                      hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50
                      transform hover:-translate-y-1 transition-all duration-300
                      border border-gray-100 hover:border-blue-100">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
              服务时间
            </h3>
            <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              我们提供全天候24小时技术支持服务，确保您的业务永不停歇
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="border-gray-800 text-center">
          <p class="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            &copy; {{ new Date().getFullYear() }} 点一云科技有限公司. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Bars3Icon as MenuIcon,
  XMarkIcon,
  CheckCircleIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  ServerStackIcon,
  ClockIcon,
  PhoneIcon,
  ArrowRightIcon
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
  { id: 4, name: '联系我们', href: '#contact' }
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
  animation: float2 8s ease-in-out infinite;
}

.animate-float-3 {
  animation: float3 7s ease-in-out infinite;
}

.animate-particle {
  animation: particle 4s ease-in-out infinite;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(12deg); }
  50% { transform: translate(-20px, 20px) rotate(24deg); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) rotate(-12deg); }
  50% { transform: translate(20px, -20px) rotate(-24deg); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-15px, -15px) rotate(12deg); }
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
</style> 