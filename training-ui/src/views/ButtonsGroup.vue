<template>
    <div>
        <el-button-group>
            <el-button type="primary" size="large" :disable="true" :icon="ArrowLeft" >上一页</el-button>
            <el-button type="primary" size="small" :loading="true">第一页</el-button>
            <el-button type="primary" size="small" >第二页</el-button>
            <el-button type="primary" size="small">第三页</el-button>
            <el-button type="primary" size="large" :icon="ArrowRight">下一页</el-button>
        </el-button-group>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue';
const currentPage = ref(1)


</script>