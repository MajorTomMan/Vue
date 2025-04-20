<!--
 * @Date: 2025-04-13 23:23:28
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 23:45:25
 * @FilePath: \myvue\src\components\UserPinia.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <p>isAdult:{{ isAdult }}</p>
    <button @click="counter.growUP">
        click by me
    </button>

</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '../ts/user'
const counter = useUserStore()
const { name, age, isAdult } = storeToRefs(counter)

</script>