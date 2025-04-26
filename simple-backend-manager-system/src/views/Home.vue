<!--
 * @Date: 2025-04-20 18:31:25
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-26 19:07:44
 * @FilePath: \simple-backend-manager-system\src\views\Home.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div class="home">
        <p>home</p>
        <button @click="handleQuit">quit</button>
    </div>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
const router = useRouter()
const handleQuit = () => {
    const user = useUserStore()
    user.setLogin(false)
    router.push({ name: "login" })
}
</script>
<style lang="css" scoped>
button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    margin: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #369e63;
}
</style>