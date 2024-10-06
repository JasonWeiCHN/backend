<template>
  <button class="my-button"><slot /></button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'secondary';
}>();
</script>

<style scoped>
.my-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: #fff;
  cursor: pointer;
}

.my-button:hover {
  background-color: #369b6d;
}
</style>
