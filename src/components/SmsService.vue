<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    title: '全球覆盖',
    description: '覆盖 230+ 国家和地区，支持多语言短信发送',
    icon: '🌍'
  },
  {
    title: '快速可靠',
    description: '毫秒级响应，99.99% 到达率',
    icon: '⚡'
  },
  {
    title: '成本效益',
    description: '灵活的计费方案，助力企业降低成本',
    icon: '💰'
  },
  {
    title: '智能平台',
    description: '支持批量发送、定时发送、智能调度',
    icon: '🔄'
  }
])
</script>

<template>
  <div class="sms-service-container my-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-4" data-aos="fade-down">国际营销短信服务</h2>
      <p class="text-xl text-center text-gray-300 mb-12" data-aos="fade-up">
        覆盖全球 230 个国家和地区，支持全球语言，助力企业拓展海外市场
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index"
             class="feature-card gradient-card"
             :data-aos="'fade-up'"
             :data-aos-delay="index * 100">
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-300">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-16 text-center" data-aos="fade-up">
        <h3 class="text-2xl font-bold mb-4">为什么选择我们？</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div class="benefit-card gradient-card">
            <h4 class="text-xl font-semibold mb-2">简单</h4>
            <p class="text-gray-300">API 集成便捷，5 分钟即可完成对接</p>
          </div>
          <div class="benefit-card gradient-card">
            <h4 class="text-xl font-semibold mb-2">迅速</h4>
            <p class="text-gray-300">全球网络覆盖，确保信息快速送达</p>
          </div>
          <div class="benefit-card gradient-card">
            <h4 class="text-xl font-semibold mb-2">低成本</h4>
            <p class="text-gray-300">灵活的计费方案，助力企业降低成本</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.benefit-card {
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: scale(1.05);
}
</style> 