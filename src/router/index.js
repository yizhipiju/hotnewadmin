import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '', //path为空，默认为子路由
				name: 'home',
				component: Home
			},
		]
	},

]

const router = new VueRouter({
	routes
})

//路由导航守卫，说白了所有页面的导航都会经过这里
// to:要去的路由信息
// from:来自哪里的路由信息
// next:放行方法
router.beforeEach((to,from,next) => {
	const user = JSON.parse(window.localStorage.getItem('user'))
	//校验非登陆页面的登录状态
	if(to.path !== '/login'){
		if(user){
			next()
		}else{
			next('/login')
		}
	}else{
		//登录页面,正常允许通过
		next()
	}
})


export default router
