<template>
    <span>child value</span><input v-model="model">
</template>

<script setup>
import { ref } from 'vue';
const model = defineModel()

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