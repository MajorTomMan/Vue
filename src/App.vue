<!--
 * @Date: 2025-04-13 16:05:35
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 21:20:26
 * @FilePath: \myvue\src\App.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Father from './components/Father.vue';
import ItemList from './components/ItemList.vue';
import ModelFather from './components/ModelFather.vue';
import SlotFather from './components/SlotFather.vue';
import DynamicComponent from './components/DynamicComponent.vue';
import AsyncComponent from './components/AsyncComponent.vue';
import Computed from './components/Computed.vue';
import Composables from './components/Composables.vue';
import Watch from './components/Watch.vue';
import Hooks from './components/Hooks.vue';
import FatherPinia from './components/FatherPinia.vue';
import UserPinia from './components/UserPinia.vue';
</script>

<template>
  <UserPinia />
</template>

<style scoped></style>
