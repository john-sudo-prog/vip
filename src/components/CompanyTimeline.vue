<script setup lang="ts">
import { ref } from 'vue'

const timelineEvents = ref([
  { year: 2010, title: '公司成立', description: '点一云科技正式成立，开始专注于云计算服务' },
  { year: 2012, title: '技术突破', description: '成功开发第一代云代理技术平台' },
  { year: 2015, title: '业务扩展', description: '拓展至GPU计算服务，服务规模突破1000家企业' },
  { year: 2018, title: '全球布局', description: '边缘计算节点扩展至100+，覆盖主要经济区域' },
  { year: 2020, title: 'AI赋能', description: '推出AI解决方案，助力企业数字化转型' },
  { year: 2022, title: '规模突破', description: '边缘计算节点突破200+，服务企业超过10000家' },
  { year: 2024, title: '创新升级', description: '推出新一代云服务平台，整合AI与边缘计算能力' },
  { year: 2025, title: '未来展望', description: '计划部署300+边缘节点，打造全球领先的云服务生态' }
])
</script>

<template>
  <div class="timeline-container my-16">
    <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down">发展历程</h2>
    
    <div class="relative">
      <!-- 时间轴中线 -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
      
      <div class="space-y-16">
        <div v-for="(event, index) in timelineEvents" :key="index"
             class="timeline-item"
             :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
             :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
          
          <!-- 时间点 -->
          <div class="w-1/2 px-4" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
            <div class="gradient-card inline-block">
              <h3 class="text-2xl font-bold">{{ event.year }}</h3>
              <h4 class="text-xl font-semibold mt-2">{{ event.title }}</h4>
              <p class="text-gray-300 mt-2">{{ event.description }}</p>
            </div>
          </div>
          
          <!-- 时间点标记 -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  position: relative;
  padding: 2rem 0;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
}

.gradient-card {
  max-width: 400px;
}
</style> 