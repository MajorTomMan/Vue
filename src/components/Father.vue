<script setup lang="ts">
import Child from './Child.vue';
const handleMessageFromChild = (msg: any)=>{
    console.log(msg);
};
</script>

<template>
    <Child message="test" @messageFromChild="handleMessageFromChild"></Child>
</template>

<style scoped>
</style>
