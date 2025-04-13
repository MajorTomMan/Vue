<template>
  <div class="heavy-wrapper">
    <h2>🍉 超大型组件 Loaded!</h2>
    <p>这是一个模拟非常复杂的组件，例如图表、大量表单或复杂 DOM。</p>

    <div class="grid">
      <div v-for="n in 100" :key="n" class="block">
        块 {{ n }}
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.heavy-wrapper {
  padding: 20px;
  border: 2px dashed #ccc;
  margin-top: 20px;
  background: #fdfdfd;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
}

.block {
  height: 60px;
  background-color: #42b983;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>