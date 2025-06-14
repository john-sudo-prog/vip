<template>
  <nav class="fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <img src="../assets/img/logo.jpg" alt="点一云科技" class="h-8 transition-transform duration-300 group-hover:scale-105" />
        </div>

        <!-- 桌面端导航 -->
        <div class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item.id" 
             :href="item.href"
             @click.prevent="scrollToSection(item.href)"
             class="relative text-gray-600 hover:text-primary-600 transition-colors duration-300 py-2 group">
            <span class="relative z-10">{{ $t(item.title) }}</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                       group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <!-- 语言切换 -->
        <div class="hidden md:flex items-center ml-4">
          <LanguageSwitcher />
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" 
                  class="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100/50 
                         transition-colors duration-300">
            <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
            <CloseIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div v-if="isMenuOpen" 
           class="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100/50
                  animate-slide-down">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="item in navItems" :key="item.id"
             :href="item.href"
             @click.prevent="scrollToSection(item.href)"
             class="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50/50 
                    rounded-lg transition-colors duration-300">
            {{ $t(item.title) }}
          </a>
          <!-- 移动端语言切换 -->
          <div class="px-3 py-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon as MenuIcon, XMarkIcon as CloseIcon } from '@heroicons/vue/24/outline'
import LanguageSwitcher from './LanguageSwitcher.vue'

const isMenuOpen = ref(false)

const navItems = [
  { id: 1, title: 'nav.home', href: '#home' },
  { id: 2, title: 'nav.services', href: '#services' },
  { id: 3, title: 'nav.solutions', href: '#solutions' },
  { id: 4, title: 'nav.cases', href: '#cases' },
  { id: 5, title: 'nav.partners', href: '#partners' },
  { id: 6, title: 'nav.news', href: '#news' },
  { id: 7, title: 'nav.contact', href: '#contact' }
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
</script>

<style scoped>
.animate-slide-down {
  animation: slideDown 1s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 