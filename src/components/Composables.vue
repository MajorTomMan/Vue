<template>
    <h1>{{ time }}</h1>
    <button @click="start">
        start
    </button>
    <button @click="stop">
        stop
    </button>
</template>

<script setup lang="ts">
import useTimer from "../ts/useTimer.ts"
const { time, start, stop } = useTimer();

</script>