# 项目说明

### 编译指令 在w-monorepo下运行

```
npx tsc --project apps/electron-game-master/tsconfig.json
```

- 也可以在本地手动编译

### 怎么build？

- 先编译 等 dist里出现 main.js 和 preload.js
- npm run build (也可以在NX工作区 执行script 和 在本地一样)

### 生产部署

- game-master build 时 需要 npx nx build game-master --base-href ./
- 先去game-master 执行 build 找到 dist里的 game-master 复制到 electron-game-master 的 dist
- 切换 win.loadFile(path.join(__dirname, '../dist/game-master/index.html')); // production
- 执行electron 的build
