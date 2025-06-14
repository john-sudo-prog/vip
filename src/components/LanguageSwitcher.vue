<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-2 z-50 border border-gray-700/50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="switchLanguage(lang.code)"
        class="flex items-center w-full px-3 py-2 text-sm text-gray-200 hover:bg-gray-700/50 transition-colors duration-200"
        :class="{ 'bg-gray-700/50': currentLanguage.code === lang.code }"
      >
        <span class="flex-1">{{ lang.name }}</span>
        <svg
          v-if="currentLanguage.code === lang.code"
          class="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

interface Language {
  code: string
  name: string
}

const { locale } = useI18n()
const isOpen = ref(false)

const languages: Language[] = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en', name: 'English' }
]

const currentLanguage = ref<Language>(languages.find(l => l.code === locale.value) || languages[0])

const switchLanguage = (code: string) => {
  locale.value = code
  currentLanguage.value = languages.find(l => l.code === code) || languages[0]
  isOpen.value = false
}

// 监听语言变化
watch(() => locale.value, (newLocale) => {
  currentLanguage.value = languages.find(l => l.code === newLocale) || languages[0]
})
</script> 