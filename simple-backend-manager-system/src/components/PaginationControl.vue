<!--
 * @Date: 2025-04-29 20:52:01
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-05-04 10:55:27
 * @FilePath: \simple-backend-manager-system\src\components\PaginationControl.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <div>
    <el-button-group class="pagination-control">
      <el-button type="primary" size="default" @click="requestPreviousPage">上一页</el-button>
      <el-button type="primary" disabled>第{{ currentPage }}页</el-button>
      <el-button type="primary" size="default" @click="requestNextPage">下一页</el-button>
    </el-button-group>
  </div>

</template>
<script setup lang="ts">
import type { User } from '@/mock/data';
import { ElMessage } from 'element-plus';
import { ref, watchEffect } from 'vue';
const pageSize = defineModel<number>("pageSize", { default: 5 })
const totalItems = defineModel<number>("totalItems", { default: 0 })
const dataSource = defineModel<Object[]>("dataSource", { default: () => [] })
const emits = defineEmits(["page-changed"])
const currentPage = ref(1);
const newDataSource = ref<Object[]>([])
let start = 0;
let end = start + pageSize.value;


watchEffect(() => {
  start = (currentPage.value - 1) * pageSize.value;
  end = start + pageSize.value;
  newDataSource.value = dataSource.value.slice(start, end);
  emits("page-changed", newDataSource.value, currentPage.value)
})

const requestNextPage = () => {
  if (currentPage.value * pageSize.value >= totalItems.value) {
    ElMessage("已经到最后一页,不能再往后了");
    return;
  }
  currentPage.value += 1;
  start = (currentPage.value - 1) * pageSize.value;
  end = start + pageSize.value;
}
const requestPreviousPage = () => {
  if (currentPage.value === 1) {
    ElMessage("已经到第一页,不能再往前了");
    return;
  }
  currentPage.value -= 1;
  start = (currentPage.value - 1) * pageSize.value;
  end = start + pageSize.value;
}
</script>

<style lang="css" scoped>
.pagination-control {
  display: flex;
  align-items: center;
  /* 垂直居中 */
  gap: 10px;
  /* 按钮和文字之间留点空隙，可选 */
}
</style>
