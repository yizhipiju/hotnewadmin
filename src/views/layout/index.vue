<template>
	<el-container class="layout-container">
	  <el-aside class="aside" width="200px">
		  <app-aside class="aside-menu" />
	  </el-aside>
	  <el-container>
	    <el-header class="header">
			<i class="el-icon-s-fold"></i>
		</el-header>
	    <el-main class="main">
			<router-view />
		</el-main>
	  </el-container>
	</el-container>
	
	
</template>

<script>
	import AppAside from './components/aside'
	
	export default {
		name: 'LayoutIndex',
		components: {
			AppAside
		},
		props: {},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {

		},
		mounted() {

		},
		methods: {}
	}
</script>

<style scoped="scoped" lang="less">
	.layout-container{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.aside{
		background-color: #6A737D;
		.aside-menu{
			height: 100%;
		}
	}
	.header{
		background-color: #999999;
	}
	.main{
		background-color: #CCCCCC;
	}
</style>
