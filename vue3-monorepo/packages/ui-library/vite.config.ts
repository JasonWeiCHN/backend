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
