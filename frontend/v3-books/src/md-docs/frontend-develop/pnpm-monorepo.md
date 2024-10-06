在 Vue 3 项目中使用 **pnpm Workspaces** 来构建 Monorepo 是一个轻量、高效的方案。以下是如何使用 **pnpm Workspaces** 创建和管理一个 Vue 3 项目的 Monorepo 的指南：

---

### **1. 初始化项目**
先确保你安装了 `pnpm`：
```bash
npm install -g pnpm
```

然后创建一个新的项目目录：
```bash
mkdir vue3-monorepo
cd vue3-monorepo
```

初始化一个 pnpm 项目：
```bash
pnpm init
```

---

### **2. 配置 pnpm Workspaces**
在项目根目录创建一个 `pnpm-workspace.yaml` 文件，用于定义 Workspaces：
```yaml
packages:
  - "packages/*"
  - "apps/*"
```

- `packages/*`：用于共享的库（比如组件库、工具库）。
- `apps/*`：用于具体的 Vue 应用。

---

### **3. 创建 Vue 应用**
在 `apps` 目录中创建一个 Vue 3 应用。以 Vite 为例：
```bash
mkdir -p apps/my-vue-app
cd apps/my-vue-app
pnpm create vite . --template vue
```

安装依赖：
```bash
pnpm install
```

将 Vue 应用添加到 Workspaces 中，返回到项目根目录运行：
```bash
pnpm install
```

---

### **4. 创建共享库**
在 `packages` 目录中创建一个共享库。例如，创建一个组件库：
```bash
mkdir -p packages/ui-library
cd packages/ui-library
pnpm init
```

安装 Vue 和相关依赖：
```bash
pnpm add vue -D
```

创建简单的组件示例：
```bash
mkdir src
echo "export { default as MyButton } from './MyButton.vue';" > src/index.js
echo "<template><button><slot /></button></template>" > src/MyButton.vue
```

在 `package.json` 中指定入口文件：
```json
{
  "name": "ui-library",
  "version": "1.0.0",
  "main": "src/index.js"
}
```

---

### **5. 在应用中使用共享库**
回到 Vue 应用目录 `apps/my-vue-app`，添加共享库作为依赖：
```bash
pnpm add ui-library --filter my-vue-app
```

在 Vue 应用中引入组件：
```vue
<template>
  <MyButton>Click Me</MyButton>
</template>

<script>
import { MyButton } from 'ui-library';

export default {
  components: {
    MyButton,
  },
};
</script>
```

---

### **6. 使用 pnpm 执行任务**
- **运行所有应用：**
  在根目录中运行：
  ```bash
  pnpm -r dev
  ```
  这会运行所有 `dev` 脚本。

- **安装依赖：**
  在根目录运行：
  ```bash
  pnpm install
  ```

- **清理构建：**
  清理所有项目：
  ```bash
  pnpm -r clean
  ```

---

### **7. 配置别名（可选）**
在 `vite.config.js` 中配置别名，以便更方便地引入共享库：
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'ui-library': resolve(__dirname, '../../packages/ui-library/src'),
    },
  },
});
```

---

### **8. 提升效率的工具**
- **pnpm 命令速查：**
    - `pnpm -r build`：构建所有项目。
    - `pnpm list`：列出所有依赖关系。

- **Lint 和格式化：**
  在根目录配置 ESLint 和 Prettier 统一管理所有包的代码风格。

---

### 最终结构
你的项目结构可能类似这样：
```
vue3-monorepo/
├── apps/
│   └── my-vue-app/
│       ├── src/
│       ├── package.json
│       └── ...
├── packages/
│   └── ui-library/
│       ├── src/
│       ├── package.json
│       └── ...
├── pnpm-workspace.yaml
├── package.json
└── ...
```

这个方案简单高效，适合 Vue 3 的开发需求，并且通过 **pnpm Workspaces** 的优势，可以实现快速构建、共享依赖和管理。

在 **pnpm Workspaces** 中增加第二个项目（无论是一个新的 Vue 应用，还是另一个库）非常简单。以下是详细步骤：

---

### **增加第二个 Vue 应用**

1. **创建新应用目录**
   在 `apps` 目录下添加第二个应用：
   ```bash
   mkdir -p apps/second-vue-app
   cd apps/second-vue-app
   pnpm create vite . --template vue
   ```

2. **安装依赖**
   返回项目根目录，安装依赖：
   ```bash
   pnpm install
   ```

3. **共享依赖**
    - 默认情况下，pnpm 会将依赖提升到根目录的 `node_modules` 中，共享依赖。
    - 如果有特定的依赖只在第二个项目中使用，你可以单独安装：
      ```bash
      pnpm add axios --filter second-vue-app
      ```

4. **运行新应用**
   进入新应用目录并启动开发：
   ```bash
   pnpm --filter second-vue-app dev
   ```

5. **调整 `pnpm-workspace.yaml`**
   确保 `apps/*` 路径包含新项目。这个文件通常已经配置好，无需手动调整，但检查一下以确保：
   ```yaml
   packages:
     - "apps/*"
     - "packages/*"
   ```

---

### **增加第二个共享库**

1. **创建新库目录**
   在 `packages` 目录下添加第二个库：
   ```bash
   mkdir -p packages/utility-library
   cd packages/utility-library
   pnpm init
   ```

2. **创建库内容**
   添加一个简单的工具函数，例如：
   ```bash
   mkdir src
   echo "export function add(a, b) { return a + b; }" > src/index.js
   ```

3. **在其他项目中使用新库**
   回到应用目录（如 `apps/my-vue-app`），添加新库作为依赖：
   ```bash
   pnpm add utility-library --filter my-vue-app
   ```

   在代码中使用新库：
   ```javascript
   import { add } from 'utility-library';

   console.log(add(2, 3)); // 输出 5
   ```

4. **开发过程中实时更新**
   如果你需要在应用中调试新库的代码，可以通过以下命令实时监控库的变化：
   ```bash
   pnpm --filter utility-library watch
   ```

---

### **运行所有项目**
在项目根目录下可以一次性运行所有项目的 `dev` 脚本：
```bash
pnpm -r dev
```

---

### **项目最终结构**
增加第二个应用和库后，目录结构可能如下：
```
vue3-monorepo/
├── apps/
│   ├── my-vue-app/
│   │   ├── src/
│   │   ├── package.json
│   │   └── ...
│   └── second-vue-app/
│       ├── src/
│       ├── package.json
│       └── ...
├── packages/
│   ├── ui-library/
│   │   ├── src/
│   │   ├── package.json
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

### **提示**
- **依赖提升：**
  pnpm 默认会提升依赖到根目录的 `node_modules`，这会减少重复安装。如果需要强制某些依赖只在特定包内安装，可以使用 `--filter`。

- **独立任务运行：**
  如果需要只运行某个项目的脚本，可以使用 `--filter` 指定：
  ```bash
  pnpm --filter my-vue-app build
  ```

- **跨项目使用库：**
  pnpm Workspaces 会自动创建符号链接（symlink）来实现共享库的引用，你只需要确保库的 `package.json` 中正确设置了 `main` 和 `exports` 字段。

---

这样，添加新的项目（无论是应用还是库）非常方便，并且所有项目之间可以高效共享和管理依赖，适合快速扩展团队开发的需求！