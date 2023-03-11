import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import NutUIResolver from '@nutui/nutui/dist/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()], // 开启 unplugin 插件，自动引入 NutUI 组件
    }),
    {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      }
    }
  ],
  server: {
    host: "localhost",
    port: 8080,//设置服务启动端口号
    https: false,
    open: true,// 设置服务器启动时是否自动打开浏览器
    proxy: {
      "/api": {//自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进入到代理中
        target: "http://192.168.213.181:8080/",
        changeOrigin: true,//表示是否跨域，	
        rewrite: (path) => path.replace("/api", '')//重写匹配的字段，如果不需要放在请求路径上，可以重写为""
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, '.', 'src')
    }
  },
})
