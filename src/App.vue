<!--
 * @Date: 2025-04-13 16:05:35
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-20 11:59:35
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

import dynamicRouter from './ts/dynamicRouter';
const handleClick = () => {
  dynamicRouter.push({ name: "child" })
}
</script>

<template>
  <!-- <UserPinia /> -->
  <!--   <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <router-view></router-view> -->
  <RouterLink :to="{ name: 'user', params: { id: 123 } }">user</RouterLink><br>
  <RouterLink :to="{ name: 'home', params: {} }">home</RouterLink><br>
  <button @click="handleClick">child</button><br>
  <Transition name="fade" mode="out-in">
    <RouterView></RouterView>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
