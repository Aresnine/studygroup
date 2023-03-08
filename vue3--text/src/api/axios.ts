//axios.js
import axios from "axios";

// 1.创建axios实例
const axiosInit = axios.create({
	// 设置超时时间
	timeout: 2000
});
// 2.请求拦截器
axiosInit.interceptors.request.use(
	config => {
		//在发送之前做点什么
		config.headers = config.headers || {}; // 没有数据的话就设置为空设置为数据
		if (localStorage.getItem("token")) {
			//先确保登录
			config.headers.token = localStorage.getItem("token") || "";
		}
		return config; //必须返回出去，不然请求发不出去
	},
	error => {
		//对请求错误做点什么
		return Promise.reject(error);
	}
);

// 3.相应拦截器
//响应拦截：后端返回来的结果
axiosInit.interceptors.response.use(
	res => {
		const code: number = res.data.code; //code是后端的状态码
		if (code !== 200) {
			//请求失败（包括token失效，302，404...根据和后端约定好的状态码做出不同的处理）
			return Promise.reject(res);
		} else {
			//请求成功
			console.log(res, "成功----");
			return Promise.resolve(res.data);
		}
	},
	err => {
		console.log(err, "错误信息的处理"); //错误信息的处理
		//处理错误响应
		return Promise.reject(err);
	}
);

// 4.导出
export default () => axiosInit;
