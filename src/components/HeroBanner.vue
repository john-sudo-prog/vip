<template>
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
                {{ $t('hero.title') }}
              </span>
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-bold tracking-tight">
              <span class="block text-transparent bg-clip-text animate-gradient-fast
                           bg-gradient-to-r from-white via-blue-300 to-purple-300">
                {{ $t('hero.company') }}
              </span>
            </h1>
          </div>

          <div class="text-white">
            {{ $t('hero.subtitle') }}
          </div>

          <div class="flex flex-wrap gap-4">
            <button @click="scrollToSection('#news')" 
                      class="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 
                                   transition-all duration-500 hover:scale-105 
                                   hover:shadow-lg hover:shadow-blue-500/25">
              <span>{{ $t('hero.learnMore') }}</span>
              <ArrowRightIcon class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button @click="scrollToSection('#contact')"
                    class="group relative inline-flex items-center gap-2 px-6 py-3 
                           border-2 border-gradient-to-r from-blue-400/50 to-purple-400/50
                           hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10
                           rounded-lg font-semibold text-white
                           transition-all duration-500">
              <span>{{ $t('hero.contactUs') }}</span>
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
                {{ $t('hero.stats.countries') }}
              </p>
            </div>
            <div class="space-y-2 group">
              <div class="flex items-baseline gap-1">
                <span class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                            from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300
                            transition-all duration-500">99.9%</span>
              </div>
              <p class="text-sm text-purple-200/70 group-hover:text-blue-200/70 transition-colors duration-500">
                {{ $t('hero.stats.availability') }}
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
                <img src="../assets/img/partner/1.jpg" :alt="$t('hero.partners.alt')" class="w-full h-full object-contain p-4" />
              </div>
              <div class="absolute top-[25%] right-[20%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg 
                          border border-white/20 shadow-lg transform -rotate-6
                          animate-float-2">
                <img src="../assets/img/partner/2.jpg" :alt="$t('hero.partners.alt')" class="w-full h-full object-contain p-4" />
              </div>
              <div class="absolute bottom-[20%] left-[25%] w-36 h-36 bg-white/10 backdrop-blur-sm rounded-lg 
                          border border-white/20 shadow-lg transform rotate-3
                          animate-float-3">
                <img src="../assets/img/partner/3.jpg" :alt="$t('hero.partners.alt')" class="w-full h-full object-contain p-4" />
              </div>
              <div class="absolute top-[60%] right-[25%] w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg 
                          border border-white/20 shadow-lg transform -rotate-3
                          animate-float-4">
                <img src="../assets/img/partner/4.jpg" :alt="$t('hero.partners.alt')" class="w-full h-full object-contain p-4" />
              </div>
              <div class="absolute bottom-[35%] left-[10%] w-28 h-28 bg-white/10 backdrop-blur-sm rounded-lg 
                          border border-white/20 shadow-lg transform rotate-12
                          animate-float-5">
                <img src="../assets/img/partner/5.jpg" :alt="$t('hero.partners.alt')" class="w-full h-full object-contain p-4" />
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
</template>

<script setup lang="ts">
import { ArrowRightIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  console.log(t('hero.subtitle'), 111)
})
</script>

<style scoped>
.bg-grid {
  background-size: 30px 30px;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}

.animate-gradient-fast {
  background-size: 200%;
  animation: gradient 4s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
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
</style> 