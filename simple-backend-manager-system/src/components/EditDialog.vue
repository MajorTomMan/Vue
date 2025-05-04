<!--
 * @Date: 2025-04-29 22:38:33
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-05-04 10:37:38
 * @FilePath: \simple-backend-manager-system\src\components\EditDialog.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<!-- EditDialog.vue -->
<template>
  <el-dialog title="编辑菜单" v-model="dialogVisible" width="30%" class="edit-dialog">
    <span>
      <el-form-item v-for="(value, key) in formData" :key="key" :label="key">
        <el-input v-model="formData[key]" :placeholder="'请输入' + key" clearable />
      </el-form-item>
    </span>
    <template #footer>
      <span>
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleSumbit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { watch } from "vue";
const dialogVisible = defineModel('visible')
const formData = defineModel('formData')
const emits = defineEmits(['submit'])

const handleClose = () => {
  dialogVisible.value = false
}
const handleSumbit = () => {
  emits("submit", formData.value)
}
watch(dialogVisible, (val) => {
  console.log('弹窗状态变了：', val)
})
watch(formData, (val) => {
  console.log('表单数据：', val)
})
</script>
