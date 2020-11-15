// 请求模块 基于axios
import axios from 'axios'

// 创建一个axios实例
const request = axios.create({
	baseURL:'http://ttapi.research.itcast.cn/'//请求的基础路径
})

// Add a request interceptor
//添加一个请求拦截器
request.interceptors.request.use(function (config) {
	//任何所有请求都会经过这里
	// console.log(config)
	const user = JSON.parse(window.localStorage.getItem('user'))
	if(user){
		config.headers.Authorization = `Bearer ${user.token}`
	}
    return config
  }, function (error) {
	// 请求失败会经过这里
    return Promise.reject(error)
  })

//导出
export default request