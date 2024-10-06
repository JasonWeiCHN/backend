在 **pnpm Monorepo** 中创建一个包含 **Vue 3 + TypeScript + Vue Router + SCSS** 的新项目，可以通过手动配置或模板快速搭建。以下是详细步骤：

---

### **1. 创建新项目**
1. 在 `apps` 目录下创建一个新的 Vue 3 项目：
   ```bash
   mkdir -p apps/vue3-ts-router-scss
   cd apps/vue3-ts-router-scss
   pnpm create vite . --template vue-ts
   ```

2. 返回根目录安装依赖：
   ```bash
   pnpm install
   ```

---

### **2. 安装所需依赖**

#### 添加 Vue Router
在项目中安装 Vue Router：
```bash
pnpm add vue-router --filter vue3-ts-router-scss
```

#### 添加 SCSS 支持
安装 SCSS：
```bash
pnpm add -D sass --filter vue3-ts-router-scss
```

---

### **3. 配置项目**

#### 配置 Vue Router
1. 在 `src` 目录下创建一个 `router` 文件夹：
   ```bash
   mkdir src/router
   touch src/router/index.ts
   ```

2. 在 `src/router/index.ts` 配置基本路由：
   ```typescript
   import { createRouter, createWebHistory } from 'vue-router';

   const routes = [
     {
       path: '/',
       name: 'Home',
       component: () => import('../views/Home.vue'), // 懒加载
     },
     {
       path: '/about',
       name: 'About',
       component: () => import('../views/About.vue'),
     },
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

   export default router;
   ```

3. 创建对应的 `views` 文件夹及页面：
   ```bash
   mkdir src/views
   touch src/views/Home.vue src/views/About.vue
   ```

   在 `Home.vue` 和 `About.vue` 文件中分别添加以下代码：
    - **Home.vue**：
      ```vue
      <template>
        <div class="home">
          <h1>Welcome to Home Page</h1>
        </div>
      </template>
 
      <script setup lang="ts">
      </script>
 
      <style lang="scss" scoped>
      .home {
        h1 {
          color: blue;
        }
      }
      </style>
      ```

    - **About.vue**：
      ```vue
      <template>
        <div class="about">
          <h1>About Us</h1>
        </div>
      </template>
 
      <script setup lang="ts">
      </script>
 
      <style lang="scss" scoped>
      .about {
        h1 {
          color: green;
        }
      }
      </style>
      ```

4. 在 `main.ts` 中引入路由：
   ```typescript
   import { createApp } from 'vue';
   import App from './App.vue';
   import router from './router';

   createApp(App).use(router).mount('#app');
   ```

---

#### 配置 SCSS 全局变量（可选）
如果需要全局的 SCSS 变量或混入，可以在 `src` 下创建 `styles` 文件夹：
```bash
mkdir src/styles
touch src/styles/_variables.scss
```

在 `vite.config.ts` 中添加 SCSS 配置：
```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
  },
});
```

---

### **4. 测试项目**
运行项目开发模式：
```bash
pnpm --filter vue3-ts-router-scss dev
```

---

### **5. 项目目录结构**
最终，你的项目目录结构可能如下：
```
apps/
├── vue3-ts-router-scss/
│   ├── src/
│   │   ├── router/
│   │   │   └── index.ts
│   │   ├── views/
│   │   │   ├── About.vue
│   │   │   └── Home.vue
│   │   ├── styles/
│   │   │   └── _variables.scss
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── ...
│   ├── vite.config.ts
│   ├── package.json
│   └── ...
```

---

### **6. 配合 Monorepo**
如果需要与 Monorepo 中其他库共享内容：
- 添加 Monorepo 中的共享库：
  ```bash
  pnpm add ui-library --filter vue3-ts-router-scss
  ```
- 在代码中使用共享库。

---

这样，你就完成了一个 **Vue 3 + TypeScript + Router + SCSS** 的项目设置，并且它很好地集成到了 Monorepo 中！

### 配置 eslint 和 prettier

在 pnpm 的工作空间中添加公共的 **ESLint** 和 **Prettier** 配置，可以通过在根目录统一安装和配置实现，从而确保所有项目共享相同的代码规范。以下是详细的操作步骤：

---

