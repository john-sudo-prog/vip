<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0 group">
            <router-link to="/">
              <img src="../assets/img/logo.jpg" alt="点一云科技" class="h-8 transition-transform duration-300 group-hover:scale-105" />
            </router-link>
          </div>
          <!-- <div class="hidden md:flex items-center space-x-8">
            <router-link to="/#solutions" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">解决方案</router-link>
            <router-link to="/#partners" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">合作伙伴</router-link>
            <router-link to="/#news" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">公司动态</router-link>
            <router-link to="/#cases" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">案例中心</router-link>
            <router-link to="/#contact" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">联系我们</router-link>
          </div> -->
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <div class="pt-24 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 文章标题 -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ article.title }}</h1>
          <div class="flex items-center justify-center space-x-4 text-gray-600">
            <span>{{ article.date }}</span>
            <span>·</span>
            <span>{{ article.category }}</span>
          </div>
        </div>

        <!-- 文章封面图 -->
        <div class="mb-12 rounded-xl overflow-hidden">
          <img :src="article.coverImage" :alt="article.title" class="w-full h-[400px] object-cover" />
        </div>

        <!-- 文章内容 -->
        <div class="prose prose-lg max-w-none">
          <div v-html="article.content"></div>
        </div>

        <!-- 返回按钮 -->
        <div class="mt-12 text-center">
          <router-link to="/#cases" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            返回首页
            <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref({
  title: '',
  date: '',
  category: '',
  coverImage: '',
  content: ''
})

// 模拟文章数据
const articles = {
  'cross-border': {
    title: '跨境电商解决方案详解',
    date: '2024-03-20',
    category: '跨境电商',
    coverImage: '/src/assets/img/case1.jpg',
    content: `
      <h2>项目背景</h2>
      <p>某知名跨境电商平台在拓展海外市场时遇到了支付、物流、语言等多方面的挑战。我们为其提供了一站式出海解决方案。</p>
      
      <h2>解决方案</h2>
      <h3>1. 支付系统</h3>
      <p>整合了全球主流支付方式，包括信用卡、电子钱包、本地支付等，确保交易安全可靠。</p>
      
      <h3>2. 物流对接</h3>
      <p>对接了全球主要物流服务商，提供实时物流追踪和智能配送方案。</p>
      
      <h3>3. 多语言支持</h3>
      <p>支持20多种语言，包括网站内容、客服系统、支付界面等全方位本地化。</p>
      
      <h2>项目成果</h2>
      <p>通过我们的解决方案，客户成功拓展了10个主要海外市场，月交易额提升300%，客户满意度达到95%。</p>
    `
  },
  'ddos': {
    title: '高防DDoS防护方案详解',
    date: '2024-03-15',
    category: '网络安全',
    coverImage: '/src/assets/img/case2.jpg',
    content: `
      <h2>项目背景</h2>
      <p>某知名游戏公司频繁遭受DDoS攻击，导致服务器不稳定，影响玩家体验。我们为其提供了高防DDoS解决方案。</p>
      
      <h2>解决方案</h2>
      <h3>1. 智能防护系统</h3>
      <p>采用AI技术实时分析流量特征，自动识别和过滤恶意流量。</p>
      
      <h3>2. 全球节点部署</h3>
      <p>在全球部署了多个防护节点，确保攻击流量被分散处理。</p>
      
      <h3>3. 实时监控告警</h3>
      <p>提供7*24小时监控服务，发现异常立即告警并启动防护。</p>
      
      <h2>项目成果</h2>
      <p>成功抵御了多次大规模DDoS攻击，服务器稳定性提升至99.99%，玩家体验显著改善。</p>
    `
  }
}

onMounted(() => {
  const articleId = route.params.id
  if (articles[articleId]) {
    article.value = articles[articleId]
  }
})
</script>

<style>
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-800 mt-6 mb-3;
}

.prose p {
  @apply text-gray-600 mb-4 leading-relaxed;
}
</style> 