/*
 * @Date: 2025-04-13 23:51:58
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 23:53:10
 * @FilePath: \myvue\src\ts\index.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../router/Home.vue'
import About from '../router/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
