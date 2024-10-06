<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const markdownComponent = ref(null)

// 动态导入当前路由对应的 Markdown 组件
onMounted(async () => {
  const path = `@docs/vue-develop/${route.params.name}.md`
  console.log('Loading markdown from:', path) // 调试输出路径
  const component = await import(path)
  markdownComponent.value = component.default
})
</script>
`

<template>
  <div class="markdown-content">
    <!-- 动态渲染 Markdown 文件 -->
    <component :is="markdownComponent" />
  </div>
</template>

<style scoped>
.markdown-content {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
</style>
