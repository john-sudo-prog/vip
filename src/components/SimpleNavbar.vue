<template>
  <nav class="fixed w-full bg-white backdrop-blur-md z-50 shadow-sm border-b border-gray-100/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <router-link to="/">
            <img src="../assets/img/logo.jpg" :alt="$t('nav.logo')" class="h-8 transition-transform duration-300 group-hover:scale-105" />
          </router-link>
        </div>

        <!-- 首页链接 -->
        <div class="flex items-center">
          <router-link to="/" class="text-gray-600 hover:text-primary-600 transition-colors duration-300 py-2">
            {{ $t('nav.home') }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>

