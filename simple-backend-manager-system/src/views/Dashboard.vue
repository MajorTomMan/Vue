<!--
 * @Date: 2025-04-28 22:29:19
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-28 22:44:30
 * @FilePath: \Vue\simple-backend-manager-system\src\views\Dashboard.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card>
        <p>用户数量: {{ userCount }}</p>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <p>角色数量: {{ roleCount }}</p>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <p>系统状态: {{ systemStatus }}</p>
      </el-card>
    </el-col>
  </el-row>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const userCount = ref(30);
const roleCount = ref(5);
const systemStatus = ref("正常");
</script>


<style lang="css" scoped>
.p {
  color: black;
}
</style>
