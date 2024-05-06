import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

// https://vitejs.dev/config/
console.log(process.env.VITE_BACKEND_HOST)
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: `${process.env.VITE_BACKEND_HOST ?? "http://localhost"}:${process.env.VITE_BACKEND_PORT ?? 3001}`,
      }
    }
  }
})
