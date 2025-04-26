/*
 * @Date: 2025-04-20 12:53:34
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-26 18:44:18
 * @FilePath: \simple-backend-manager-system\src\router\index.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import Register from '../views/Register.vue';
import Layout from '../layouts/Layout.vue';
import UserList from '../views/UserList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", name: "login", component: Login, beforeEnter: (to, from, next) => {
        const { islogin } = storeToRefs(useUserStore())
        if (islogin.value) {
          return next({ name: "home" })
        }
        next()
      }
    },
    {
      path: "/home", component: Layout, beforeEnter: (to, from, next) => {
        const { islogin, isRegister } = storeToRefs(useUserStore())
        if (!isRegister.value) {
          console.log("未注册")
          return next({ name: "register" })
        }
        if (!islogin.value) {
          console.log("未登录")
          return next({ name: "login" })
        }
        console.log("已登录")
        next()
      }, children: [
        {
          path: "",
          component: Home,
          name: "home"
        },
        {
          path: "/userlist",
          component: UserList,
          name: "userlist"
        }
      ]
    }, {
      path: "/register", name: "register", component: Register,
    }
  ]
})
export default router
