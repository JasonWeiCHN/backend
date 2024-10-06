<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Header } from 'ui-library/src';
</script>

<template>
  <Header title="键盘商城" sub-title="你想要的键盘或许能在这儿找到！"></Header>
  <div class="view">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
}
</style>
