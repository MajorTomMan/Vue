<!--
 * @Date: 2025-04-20 18:31:51
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-26 19:06:38
 * @FilePath: \simple-backend-manager-system\src\components\SideMenu.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div class="menu">
        <RouterLink :to="{ name: 'home' }">首页</RouterLink><br>
        <RouterLink :to="{ name: 'userlist' }">用户列表</RouterLink><br>

        <!-- 后续可以加更多 -->
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu {
    padding: 20px;
    color: white;
}

.menu a {
    color: white;
    text-decoration: none;
}

.menu a.router-link-exact-active {
    font-weight: bold;
}
</style>