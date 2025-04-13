<template>
  <div>
    <h3>子组件接收数据：</h3>
    <p>{{ message }}</p>
  </div>
  <button @click="trans">Click Me</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  message: String  // 定义 props，接收父组件的数据
});
const emits = defineEmits(['messageFromChild']);
const trans = () => {
  emits("messageFromChild","return by child")
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