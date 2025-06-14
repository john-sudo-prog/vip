<template>
  <section id="solutions" class="py-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      <div class="absolute inset-0 bg-grid opacity-10"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 text-white">{{ $t('solutions.title') }}</h2>
        <p class="text-gray-400">{{ $t('solutions.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 一站式出海解决方案 -->
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <GlobeAltIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">{{ $t('solutions.items.crossBorder.title') }}</h3>
            </div>
            <p class="text-blue-100">{{ $t('solutions.items.crossBorder.desc') }}</p>
          </div>
        </div>

        <!-- 国际营销短信服务 -->
        <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">{{ $t('solutions.items.sms.title') }}</h3>
            </div>
            <p class="text-green-100">{{ $t('solutions.items.sms.desc') }}</p>
          </div>
        </div>

        <!-- 高防DDoS解决方案 -->
        <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <ShieldCheckIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">{{ $t('solutions.items.ddos.title') }}</h3>
            </div>
            <p class="text-purple-100">{{ $t('solutions.items.ddos.desc') }}</p>
          </div>
        </div>

        <!-- 跨境加速安全解决方案 -->
        <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <RocketLaunchIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">{{ $t('solutions.items.acceleration.title') }}</h3>
            </div>
            <p class="text-indigo-100">{{ $t('solutions.items.acceleration.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
.bg-grid {
  background-size: 30px 30px;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}
</style> 