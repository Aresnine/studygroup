interface Foo {
  name: string
  age: number
}

interface Bar {
  name: string
  job: string
}

// 目标是为了对Foo和Bar进行类型比较

// 方案一
/* let a: Foo = {
  name: "张三",
  age: 18,
}

let b: Bar = {
  name: "zhangsan",
  job: "fe",
}

a = b
 */

// 方案二
/* declare let a: Foo
declare let b: Bar
a = b */
