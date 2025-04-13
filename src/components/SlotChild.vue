<template>
    <h1>
        test
    </h1>
    <slot></slot>
    <slot name="footer"></slot>
    
</template>

<script setup>
import { ref } from 'vue';
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