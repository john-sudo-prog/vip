<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const cases = ref([
  {
    title: 'AI 智能解决方案',
    description: '为某大型企业提供 AI 驱动的业务流程优化解决方案，提升效率 200%',
    image: '../assets/cases/case1.jpg'
  },
  {
    title: 'GPU 算力服务',
    description: '为科研机构提供高性能计算服务，支持大规模数据分析和模型训练',
    image: '../assets/cases/case2.jpg'
  },
  {
    title: '边缘计算部署',
    description: '全球 200+ 节点的边缘计算网络部署，实现毫秒级响应',
    image: '../assets/cases/case3.jpg'
  }
])

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})
</script>

<template>
  <div class="cases-container mx-auto px-4 py-8 max-w-7xl">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-center" data-aos="fade-down">案例中心</h1>
      <router-link to="/" class="back-home-btn" data-aos="fade-left">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        返回首页
      </router-link>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(item, index) in cases" :key="index" 
           class="gradient-card" 
           :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
           :data-aos-delay="index * 100">
        <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-300">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-home-btn {
  @apply flex items-center px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors;
}

.cases-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}
</style> 