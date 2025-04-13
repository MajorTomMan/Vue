<template>
  <button @click="current = Apple ">A</button>
  <button @click="current = Banana ">B</button>
  <button @click="current = Cherry ">C</button>
  <component :is="current"></component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Apple from './Apple.vue';
import Banana from './Banana.vue';
import Cherry from './Cherry.vue';
const current = ref(Apple)
</script>