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
        <h1 class="text-4xl font-bold text-white mb-8">DDoS防护解决方案</h1>
        
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">项目背景</h2>
          <p class="text-gray-300 leading-relaxed">
            随着网络攻击日益频繁和复杂，DDoS攻击已成为企业面临的主要安全威胁之一。我们的客户是一家在线游戏公司，经常遭受大规模DDoS攻击，导致服务中断，严重影响用户体验和业务运营。
          </p>
        </div>

        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">解决方案</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-medium text-white mb-3">1. 智能防护系统</h3>
              <p class="text-gray-300 leading-relaxed">
                部署智能DDoS防护系统，实现攻击的实时检测和自动防护：
              </p>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>AI智能识别</li>
                <li>实时流量分析</li>
                <li>自动防护策略</li>
                <li>攻击源追踪</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-medium text-white mb-3">2. 多层防护架构</h3>
              <p class="text-gray-300 leading-relaxed">
                构建多层防护架构，确保业务持续可用：
              </p>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>边缘节点防护</li>
                <li>数据中心防护</li>
                <li>应用层防护</li>
                <li>智能负载均衡</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-medium text-white mb-3">3. 安全运维服务</h3>
              <p class="text-gray-300 leading-relaxed">
                提供全方位的安全运维支持：
              </p>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>7x24小时监控</li>
                <li>专家团队支持</li>
                <li>定期安全评估</li>
                <li>应急响应服务</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
          <h2 class="text-2xl font-semibold text-white mb-4">实施效果</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-700/30 rounded-lg p-6">
              <div class="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <p class="text-gray-300">攻击防护成功率</p>
            </div>
            <div class="bg-gray-700/30 rounded-lg p-6">
              <div class="text-3xl font-bold text-green-400 mb-2">99.99%</div>
              <p class="text-gray-300">服务可用性</p>
            </div>
            <div class="bg-gray-700/30 rounded-lg p-6">
              <div class="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <p class="text-gray-300">运维成本降低</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ddos'
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