import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './ts'
//createApp(App).use(createPinia()).mount('#app')
createApp(App).use(router).mount('#app')