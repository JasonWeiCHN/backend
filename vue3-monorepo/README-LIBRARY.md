在你的 **pnpm Monorepo** 中增加一个 **Vue 3 + TypeScript** 的 UI 库，可以通过以下步骤实现：

---

### **1. 创建新的 UI Library**

1. 在 `packages` 目录下创建一个新的目录：
   ```bash
   mkdir -p packages/ui-library
   cd packages/ui-library
   ```

2. 初始化 `package.json` 文件：
   ```bash
   pnpm init
   ```

   示例 `package.json` 配置：
   ```json
   {
     "name": "ui-library",
     "version": "1.0.0",
     "main": "dist/index.js",
     "module": "dist/index.esm.js",
     "types": "dist/index.d.ts",
     "scripts": {
       "build": "vite build",
       "dev": "vite",
       "lint": "eslint . --ext .ts,.vue",
       "test": "echo \"No tests specified\""
     },
     "dependencies": {
       "vue": "^3.3.0"
     },
     "devDependencies": {
       "vite": "^4.0.0",
       "vue-tsc": "^1.3.0",
       "typescript": "^5.0.0",
       "@vitejs/plugin-vue": "^4.0.0",
       "eslint": "^8.0.0",
       "@typescript-eslint/eslint-plugin": "^5.0.0",
       "@typescript-eslint/parser": "^5.0.0"
     },
     "files": [
       "dist"
     ]
   }
   ```

3. 安装依赖：
   ```bash
   pnpm install
   ```

---

### **2. 配置 UI Library 项目**

#### 添加 Vite 配置

在 `packages/ui-library` 下创建 `vite.config.ts`：
```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 入口文件
      name: 'UI-Library',
      fileName: (format) => `ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // 将 Vue 标记为外部依赖
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
```

---

#### 初始化目录结构

在 `packages/ui-library` 下创建以下目录结构：

```bash
mkdir src
touch src/index.ts
mkdir src/components
touch src/components/MyButton.vue
```

- **`src/index.ts`**：导出库的入口文件
  ```typescript
  import { App } from 'vue';
  import MyButton from './components/MyButton.vue';

  const install = (app: App) => {
    app.component('MyButton', MyButton);
  };

  export default { install };
  export { MyButton };
  ```

- **`src/components/MyButton.vue`**：一个简单的按钮组件
  ```vue
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
  ```

---

### **3. 在 UI Library 中测试开发**

#### 启动开发服务器
在 `packages/ui-library` 下运行：
```bash
pnpm dev
```

配置 `index.html` 作为测试页面（用于调试组件）：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UI Library</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      import { createApp } from 'vue';
      import App from './src/components/MyButton.vue';

      createApp(App).mount('#app');
    </script>
  </body>
</html>
```

---

### **4. 打包 UI Library**

在 `packages/ui-library` 下运行：
```bash
pnpm build
```

打包完成后，输出内容将位于 `dist/` 目录下。

---

### **5. 在其他项目中使用 UI Library**

#### 添加依赖

在其他项目中通过 pnpm 添加 UI Library 作为依赖：
```bash
pnpm add ui-library --filter my-vue-app
```

#### 注册组件库

在 Vue 项目入口文件中注册组件库：
```typescript
import { createApp } from 'vue';
import App from './App.vue';
import UiLibrary from 'ui-library';

const app = createApp(App);
app.use(UiLibrary);
app.mount('#app');
```

#### 使用组件

在组件中直接使用：
```vue
<template>
  <div>
    <MyButton type="primary">Click Me</MyButton>
  </div>
</template>
```

---

### **6. 完整 Monorepo 项目结构**

完成后的项目结构可能如下：
```
vue3-monorepo/
├── apps/
│   ├── my-vue-app/
│   │   ├── src/
│   │   ├── package.json
│   │   └── ...
│   └── vue3-ts-router-scss/
│       ├── src/
│       ├── package.json
│       └── ...
├── packages/
│   ├── ui-library/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── MyButton.vue
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── ...
│   └── utility-library/
│       ├── src/
│       ├── package.json
│       └── ...
├── pnpm-workspace.yaml
├── package.json
└── ...
```

---

通过上述步骤，你可以成功在 Monorepo 中添加一个 **Vue 3 + TypeScript** 的 UI 库，并且能够在其他项目中共享和使用它。