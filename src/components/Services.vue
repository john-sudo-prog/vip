<template>
  <section id="services" class="relative py-16 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-blue-900/40"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-3">{{ $t('services.title') }}</h2>
        <p class="text-base text-gray-300">{{ $t('services.subtitle') }}</p>
      </div>

      <!-- 服务网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(service, index) in services" :key="index" 
             class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group shadow-lg hover:shadow-xl">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-blue-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-blue-400/30 transition-all duration-300">
            <component :is="service.icon" class="w-7 h-7 text-blue-300" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ $t(`services.items.${service.key}.title`) }}</h3>
          <p class="text-base text-gray-200">{{ $t(`services.items.${service.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CloudIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    key: 'cloud',
    icon: CloudIcon
  },
  {
    key: 'gpu',
    icon: CpuChipIcon
  },
  {
    key: 'ai',
    icon: RocketLaunchIcon
  },
  {
    key: 'edge',
    icon: GlobeAltIcon
  },
  {
    key: 'security',
    icon: ShieldCheckIcon
  },
  {
    key: 'sms',
    icon: EnvelopeIcon
  }
]
</script> 