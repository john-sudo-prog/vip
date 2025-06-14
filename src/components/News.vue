<template>
  <section id="news" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('news.title') }}</h2>
        <p class="text-gray-300">{{ $t('news.subtitle') }}</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700">
          <div class="">
            <p class="text-gray-300 leading-relaxed">
              {{ $t('news.content.paragraph1') }}
            </p>
            <p class="text-gray-300 leading-relaxed mt-6">
              {{ $t('news.content.paragraph2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prose p {
  @apply transition-all duration-500;
}

.prose p:hover {
  @apply transform -translate-y-1 text-blue-100;
}
</style> 