<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0 group">
            <a href="/">
              <img src="../assets/img/logo.jpg" :alt="$t('nav.logo')" class="h-8 transition-transform duration-300 group-hover:scale-105" />
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="/#solutions" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">{{ $t('nav.solutions') }}</a>
            <a href="/#partners" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">{{ $t('nav.partners') }}</a>
            <a href="/#news" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">{{ $t('nav.news') }}</a>
            <a href="/cases" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium">{{ $t('nav.cases') }}</a>
            <a href="/#contact" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">{{ $t('nav.contact') }}</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <div class="pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 页面标题 -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ $t('cases.title') }}</h1>
          <p class="text-lg text-gray-600">{{ $t('cases.subtitle') }}</p>
        </div>

        <!-- 案例列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 案例1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img src="../assets/img/case1.jpg" :alt="$t('cases.items.crossBorder.title')" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.items.crossBorder.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('cases.items.crossBorder.desc') }}</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{{ $t('cases.items.crossBorder.tags.ecommerce') }}</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">{{ $t('cases.items.crossBorder.tags.payment') }}</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">{{ $t('cases.items.crossBorder.tags.multilingual') }}</span>
              </div>
            </div>
          </div>

          <!-- 案例2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img src="../assets/img/case2.jpg" :alt="$t('cases.items.ddos.title')" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.items.ddos.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('cases.items.ddos.desc') }}</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">{{ $t('cases.items.ddos.tags.protection') }}</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">{{ $t('cases.items.ddos.tags.gaming') }}</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">{{ $t('cases.items.ddos.tags.security') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 返回首页按钮 -->
        <div class="text-center mt-12">
          <a href="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            {{ $t('cases.backToHome') }}
            <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style> 