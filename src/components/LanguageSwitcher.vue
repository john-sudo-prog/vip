<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors"
    >
      <span>{{ currentLanguage }}</span>
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-gray-800 rounded-lg shadow-lg py-1 z-50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="switchLanguage(lang.code)"
        class="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
        :class="{ 'bg-gray-700': currentLocale === lang.code }"
      >
        {{ lang.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()
    const isOpen = ref(false)

    const languages = [
      { code: 'zh-CN', name: '简体中文' },
      { code: 'zh-TW', name: '繁體中文' },
      { code: 'en', name: 'English' }
    ]

    const currentLocale = computed(() => locale.value)
    const currentLanguage = computed(() => {
      const lang = languages.find(l => l.code === locale.value)
      return lang ? lang.name : '简体中文'
    })

    const switchLanguage = (code) => {
      locale.value = code
      isOpen.value = false
    }

    return {
      isOpen,
      languages,
      currentLocale,
      currentLanguage,
      switchLanguage
    }
  }
}
</script> 