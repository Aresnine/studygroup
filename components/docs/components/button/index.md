# Button 按钮

<div style="margin-bottom:20px;" class="flex">
  <XButton class="mr-20px w-100px h-40px" color="blue">主要按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="green">绿色按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="gray">灰色按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="yellow">黄色按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="red">红色按钮</XButton>
</div>
常用操作按钮

## 基础用法

基础的函数用法

::: info
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::
::: tip
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::
::: warning
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::
::: danger
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::
::: details
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::

:::demo

```vue
<template>
  <div style="margin-bottom:20px;" class="flex">
  <XButton class="mr-20px w-100px h-40px" color="blue">主要按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="green">绿色按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="gray">灰色按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="yellow">黄色按钮</XButton>
  <XButton class="mr-20px w-100px h-40px" color="red">红色按钮</XButton>
</div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。
