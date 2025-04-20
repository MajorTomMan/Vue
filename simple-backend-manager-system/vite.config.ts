/*
 * @Date: 2025-04-20 12:53:34
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-20 19:16:25
 * @FilePath: \simple-backend-manager-system\vite.config.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}