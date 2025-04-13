<!--
 * @Date: 2025-04-13 21:12:06
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 21:36:12
 * @FilePath: \myvue\src\components\ChildPinia.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <h1>Counter:{{ counter.count }}</h1>
</template>
<script setup lang="ts">
import { useCounterStore } from '../ts/counter'
const counter = useCounterStore()

</script>
