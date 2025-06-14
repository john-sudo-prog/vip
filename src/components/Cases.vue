<template>
  <section id="cases" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">案例中心</h2>
        <p class="text-lg text-gray-600">探索我们的成功案例，了解如何为客户创造价值</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 案例1 -->
        <router-link to="/cases/cross-border" class="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">跨境电商解决方案</h3>
            <p class="text-gray-600 mb-4">为某知名跨境电商平台提供一站式出海解决方案，包括支付系统、物流对接、多语言支持等，帮助客户快速拓展海外市场。</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">跨境电商</span>
              <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">支付系统</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">多语言</span>
            </div>
          </div>
        </router-link>

        <!-- 案例2 -->
        <router-link to="/cases/ddos" class="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">高防DDoS防护方案</h3>
            <p class="text-gray-600 mb-4">为某游戏公司提供高防DDoS解决方案，通过智能防护系统有效抵御各类网络攻击，确保游戏服务器稳定运行。</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">DDoS防护</span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">游戏服务器</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">网络安全</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template> 