### **1. 在根目录安装 ESLint 和 Prettier**

在 Monorepo 根目录安装 ESLint、Prettier 及相关插件和扩展：
```bash
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin --workspace-root
```

---

### **2. 配置 ESLint**

1. **在根目录创建 `.eslintrc.js`**：
   ```bash
   touch .eslintrc.js
   ```

2. **编辑 `.eslintrc.js`，添加如下配置**：
   ```javascript
   module.exports = {
     root: true, // 确保只使用根目录的 ESLint 配置
     env: {
       browser: true,
       es2021: true,
       node: true,
     },
     extends: [
       'eslint:recommended',
       'plugin:vue/vue3-recommended', // 使用 Vue 3 推荐规则
       'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
       'prettier', // 配合 Prettier 禁用与格式化冲突的规则
     ],
     parser: 'vue-eslint-parser', // 支持 Vue 文件
     parserOptions: {
       parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
       ecmaVersion: 2021,
       sourceType: 'module',
     },
     plugins: ['vue', '@typescript-eslint'],
     rules: {
       // 自定义规则，根据团队需求调整
       'vue/multi-word-component-names': 'off',
       '@typescript-eslint/no-unused-vars': ['error'],
     },
   };
   ```

3. **在根目录创建 `.eslintignore`**，指定不需要检测的文件和目录：
   ```bash
   touch .eslintignore
   ```

   示例内容：
   ```
   node_modules/
   dist/
   .pnpm/
   ```

---

### **3. 配置 Prettier**

1. **在根目录创建 `prettier.config.js` 或 `.prettierrc`**：
   ```bash
   touch prettier.config.js
   ```

2. **编辑 `prettier.config.js`，添加如下内容**：
   ```javascript
   module.exports = {
     printWidth: 80, // 每行最大字符数
     tabWidth: 2, // 缩进使用 2 个空格
     useTabs: false, // 使用空格缩进
     semi: true, // 每行末尾添加分号
     singleQuote: true, // 使用单引号
     trailingComma: 'es5', // 在多行对象或数组中保留尾逗号
     bracketSpacing: true, // 在对象文字中添加空格
     arrowParens: 'always', // 箭头函数参数始终使用括号
   };
   ```

3. **在根目录创建 `.prettierignore`**：
   ```bash
   touch .prettierignore
   ```

   示例内容：
   ```
   node_modules/
   dist/
   .pnpm/
   ```

---

### **4. 配置工作区项目的 `package.json` 脚本**

在每个项目的 `package.json` 中添加脚本以运行 ESLint 和 Prettier。例如：
```json
{
  "scripts": {
    "lint": "eslint . --ext .vue,.ts",
    "format": "prettier --write ."
  }
}
```

---

### **5. 在根目录安装 VSCode 配置（可选）**

如果你使用 VSCode，可以在工作空间中添加 `.vscode/settings.json`，统一配置 ESLint 和 Prettier：
1. **创建 `.vscode/settings.json`**：
   ```bash
   mkdir .vscode
   touch .vscode/settings.json
   ```

2. **编辑 `settings.json`，添加如下内容**：
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "eslint.validate": ["javascript", "typescript", "vue"],
     "files.eol": "\n"
   }
   ```

---

### **6. 使用与测试**

#### 检查 ESLint
在项目根目录或某个项目内运行 ESLint：
```bash
pnpm eslint .
```

#### 格式化代码
在项目根目录或某个项目内运行 Prettier：
```bash
pnpm prettier --write .
```

---

### **7. 项目结构更新**
配置完成后，项目目录可能如下：
```
vue3-monorepo/
├── .eslintrc.js
├── prettier.config.js
├── .eslintignore
├── .prettierignore
├── .vscode/
│   └── settings.json
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
│   │   ├── package.json
│   │   └── ...
│   └── utility-library/
│       ├── src/
│       ├── package.json
│       └── ...
├── pnpm-workspace.yaml
└── ...
```

---

### **8. 配置同步和更新**

如果有新项目加入 Monorepo，无需重复安装 ESLint 和 Prettier，只需确保根目录的配置文件能够覆盖工作区即可。同时通过 `pnpm install` 同步依赖。

这样，每个项目都能共享 ESLint 和 Prettier 配置，统一代码规范。