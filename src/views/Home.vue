<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 z-50 nav-bg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <!-- <h1 class="text-2xl font-bold text-primary-600">点一云科技</h1> -->
            <img class="h-8 w-auto" src="../assets/logo.png" alt="点一云科技">
          </div>
          
          <!-- 桌面端导航 -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <template v-for="item in navItems" :key="item.name">
                <router-link v-if="!item.isHash"
                   :to="item.href"
                   class="nav-link"
                   :class="{ 'nav-link-active': route.path === item.href }">
                  {{ item.name }}
                </router-link>
                <a v-else
                   :href="item.href"
                   class="nav-link"
                   @click.prevent="scrollToSection(item.href)">
                  {{ item.name }}
                </a>
              </template>
            </div>
          </div>

          <!-- 移动端菜单按钮 -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen"
                    class="menu-button">
              <span class="sr-only">打开菜单</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div v-show="isMenuOpen" class="md:hidden mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <template v-for="item in navItems" :key="item.name">
            <router-link v-if="!item.isHash"
               :to="item.href"
               class="mobile-nav-link"
               :class="{ 'mobile-nav-link-active': route.path === item.href }">
              {{ item.name }}
            </router-link>
            <a v-else
               :href="item.href"
               class="mobile-nav-link"
               @click.prevent="scrollToSection(item.href)">
              {{ item.name }}
            </a>
          </template>
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

    <!-- 服务介绍 -->
    <section id="services" class="py-16 bg-gradient-section">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down">我们的服务</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- GPU计算服务 -->
          <div class="service-card" data-aos="fade-up">
            <h3 class="text-xl font-bold mb-4">GPU计算服务</h3>
            <p class="text-gray-300">高性能GPU计算解决方案，支持AI训练和推理</p>
          </div>
          
          <!-- 边缘计算 -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-xl font-bold mb-4">边缘计算</h3>
            <p class="text-gray-300">200+ 全球节点，毫秒级响应</p>
          </div>
          
          <!-- 云代理服务 -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <h3 class="text-xl font-bold mb-4">云代理服务</h3>
            <p class="text-gray-300">安全稳定的全球网络代理解决方案</p>
          </div>

          <!-- 国际营销短信服务 -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="300">
            <h3 class="text-xl font-bold mb-4">国际营销短信服务</h3>
            <p class="text-gray-300">覆盖全球 230 个国家和地区，支持全球语言，助力企业拓展海外市场</p>
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

        <!-- 解决方案卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="solution in solutions" :key="solution.id" 
               class="group bg-white rounded-xl p-8 shadow-lg border-2 border-purple-200
                      hover:shadow-xl hover:border-purple-400 hover:bg-purple-50
                      transform hover:-translate-y-1 transition-all duration-300">
            <div class="flex items-start space-x-6">
              <div class="bg-purple-100 rounded-2xl p-4 
                          group-hover:bg-purple-200 transition-colors duration-300">
                <component :is="solution.icon" 
                          class="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <div>
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
    <section id="contact" class="py-16 bg-gradient-section-reverse">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down">联系我们</h2>
        <div class="max-w-4xl mx-auto">
          <div class="contact-card" data-aos="fade-up">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold mb-4">联系方式</h3>
                <div class="space-y-3">
                  <p class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>contact@example.com</span>
                  </p>
                  <p class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>+852 1234 5678</span>
                  </p>
                  <p class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                    <span>香港特别行政区</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-4">社交媒体</h3>
                <div class="grid grid-cols-2 gap-4">
                  <a href="#" class="social-link">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a href="#" class="social-link">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.465-3.192c-.379.168-.786.281-1.213.333.436-.261.774-.677.932-1.171-.409.242-.86.418-1.338.513-.384-.409-.93-.666-1.537-.666-1.162 0-2.105.942-2.105 2.105 0 .165.019.326.055.48-1.753-.088-3.307-.926-4.351-2.199-.181.311-.286.672-.286 1.058 0 .731.373 1.375.941 1.753-.346-.011-.671-.106-.957-.264v.027c0 1.019.725 1.87 1.687 2.063-.177.048-.362.074-.553.074-.135 0-.266-.013-.394-.038.268.836 1.045 1.445 1.462-.72.565-1.628.901-2.614.901-.17 0-.337-.01-.502-.029.931.596 2.037.944 3.226.944 3.87 0 5.986-3.206 5.986-5.986 0-.091-.002-.182-.006-.272.411-.297.77-.667 1.054-1.088z"/>
                    </svg>
                    <span>Telegram</span>
                  </a>
                  <a href="#" class="social-link">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032 1.916 1.675c.137.12.31.182.488.182.069 0 .139-.009.209-.027.245-.066.439-.259.505-.504l.171-.62c.025-.091.035-.185.035-.28 0-.107-.023-.213-.068-.31zm-12.586-4.554c0-2.516 2.455-4.564 5.478-4.564s5.478 2.048 5.478 4.564c0 2.515-2.455 4.563-5.478 4.563s-5.478-2.048-5.478-4.563z"/>
                    </svg>
                    <span>WeChat</span>
                  </a>
                </div>
              </div>
            </div>
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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import CompanyTimeline from '../components/CompanyTimeline.vue'
import Partners from '../components/Partners.vue'
import SmsService from '../components/SmsService.vue'

interface NavItem {
  name: string;
  href: string;
  isHash?: boolean;
}

const route = useRoute()
const isMenuOpen = ref(false)
const navItems = ref<NavItem[]>([
  { name: '首页', href: '/', isHash: false },
  { name: '服务', href: '#services', isHash: true },
  { name: '案例', href: '/cases', isHash: false },
  { name: '合作伙伴', href: '#partners', isHash: true },
  { name: '联系我们', href: '#contact', isHash: true }
])

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

// 平滑滚动函数
const scrollToSection = (href: string) => {
  if (!href.startsWith('#')) return
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
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

.bg-gradient-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.bg-gradient-section-reverse {
  background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
}

.service-card {
  @apply p-6 rounded-lg backdrop-blur-lg;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-card {
  @apply p-8 rounded-lg backdrop-blur-lg;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link {
  @apply flex items-center space-x-2 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all;
}

.nav-link {
  @apply px-3 py-2 rounded-md text-sm font-medium transition-all duration-300;
  color: var(--text-secondary);
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(59, 130, 246, 0.1);
}

.nav-link-active {
  color: var(--text-primary);
  background: var(--accent-gradient);
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium transition-all duration-300;
  color: var(--text-secondary);
}

.mobile-nav-link:hover {
  color: var(--text-primary);
  background: rgba(59, 130, 246, 0.1);
}

.mobile-nav-link-active {
  color: var(--text-primary);
  background: var(--accent-gradient);
}

.menu-button {
  @apply text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-300;
}

.mobile-menu {
  @apply px-2 pt-2 pb-3 space-y-1 border-t border-gray-700;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
}

.hero-section {
  background-image: linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)),
                    url('../assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.section {
  @apply py-20;
  position: relative;
  overflow: hidden;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(59, 130, 246, 0), 
    rgba(59, 130, 246, 0.2), 
    rgba(59, 130, 246, 0)
  );
}

.section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(59, 130, 246, 0), 
    rgba(59, 130, 246, 0.2), 
    rgba(59, 130, 246, 0)
  );
}
</style> 