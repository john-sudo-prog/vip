<template>
  <section id="services" class="relative py-16 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-blue-900/40"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-3">产品服务</h2>
        <p class="text-base text-gray-300">为企业提供全方位的云服务解决方案</p>
      </div>

      <!-- 服务网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(service, index) in services" :key="index" 
             class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group shadow-lg hover:shadow-xl">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-blue-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-blue-400/30 transition-all duration-300">
            <component :is="service.icon" class="w-7 h-7 text-blue-300" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ service.title }}</h3>
          <p class="text-base text-gray-200">{{ service.description }}</p>
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
    title: '公有云代理',
    description: '提供稳定、高效、安全的云计算服务，快速开户流程，7x24专业技术支持',
    icon: CloudIcon
  },
  {
    title: 'GPU算力服务',
    description: '专享高性能GPU云主机，适用于AI训练、深度学习等场景',
    icon: CpuChipIcon
  },
  {
    title: 'AI海外矩阵营销',
    description: '引流一站式方案云手机 + 自动机器人 + AIGC',
    icon: RocketLaunchIcon
  },
  {
    title: '边缘计算',
    description: '全球200+边缘节点，提供高效的跨境网络服务',
    icon: GlobeAltIcon
  },
  {
    title: '人工智能应用',
    description: '高效率处理大量数据和复杂模型，为人工智能的应用提供强大的运算能力和资源',
    icon: ShieldCheckIcon
  },
  {
    title: '国际营销短信服务',
    description: '覆盖全球 230 个国家和地区，支持全球语言，助力企业拓展海外市场简单、迅速、低成本',
    icon: EnvelopeIcon
  }
]
</script> 