import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './ts'
import dynamicRouter from './ts/dynamicRouter'
//createApp(App).use(createPinia()).mount('#app')
createApp(App).use(dynamicRouter).mount('#app')