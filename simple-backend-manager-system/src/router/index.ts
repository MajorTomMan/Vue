/*
 * @Date: 2025-04-20 12:53:34
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-28 22:34:47
 * @FilePath: \Vue\simple-backend-manager-system\src\router\index.ts
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
import RoleList from '@/views/RoleList.vue';
import Dashboard from '@/views/Dashboard.vue';

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
      path: "/dashboard", component: Layout, beforeEnter: (to, from, next) => {
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
          component: Dashboard,
          name: "dashboard"
        },
        {
          path: "/userlist",
          component: UserList,
          name: "userlist"
        },
        {
          path: "/rolelist",
          component: RoleList,
          name: "rolelist"
        }
      ]
    }, {
      path: "/register", name: "register", component: Register,
    }
  ]
})
export default router
