import { createApp } from "vue";
import pinia from '@/store/index'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import persist from 'pinia-plugin-persistedstate'
import "@/style.css";
import App from "@/App.vue";
import router from "@/router";
import 'amfe-flexible';
// 样式全局使用
import 'vant/lib/index.css'
import '@/styles/main.scss'
import '@/utils/rem.js'

createApp(App).use(pinia.use(persist)).use(NutUI).use(router).mount("#app");
