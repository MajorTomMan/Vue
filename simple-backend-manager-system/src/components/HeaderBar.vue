<!--
 * @Date: 2025-04-20 22:08:47
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-20 22:09:36
 * @FilePath: \simple-backend-manager-system\src\components\HeaderBar.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div class="bar">
        欢迎你，{{ user.username }}
        <button @click="quit">退出</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()
const quit = () => {
    user.setLogin(false)
    router.push({ name: "login" })
}
</script>

<style scoped>
.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    padding: 6px 12px;
    background-color: #e74c3c;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #c0392b;
}
</style>