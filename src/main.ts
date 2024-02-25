import { createApp } from 'vue'
import './main.less'
import App from './App.vue'

import pinia from "./store";

const app = createApp(App)
app.use(pinia)
app.mount('#app')
