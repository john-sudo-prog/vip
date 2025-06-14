import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [vue()],
  base: '/vip/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'i18n': [
            './src/i18n/zh-CN.js',
            './src/i18n/zh-TW.js',
            './src/i18n/en.js'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
}) 