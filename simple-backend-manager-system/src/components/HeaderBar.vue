<!--
 * @Date: 2025-04-20 22:08:47
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-27 23:01:35
 * @FilePath: \Vue\simple-backend-manager-system\src\components\HeaderBar.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <el-header class="header">
    <div class="logo">Simple Backend Manager</div>
    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          Admin <el-icon><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #545c64;
  color: #fff;
  padding: 0 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
