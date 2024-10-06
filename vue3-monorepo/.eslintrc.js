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
