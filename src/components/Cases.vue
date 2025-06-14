<template>
  <section id="cases" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('cases.title') }}</h2>
        <p class="text-lg text-gray-600">{{ $t('cases.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 案例1 -->
        <router-link to="/cases/cross-border" class="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.items.crossBorder.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('cases.items.crossBorder.desc') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{{ $t('cases.items.crossBorder.tags.ecommerce') }}</span>
              <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">{{ $t('cases.items.crossBorder.tags.payment') }}</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">{{ $t('cases.items.crossBorder.tags.multilingual') }}</span>
            </div>
          </div>
        </router-link>

        <!-- 案例2 -->
        <router-link to="/cases/ddos" class="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.items.ddos.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('cases.items.ddos.desc') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">{{ $t('cases.items.ddos.tags.protection') }}</span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">{{ $t('cases.items.ddos.tags.gameserver') }}</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">{{ $t('cases.items.ddos.tags.security') }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template> 