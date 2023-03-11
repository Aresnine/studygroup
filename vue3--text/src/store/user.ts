import { defineStore } from "pinia";

// export const useUserStore = defineStore({
// 	id: "user", // id必填，且需要唯一
// 	state: () => {
// 		return {
// 			name: "张三"
// 		};
// 	},
// 	actions: {
// 		//   updateName(name) {
// 		//    this.name = name
// 		//    }
// 	}
// });
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 用户信息
    const user = ref<any>({name:555})
    // 设置用户，登录后使用
    const setUser = (u:any) => {
      user.value = u
    }
    // 清空用户，退出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true
  }
)