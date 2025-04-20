<!--
 * @Date: 2025-04-20 18:31:14
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-20 21:34:13
 * @FilePath: \simple-backend-manager-system\src\views\Register.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div>
        UserName:<input v-model="username" /><br>
        Password:<input v-model="password" /><br>
        <button @click="handleRegister">Register</button><br>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
const router = useRouter()

const username = ref("")
const password = ref("")
const handleRegister = (event) => {
    if (username.value == "") {
        alert("用户名为空")
        return
    }
    if (password.value == "") {
        alert("密码为空")
        return
    }
    const user = useUserStore()
    user.setUserName(username.value)
    user.setPassword(password.value)
    user.setRegister(true)
    user.setLogin(true)
    router.push({ name: "home" })
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