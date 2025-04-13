<script setup>
import { ref, computed } from 'vue'

const price = ref(100)
const tax = ref(0.3)
const total = computed(() => price.value * (1 + tax.value))
</script>

<template>
  <div>
    <p>商品价格：</p> <input v-model="price">
    <p>税率：</p> <input v-model="tax">
    <p>总价：{{ total }}</p>
  </div>
</template>