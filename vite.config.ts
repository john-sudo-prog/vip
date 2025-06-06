import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 修改为您的 GitHub 仓库名
  plugins: [vue()],
}) 