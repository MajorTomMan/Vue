<!--
 * @Date: 2025-04-20 18:31:14
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-28 22:36:18
 * @FilePath: \Vue\simple-backend-manager-system\src\views\Login.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <el-container class="container">
        <div class="main">
            <el-form :model="user" label-width="auto" style="max-width: 600px">
                <el-form-item label="用户名">
                    <el-input v-model="user.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="user.password" />
                </el-form-item>
            </el-form>
            <div class="footer">
                <el-button @click="handleRegister">
                    注册
                </el-button>
            </div>
        </div>
    </el-container>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore, type User } from '../stores/user';
import { ElMessage } from 'element-plus';
const router = useRouter()
const user = ref<User>({
    username: '',
    password: '',
    id: 0,
    isLogin: false
})
const handleRegister = () => {
    if (!user.value.password) {
        ElMessage("密码不得为空")
        return;
    } else if (!user.value.username) {
        ElMessage("用户名不得为空")
        return;
    }
    const userStore = useUserStore()
    userStore.addUser(user)
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

.container {
    height: 100vh;
    /* 全屏高度 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    width: 400px;
    height: 200px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    /* 可选：更好看 */
    background-color: white;
    /* 可选：避免透明背景 */
}

.footer {
    /* 全屏高度 */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
