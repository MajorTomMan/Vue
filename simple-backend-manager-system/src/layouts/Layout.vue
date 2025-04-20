<!--
 * @Date: 2025-04-20 22:08:25
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-20 22:09:01
 * @FilePath: \simple-backend-manager-system\src\layouts\Layout.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div class="layout">
        <SideMenu class="sidemenu" />
        <div class="main">
            <HeaderBar class="header" />
            <router-view class="content" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SideMenu from '../components/SideMenu.vue'
import HeaderBar from '../components/HeaderBar.vue'
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
}

.sidemenu {
    width: 200px;
    background-color: #2c3e50;
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.header {
    height: 60px;
    background-color: #35495e;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.content {
    flex: 1;
    padding: 20px;
    background: #f5f5f5;
}
</style>