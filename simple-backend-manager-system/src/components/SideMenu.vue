<!--
 * @Date: 2025-04-20 18:31:51
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-27 22:59:23
 * @FilePath: \Vue\simple-backend-manager-system\src\components\SideMenu.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
    active-text-color="#ffd04b" router>
    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <span>仪表盘</span>
    </el-menu-item>
    <el-menu-item index="/userlist">
      <i class="el-icon-user"></i>
      <span>用户管理</span>
    </el-menu-item>
    <el-menu-item index="/rolelist">
      <i class="el-icon-role"></i>
      <span>角色管理</span>
    </el-menu-item>
  </el-menu>
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
