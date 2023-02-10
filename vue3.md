# vue3



#### 1.性能的提升

- 打包大小减少了41%

- 初次渲染快55%，更新渲染快133%


- 内存减少%54


#### 2.源码的升级

- 使用Proxy代替defineProperty实现响应式


- 重写虚拟DOM的实现和Tree-Shaking


#### 3.创建Vue3.0工程

##### 3.1.使用vue-cli创建

**查看vue-cli版本，确保vue-cli版本在4.5.0以上**

- vue create vue-name （选择vue3项目）


##### 3.2.使用vite（新一代前端构建工具）

- **优势**：开发环境中，无需打包操作，可快速的冷启动

  ​			轻量快速的热重载（HMR）

  ​			真正的按需编译，不等整个应用编译完成

- **传统构建与vite构建对比图**

<img src="https://pic3.zhimg.com/80/v2-9affcc8711ebfcd3d3cc7269c57ced52_720w.webp" alt="img" style="zoom: 33%;" />

<img src="https://pic1.zhimg.com/80/v2-916a6df6ac5972e0594a1be4c5fff31c_720w.webp" alt="img" style="zoom: 80%;" />

- **安装vite** ：npm install  -g create-vite-app
- **创建项目**：create-vite-app vue3__vite
- **进入目录后**： npm i
- **运行**：npm run dev

#### 4.vue3中的setup

**理解**：vue3.0中的一个新配置，值为一个函数。

​           setup是所有Composition API（组合API）”表演的舞台“。

​          组件中所用到的：数据、方法等等，均需配置在setup中。

**setup函数的两种返回值**：

- 若返回的是一个对象，则对象中的属性、方法，在模板中均可以直接使用。
- 若返回一个渲染函数，则可以自定义渲染内容。

**注意点**：尽量不要与vue2.x配置混用

- vue2.x配置（data、methos、computed....）中可以访问到setup中的属性、方法。
- 但在setup中不能访问到vue2.x配置（data、methos、computed...）。
- 如果有重名，setup优先。
- setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不见return对象中的属性。（后期也可以返回一个promise实例，但需要suspense和异步组件的配合）
- setup执行的时机：在beforeCreate之前执行一次，所以this是undefined。
- **setup参数**：

​			**props**：值为对象，包含数组外部传递过来，且组件内部声明接收了的属性。

​			**context**：上下文对象

​					attrs：值为对象，包含组件外部传递过来，但没有在props配置中声明的属性，相当于this.$attrs。

​					slots：收到的插槽内容，相当于this.$slots。

​					emit：自定义事件函数，相当于this.$emit

#### **5.ref函数**

**作用**：定义一个响应式的数据

**语法**：

- const xxx = ref（initvalue）
- 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
- js中操作数据：xxx.value
- 模板中读取数据，不需要.value，直接：<span>{{xxx}}</span>

**备注**：

- 接收的数据可以是：基础类型、也可以是对象类型。
- 基本类型的数据：响应式依然是靠object.defineproperty（）的get与set完成。
- 对象类型的数据：内部用到的是vue3中的新函数reactive函数

#### **6.reactive函数**

**作用**：定义一个对象类型的响应式数据（基础类型用ref)

##### 语法：

- ##### const代理对象 = reactive（源对象）接收一个对象（或数组），返回一个代理对象（proxy的实例对象，简称proxy对象）

- ###### reactive定义的响应式数据是“深层次的”。

- 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据记性操作

**reactive对比ref：**

**从定义数据角度对比：**

- ref用来定义：基本数据类型。（ref也可以用来定义对象或数组数据类型，它内部会自动铜锅reactive转为代理对象。
- reactive用来定义：对象（或数组）数据类型。

**从原理角度对比：**

- ref通过object.defineproperty（）的get与set来实现响应式（数据劫持）。
- reactive通过proxy来实现响应式（数据劫持）

**从使用角度对比：**

- ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value
- reactive定义的数据：操作数据读取数据都不需要.value。

#### 7.Vue3.0中的响应式原理

##### **7.1.vue2.0的响应式**

**实现原理：**

- 对象类型：通过object。defineproperty（）对属性的读取get、修改set进行拦截（数据劫持）
- 数组类型：通过重写更新数组$set等一系列方法来实现拦截（对数组的变更方法进行了包裹）

**存在问题**：

- 新增属性、删除属性时界面不会更新。
- 直接捅咕下标修改数组，界面不会自动更新。

**7.2.Vue3.0的响应式**

**实现原理：**

- 通过Proxy（代理）：拦截对象中任意属性的变化，包括属性值的读、改、新增、删除。
- 通过refect（反射）：对源对象的属性进行操作。



