<template>
  <div id="contact" class="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-white mb-2">{{ $t('contact.title') }}</h2>
        <p class="text-gray-400 text-sm">{{ $t('contact.subtitle') }}</p>
      </div>

      <!-- 联系方式 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white mb-0.5">{{ $t('contact.email.title') }}</h3>
              <p class="text-gray-400 text-sm">{{ $t('contact.email.value') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0 w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 9.19 19.86 19.86 0 0 1 .92 2.18 2 2 0 0 1 2.92 0h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L6.37 7.91a16 16 0 0 0 6.72 6.72l1.74-1.74a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white mb-0.5">{{ $t('contact.phone.title') }}</h3>
              <p class="text-gray-400 text-sm">{{ $t('contact.phone.value') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 社交媒体链接 -->
      <div class="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" class="group">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
        </a>
        <a href="#" class="group relative">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 flex items-center justify-center">
            <img src="../assets/img/wechat.png" :alt="$t('contact.wechat.title')" class="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
          </div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div class="bg-white p-2 rounded-lg shadow-lg w-36 h-36 flex flex-col items-center justify-center">
              <img src="../assets/img/logo.png" :alt="$t('contact.wechat.qrcode')" class="w-28 h-28 object-contain rounded" />
              <div class="text-center mt-1 text-xs text-gray-600">{{ $t('contact.wechat.scan') }}</div>
            </div>
          </div>
        </a>
        <a href="https://t.me" target="_blank" class="group">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-sky-500/50 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-sky-400 transition-colors duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l18-7-7 18-2.5-7.5L3 12z"/>
            </svg>
          </div>
        </a>
      </div>

      <div class="mt-8 text-center">
        <p class="text-gray-500 text-sm">{{ $t('contact.copyright') }}</p>
      </div>
    </div>
  </div>
</template> 