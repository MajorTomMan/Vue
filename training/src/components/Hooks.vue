<!--
 * @Date: 2025-04-13 16:05:35
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 17:25:27
 * @FilePath: \myvue\src\components\Hooks.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <h1>{{ movie }}</h1>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const movie = reactive({})
onMounted(async ()=>{
    const response = await fetch("http://13.114.140.140/api/movie/query/id/1")
    movie.value = await response.json()
})
</script>