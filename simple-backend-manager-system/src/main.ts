/*
 * @Date: 2025-04-20 12:53:34
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-20 12:58:40
 * @FilePath: \Vue\simple-backend-manager-system\src\main.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
