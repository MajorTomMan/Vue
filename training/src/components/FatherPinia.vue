<script setup lang="ts">
import ChildPinia from './ChildPinia.vue';
import { useCounterStore } from '../ts/counter'
const counter = useCounterStore()
const handleClick = () => {
    counter.increment()
}
</script>


<template>
    <button @click="handleClick">click me</button>
    <ChildPinia></ChildPinia>
</template>