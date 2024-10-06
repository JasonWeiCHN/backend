### 常用指令

```bash
mkdir -p apps/v3-test
cd apps/v3-test
pnpm create vite . --template vue-ts

pnpm add vue-router --filter v3-book
pnpm add -D sass --filter v3-book


mkdir -p packages/ui-library
cd packages/ui-library
pnpm init

pnpm add ui-library@workspace:* --filter v3-book
   ```