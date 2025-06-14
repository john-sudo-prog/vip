<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- 导航栏 -->
    <nav class="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-white hover:text-blue-400 transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </router-link>
            <span class="ml-4 text-white text-lg">返回首页</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article class="prose prose-invert max-w-none">
        <h1 class="text-4xl font-bold text-white mb-8">跨境业务解决方案</h1>
        
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">项目背景</h2>
          <p class="text-gray-300 leading-relaxed">
            随着全球化的深入发展，越来越多的企业开始拓展海外市场。然而，跨境业务面临着网络延迟、数据安全、合规性等多重挑战。我们的客户是一家快速发展的跨境电商企业，需要稳定、安全、高效的网络基础设施来支持其全球业务。
          </p>
        </div>

        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">解决方案</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-medium text-white mb-3">1. 全球网络加速</h3>
              <p class="text-gray-300 leading-relaxed">
                部署全球CDN网络，通过智能路由和边缘节点优化，显著降低网络延迟，提升用户体验。主要特点：
              </p>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>覆盖全球200+个节点</li>
                <li>智能DNS解析</li>
                <li>动态路由优化</li>
                <li>实时流量监控</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-medium text-white mb-3">2. 安全防护</h3>
              <p class="text-gray-300 leading-relaxed">
                构建多层安全防护体系，确保业务安全稳定运行：
              </p>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>DDoS防护</li>
                <li>WAF防火墙</li>
                <li>SSL加密</li>
                <li>实时安全监控</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-medium text-white mb-3">3. 合规性保障</h3>
              <p class="text-gray-300 leading-relaxed">
                确保业务符合各地区法律法规要求：
              </p>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>数据本地化存储</li>
                <li>隐私保护合规</li>
                <li>行业认证支持</li>
                <li>合规性咨询</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
          <h2 class="text-2xl font-semibold text-white mb-4">实施效果</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-700/30 rounded-lg p-6">
              <div class="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <p class="text-gray-300">网络延迟降低</p>
            </div>
            <div class="bg-gray-700/30 rounded-lg p-6">
              <div class="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <p class="text-gray-300">服务可用性</p>
            </div>
            <div class="bg-gray-700/30 rounded-lg p-6">
              <div class="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <p class="text-gray-300">运营成本降低</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrossBorder'
}
</script>

<style>
.prose {
  max-width: 65ch;
  color: #fff;
}

.prose h1 {
  color: #fff;
  font-weight: 700;
}

.prose h2 {
  color: #fff;
  font-weight: 600;
}

.prose h3 {
  color: #fff;
  font-weight: 500;
}

.prose p {
  color: #d1d5db;
}

.prose ul {
  color: #d1d5db;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style> 