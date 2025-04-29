<!--
 * @Date: 2025-04-29 22:38:33
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-29 22:55:54
 * @FilePath: \simple-backend-manager-system\src\components\EditDialog.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <!-- 编辑弹出框 -->
  <el-dialog :visible="dialogVisible" :title="dialogTitle">
    <el-form :model="formData">
      <el-form-item :label="label">
        <el-input v-model="props.formData.value"></el-input>
      </el-form-item>
    </el-form>
    <span class="dialog-footer">
      <slot name="footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="handleSubmitEdit">确定</el-button>
      </slot>
    </span>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  dialogVisible: { type: Boolean, required: true },  // 控制弹窗显示状态
  dialogTitle: { type: String, required: true },    // 弹窗标题
  formData: { type: Object, required: true },       // 表单数据
  label: { type: String, default: '名称' },         // 输入框的标签
});

const emit = defineEmits(['showDialog', 'submit']); // 提交事件

const closeDialog = () => {
  emit('showDialog', false); // 弹窗关闭时通知父组件
};

const handleSubmitEdit = () => {
  emit('submit', props.formData); // 提交表单数据
};
</script>
