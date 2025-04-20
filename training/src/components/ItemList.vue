<template>

    <button @click="handleShow">
        Click me to Show List
    </button>
    <h1 v-show="show">
        <li v-for="item in list">
            {{ item }}
        </li>
    </h1>
    <h1 v-show="!show">数组为空 </h1>


</template>

<script setup>
import { ref } from 'vue';
const list = ref([1, 2, 3, 4, 5])
let show = ref(true)
const handleShow = () => {
    show.value = !show.value
    console.log(show);
}
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