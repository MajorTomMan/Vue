<template>
    <p>
        ID:{{ $route.params.id }}
        <br>
    </p>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from, next) => {
    const leave = window.confirm("真的要离开这个页面吗？")
    next(leave)
})
</script>