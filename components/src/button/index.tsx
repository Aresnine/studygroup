import { defineComponent, PropType, toRefs } from "vue"
// 定义类型
export type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | "orange"
// 约束组件
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
}
export default defineComponent({
  name: "XButton",
  props,
  // setup的参数： 第一个props，第二个是上下文对象 context  attrs、slots、emit、expose
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      `}>
        {slots.default ? slots.default() : "默认按钮"}
      </button>
    )
  },
})
