<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="layout">
    <div class="header">
      <div class="header__left">{{ title }}</div>
      <div class="header__right">Right</div>
    </div>
    <div class="content">
      content
    </div>
  </div>
</template>

<style lang="scss"  scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;

  .header {
    display: flex;
    justify-content: space-between;
    height: 400px;

    border-bottom: 1px solid #141517;
    color: aqua;

    &__left {
      padding: 12px;
    }

    &__right {
      box-sizing: border-box;
      min-width: 900px;
      width: 65%;
      padding: 12px;

      border-left: 1px solid #141517;
    }
  }
  .content {
    padding: 12px;
    color: orange;
  }
}

</style>