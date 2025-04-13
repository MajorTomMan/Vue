<template>
    <SlotChild>
        <template v-slot:default>
            <button>
                ClickMe
            </button>
        </template>
        <template v-slot:footer>
            <button>
                footer
            </button>
        </template>
    </SlotChild>
</template>

<script setup>
import { ref } from 'vue';
import SlotChild from './SlotChild.vue';

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