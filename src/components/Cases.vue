<template>
  <section id="cases" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('cases.title') }}</h2>
        <p class="text-lg text-gray-600">{{ $t('cases.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 1. 广西锋锐信息技术服务有限公司上云成功案例 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.cards.fengrui.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('cases.cards.fengrui.desc') }}</p>
            <RouterLink :to="'/cases/fengrui'" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">{{ $t('cases.viewDetails') }}</RouterLink>
          </div>
        </div>

        <!-- 2. 武汉柏锐科技有限公司上云成功案例 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.cards.bairui.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('cases.cards.bairui.desc') }}</p>
            <RouterLink :to="'/cases/bairui'" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">{{ $t('cases.viewDetails') }}</RouterLink>
          </div>
        </div>

        <!-- 3. 某企业库存管理系统上云成功案例（高性能托管描述） -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.cards.inventoryGame.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('cases.cards.inventoryGame.desc') }}</p>
            <RouterLink :to="'/cases/inventory-game'" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">{{ $t('cases.viewDetails') }}</RouterLink>
          </div>
        </div>

        <!-- 4. 某企业库存管理系统上云成功案例（稳定可靠描述） -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('cases.cards.inventoryStable.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('cases.cards.inventoryStable.desc') }}</p>
            <RouterLink :to="'/cases/inventory-stable'" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">{{ $t('cases.viewDetails') }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 