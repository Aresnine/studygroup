import DefaultTheme from "vitepress/theme"
import XXOOUI from "../../../src/entry"
import "vitepress-theme-demoblock/dist/theme/styles/index.css"
// import { useComponents } from "./useComponents"
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue"
import TableDemo from "./TableDemo.vue"
import "uno.css"
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(XXOOUI)
    app.component("TableDemo", TableDemo)
    app.component("Demo", Demo)
    app.component("DemoBlock", DemoBlock)
  },
}
