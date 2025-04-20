<template>
    <div>
      <h2>{{ count }}</h2>
      <button @click="increment">Increase</button>
      <button @click="decrement">Decrease</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  
  </script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  margin: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #369e63;
}
</style>