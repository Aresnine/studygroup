<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import httpHelper from "@/api/httpHelper";
import { useUserStore } from '@/store/user'
useUserStore().setUser(888);
console.log(useUserStore().user,'kkkkkkkkkkkk');
httpHelper.get("/api/joke", {}, (res: any) => {
	console.log("httpHelper.get", res);
});
</script>

<template>
	<!-- <router-link class="a_link" to="/">home</router-link>
	<router-view></router-view> -->
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
