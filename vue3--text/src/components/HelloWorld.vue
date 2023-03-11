<script setup lang="ts">
// import { ref } from "vue";

// defineProps<{ msg: string }>();
// function commit(){
// 	alert('达咩')
// }
// const count = ref(0);
import { reactive, toRefs } from 'vue';
const activeNames = reactive([1, 2]);
const	title1= '标题1';
const	title2= '标题2';
const	title3= '标题3';


</script>

<template>
	<div>
		<!-- <h1>{{ msg }}</h1> -->
		<!-- <nut-button @click="commit">5555</nut-button> -->
		<nut-collapse v-model="activeNames">
			<nut-collapse-item :name="1">
				<template v-slot:title>
					{{title1}}
				</template>
				NutUI是一套拥有京东风格的轻量级的 Vue 组件库
			</nut-collapse-item>
			<nut-collapse-item :title="title2" :name="2">
				在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
			</nut-collapse-item>
			<nut-collapse-item :title="title3" :name="3" disabled>
			</nut-collapse-item>
		</nut-collapse>
		<nut-noticebar text="华为畅享9新品即将上市" :scrollable="true" ></nut-noticebar>

<nut-noticebar
	text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
	:scrollable="false"></nut-noticebar>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
		<!-- <div class="card">
			<button type="button" @click="count++">count is {{ count }}</button>
			<p>
				Edit
				<code>components/HelloWorld.vue</code> to test HMR
			</p>
		</div>
		<p>
			Check out
			<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
			official Vue + Vite starter
		</p>
		<p>
			Install
			<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
			in your IDE for a better DX
		</p>
		<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888888;
}
</style>
