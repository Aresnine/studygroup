import { defineConfig } from "vite"
// 用来支持单文件组件
import vue from "@vitejs/plugin-vue"
// jsx支持
import vueJsx from "@vitejs/plugin-vue-jsx"
// unocss
import Unocss from "./config/unocss"
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  css: {
    preprocessorOptions: {
      scss: {
        
      }
    }
  },
  build: {
    rollupOptions: {
      // 讲模块保留在bundle之外
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
   
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: true, 
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "xxooUI",
      fileName: "xxoo-ui",
      // 导出模块格式
      formats: ["es", "umd",'cjs', "iife"],
    },
  },
})
