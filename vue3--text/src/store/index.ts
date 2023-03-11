import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
export * from '@/store/user'
// 创建pinia实例
const pinia = createPinia()
// 使用pinia插件
pinia.use(persist)
// 导出pinia实例，给main使用
export default pinia