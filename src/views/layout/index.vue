<template>
	<el-container class="layout-container">
		<el-aside class="aside" width="auto">
			<app-aside :is-collapse="isCollapse" class="aside-menu" />
		</el-aside>
		<el-container>
			<el-header class="header">
				<div class="header-avater">
					<i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="isCollapse = !isCollapse"></i>
					<span>小猪热点头条</span>
				</div>
				<el-dropdown>
					<div class="avatar-wrap">
						<img class="avatar" :src="user.photo" />
						<span>{{ user.name }}</span>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</div>
					<!-- <span >
			    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			  </span> -->
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item class="setting">个人设置</el-dropdown-item>
						<el-dropdown-item class="setting" @click.native="onLogout">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>
			<el-main class="main">
				<router-view />
			</el-main>
		</el-container>
	</el-container>


</template>

<script>
	import AppAside from './components/aside'
	import {
		getUserProfile
	} from '@/api/user'

	export default {
		name: 'LayoutIndex',
		components: {
			AppAside
		},
		props: {

		},
		data() {
			return {
				user: {}, //用户资料
				isCollapse: false
			}
		},
		computed: {},
		watch: {},
		created() {
			this.loadUserProfile()
		},
		mounted() {
			
		},
		methods: {
			async loadUserProfile() {
				const data = await getUserProfile()
				this.user = data.data.data
			},
			onLogout() {
				this.$confirm('确认退出吗?', '退出提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					window.localStorage.removeItem('user')
					this.$router.push('/login')
				}).catch(() => {
					// this.$message({
					// 	type: 'info',
					// 	message: '已取消删除'
					// })
				})
				
			}

		}
	}
</script>

<style scoped="scoped" lang="less">
	.layout-container {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.aside {
		background-color: #6A737D;
		.aside-menu {
			height: 100%;
		}
	}

	.header {
		// background-color: #999999;
		font-size: 20px;
		border-bottom: 1px solid #CCCCCC;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: space-between;

		.header-avater {
			display: flex;
			font-weight: bold;
			color: #6B8E23;

			.el-icon-s-fold {
				font-size: 30px;
			}

			.el-icon-s-unfold {
				font-size: 30px;
			}
		}

	}

	.main {
		background-color: #CCCCCC;
	}

	.avatar-wrap {
		display: flex;
		align-items: center;
		font-size: 20px;
		color: black;
		font-weight: bold;

		.avatar {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-right: 10px;
		}
	}

	.setting {
		font-size: 18px;
	}
</style>
