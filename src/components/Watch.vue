<template>
    <p>{{ text }}</p>
    <input v-model="text">

</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
const text = ref("")
watchEffect(()=>{
  console.log(text.value)
})
</script>