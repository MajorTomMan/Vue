<template>
  <Heavy />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import LoadingComponent from './LoadingComponent.vue';
import ErrorComponent from './ErrorComponent.vue';
const Heavy = defineAsyncComponent({
  loader: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./HeavyFruit.vue'));
    }, 3000);
  }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,      // 0.2 秒后开始显示 loading
  timeout: 10000,  // 10 秒后才认为超时失败
})

</script>