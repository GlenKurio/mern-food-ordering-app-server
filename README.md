# Backend

0. Initial setup:

```sh
npm i express cors dotenv mongodb mongoose
```

- To use typescript in node:

```sh
npm i ts-node typescript nodemon @types/express @types/cors @types/node -D
```

- Create `tsconfig.json` in `server` folder:

```sh
npx tsc --init
```

- Change main in package.json to `./src/index.ts`;
- For "dev" script we can use just "nodemon"
