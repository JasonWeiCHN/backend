<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header></Header>
  <div class="page">
    <RouterView />
  </div>
</template>

<style lang="scss">
.page {
  p {
    font-size: 18px;
    margin-bottom: 1rem;
  }
}
</style>
