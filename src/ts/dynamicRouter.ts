import { createRouter, createWebHistory } from "vue-router"
import UserDetail from "../router/UserDetail.vue"
import Home from "../router/Home.vue"
import FatherDetail from "../router/FatherDetail.vue"
import ChildDetail from "../router/ChildDetail.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/user/:id', component: UserDetail },
    {
        path: '/parent', component: FatherDetail, children: [
            { path: 'child', component: ChildDetail },
        ]
    }
]
const dynamicRouter = createRouter({
    history: createWebHistory(),
    routes
})

export default dynamicRouter