### 这是一个调用网易云接口的音乐网站,项目技术栈vite+vue3+ts+pinia+axios+less

1. 项目启动以及安装大部分依赖
```shell
npm create vite vue3-music
# 这里使用cnpm进行包下载
cnpm install
# 安装pinia以及axios
cnpm install axios pinia
# 安装pinia持久化插件
cnpm install pinia-plugin-persistedstate
# 使用element-plus
cnpm install element-plus
# 使用less
cnpm install -D less less-loader 
# 使用unplugin-vue-components插件
cnpm install -D unplugin-vue-components
# 安装类型声明
cnpm install -D @types/node
```
2. 项目配置

- pinia
```ts
# 在src目录创建store
// src/store/index.js
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
```

- axios
```ts
# 在utils目录创建request.ts
// scr/utils/request.ts
具体看源代码
```

- main.ts统一挂载
```ts
# 在utils目录创建request.ts
// scr/main.ts
import { createApp } from 'vue'
import './main.less'
import App from './App.vue'
import pinia from "./store";

const app = createApp(App)
app.use(pinia)
app.mount('#app')

```

- vite.config.ts配置
```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});


```

- tsconfig.json配置
```json
// 加入一些配置,使得项目写起来更加丝滑
编译选择加入baseUrl以及path
"baseUrl": "./",
"paths": {
   "@/*": [
      "src/*"
   ],
},
// 加入include
"include": [
   "src/**/*.ts",
   "src/**/*.tsx",
   "src/**/*.vue",
   "src/**/*.d.ts"
],
```