import { demoBlockPlugin } from "vitepress-theme-demoblock"
const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      items: [{ text: "Button 按钮", link: "/components/button/" }],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" },
  ],
}
const config = {
  title: "🔨XXOO-UI",
  description: "组件库搭建",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    },
  },
}
export default config
