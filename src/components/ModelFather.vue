<template>
    <h1>{{ title }}</h1>
    <ModelChild v-model="title"/>
</template>

<script setup>
import { ref } from 'vue';
import ModelChild from './ModelChild.vue';
const title = ref("hello")
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