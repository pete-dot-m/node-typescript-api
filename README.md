## node-typescript-api project skeleton ##
---
*because when I need a quick node/typescript project, I always fumble around getting one created*

- include nodemon for live-reload: ```npm run serve```

steps taken to get to this point:

```bash
mkdir node-typescript && cd node-typescript
npm init -y
npm i -D typescript ts-node
```
create a starter tsconfig.json
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "rootDir": "./",
    "esModuleInterop": true
  }
}
```
```bash
npm i -D @types/node
npm i express
npm i -D @types/express
```
create a functioning app in src/app.ts
```typescript
import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`application is running on port ${port}.`);
});
```
```bash
npm i -D nodemon
```
add 'serve' script to package.json
```json
...
"scripts": {
    "serve": "nodemon src/app.ts"
}
...
```
```bash
npm run serve
```
