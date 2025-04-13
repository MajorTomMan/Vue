<script setup lang="ts">
import { ref } from 'vue'
import Counter from './Counter.vue';

const count = ref(0)
</script>

<template>
    <Counter></Counter>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
