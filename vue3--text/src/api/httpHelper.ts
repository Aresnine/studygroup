import axios from "axios";

const axiosInit = axios.create();
const baseURL = "https://autumnfish.cn"; //后台路径（这是一个开源的段子接口）
const httpHelper: any = {};
// 封装get方法（post类似）
httpHelper.get = (apiUrl: any, params: any, succCallback: any, errCallback: any) => {
	const headers = {
		"Content-Type": "application/x-www-form-urlencoded"
	};
	const httpUrl = baseURL + apiUrl;
	axiosInit.get(httpUrl, params).then(
		res => {
			if (succCallback) {
				succCallback(res);
			} else {
				console.log(res);
			}
		},
		err => {
			// alert(httpUrl)
			if (errCallback) {
				errCallback(err);
			}
		}
	);
};

export default httpHelper;
