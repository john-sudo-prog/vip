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
              <p class="text-gray-400 text-sm">san@dycloud.ai</p>
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
        <!-- Telegram 1 -->
        <a class="group relative">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-sky-500/50 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 text-sky-400 group-hover:text-sky-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-44">
              <img src="../assets/img/contact/Jonny_TG.jpg" alt="Telegram QR Code 1" class="w-38 h-42 object-cover rounded aspect-square" />
            </div>
          </div>
        </a>

        <!-- Telegram 2 -->
        <a class="group relative">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-sky-500/50 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 text-sky-400 group-hover:text-sky-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-44">
              <img src="../assets/img/contact/Leon_TG.jpg" alt="Telegram QR Code 2" class="w-38 h-42 object-cover rounded aspect-square" />
            </div>
          </div>
        </a>

        <!-- WeChat -->
        <a class="group relative">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 flex items-center justify-center">
            <img src="../assets/img/wechat.png" alt="WeChat" class="w-5 h-5" />
          </div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-40">
              <img src="../assets/img/contact/wechat.jpg" alt="WeChat QR Code" class="w-38 h-38 object-cover rounded aspect-square" />
            </div>
          </div>
        </a>

        <!-- WhatsApp -->
        <a class="group relative">
          <div class="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 flex items-center justify-center">
            <svg class="w-5 h-5 text-green-400 group-hover:text-green-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div class="bg-white p-2 rounded-lg shadow-lg aspect-square w-40 h-40">
              <img src="../assets/img/contact/whatsApp.jpg" alt="WhatsApp QR Code" class="w-38 h-38 object-cover rounded aspect-square" />
            </div>
          </div>
        </a>
      </div>

      <div class="mt-8 text-center">
        <p class="text-gray-500 text-sm">{{ $t('contact.copyright') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style> 