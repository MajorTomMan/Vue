import { createRouter, createWebHistory } from "vue-router"
import UserDetail from "../router/UserDetail.vue"
import Home from "../router/Home.vue"
import FatherDetail from "../router/FatherDetail.vue"
import ChildDetail from "../router/ChildDetail.vue"

const routes = [
    { path: '/', component: Home, name: 'home' },
    {
        path: '/parent', component: FatherDetail, name: "parent", children: [
            { path: 'child', component: ChildDetail, name: 'child' },
        ]
    },{
        path: '/user/:id',
        name: 'user',
        component: UserDetail,
        beforeEnter: (to: any, from: any, next: () => void) => {
            console.log('只针对 user 路由的守卫')
            next()
        }
    }
]
const dynamicRouter = createRouter({
    history: createWebHistory(),
    routes
})
dynamicRouter.beforeEach((to, from, next) => {
    console.log(`即将从 ${from.fullPath} 跳转到 ${to.fullPath}`)

    if (to.name === 'user' && !isLogin()) {
        // 模拟没登录就拦住
        alert("未登录")
        next({ name: 'home' })
    } else {
        next()
    }
})

function isLogin() {
    return false // 你可以改成 true 试试
}

export default dynamicRouter