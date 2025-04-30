<!-- EditDialog.vue -->
<template>
  <el-dialog v-model:visible="visibleProxy" :title="dialogTitle">
    <el-form :model="formData">
      <el-form-item :label="label">
        <el-input v-model="formData.value" />
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
import { computed } from 'vue';

const props = defineProps({
  visible: { type: Boolean, required: true },       // 👈 重点：这里变成 visible
  dialogTitle: { type: String, required: true },
  formData: { type: Object, required: true },
  label: { type: String, default: '名称' },
});

const emit = defineEmits(['update:visible', 'submit']); // 👈 使用 update:visible 支持 v-model

const visibleProxy = computed({
  get: () => props.visible,
  set: (val: boolean) => emit('update:visible', val),
});

const closeDialog = () => {
  visibleProxy.value = false; // 👈 触发 emit 更新父组件的 dialogVisible
};

const handleSubmitEdit = () => {
  emit('submit', props.formData);
};
</script>