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
import { ElMessage } from 'element-plus';
import { ref, defineProps, defineEmits, watch } from 'vue';
const page = defineProps({
    pageSize: { type: Number, default: 5 },
    totalItems: { type: Number, required: true },
    dataSource: { type: Array<any>, required: true }
});
const emits = defineEmits(["page-changed"])
let currentPage = ref(1);
let start = 0;
let end = start + page.pageSize;
let newDataSource = ref<any>([])

// 初次加载或 dataSource 变化时，重新切一份数据
watch(
    () => page.dataSource,
    () => {
        currentPage.value = 1;
        const start = (currentPage.value - 1) * page.pageSize;
        const end = start + page.pageSize;
        newDataSource.value = page.dataSource.slice(start, end); // 正确切片
        emits("page-changed", newDataSource.value, currentPage.value); // emit 给父组件
    },
    { immediate: true }
);

const requestNextPage = () => {
    if (currentPage.value * page.pageSize >= page.totalItems) {
        ElMessage("已经到最后一页,不能再往后了");
        return;
    }
    currentPage.value += 1;
    start = (currentPage.value - 1) * page.pageSize;
    end = start + page.pageSize;
    newDataSource.value = page.dataSource.slice(start, end);
    emits("page-changed", newDataSource.value, currentPage.value)
}
const requestPreviousPage = () => {
    if (currentPage.value === 1) {
        ElMessage("已经到第一页,不能再往前了");
        return;
    }
    currentPage.value -= 1;
    start = (currentPage.value - 1) * page.pageSize;
    end = start + page.pageSize;
    newDataSource.value = page.dataSource.slice(start, end);
    emits("page-changed", newDataSource.value, currentPage.value)
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
