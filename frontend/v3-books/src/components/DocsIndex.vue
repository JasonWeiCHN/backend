<template>
  <div>
    <h1>Documentation</h1>
    <ul>
      <li v-for="doc in docs" :key="doc.name">
        <router-link :to="`/docs/${doc.name}`">{{ doc.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const docs: Record<string, string>[] = [
  { name: 'multi-word-component-names开启的意义' },
  { name: 'test' },
]
</script>
