<template>
	<div class="login-container">

		<el-form class="login-form" ref="login-form" :model="user" :rules="formRules">
			<div class="login-head">
				<img src="./news.png" /><span>小猪热点头条</span>
			</div>
			<el-form-item prop="mobile">
				<el-input v-model="user.mobile" placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item prop="code">
				<el-input v-model="user.code" placeholder="请输入验证码" />
			</el-form-item>
			<el-form-item prop="agree">
				<el-checkbox v-model="user.agree"></el-checkbox>
				我已阅读并同意用户协议和隐私条款
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn" type="primary" @click="onLogin" :loading="loginLoading">登录</el-button>
			</el-form-item>

		</el-form>
	</div>
</template>

<script>
	import {
		login
	} from '@/api/user'

	export default {
		name: 'LoginIndex',
		components: {},
		props: {},
		data() {
			return {
				user: {
					mobile: '18365443062', //手机号
					code: '246810', //验证码
					agree: false //阅读验证
				},
				loginLoading: false, //登录的loading状态
				formRules: { //表单验证规则配置
					mobile: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'change'
						},
						{
							pattern: /^1[3|5|7|8|9]\d{9}$/,
							message: '请输入正确的手机号码格式',
							trigger: 'change'
						}
					],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: 'change'
						},
						{
							pattern: /^\d{6}$/,
							message: '请输入正确的验证码格式',
							trigger: 'change'
						}
					],
					agree: [{
							validator: (rule, value, callback) => {
								if (value) {
									callback()
								} else {
									callback(new Error('请勾选用户协议'))
								}
							},
							trigger: 'change'
						},

					]
				}
			}
		},
		computed: {},
		watch: {},
		created() {

		},
		mounted() {

		},
		methods: {
			onLogin() {
				this.$refs['login-form'].validate(async valid => {
					if (!valid) {
						return
					}
					try {
						this.loginLoading = true
						const data = await login(this.user)
						// console.log(data)
						this.$message({
							message: '恭喜你,登录成功!',
							type: 'success'
						})
						this.loginLoading = false
						window.localStorage.setItem('user', JSON.stringify(data.data.data))
						this.$router.push('/')
					} catch (err) {
						console.log('登录失败', err)
						this.$message.error('登录失败!')
						this.loginLoading = false
					}
				})
			},

		}
	}
</script>

<style scoped="scoped" lang="less">
	.login-container {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url("./login_bg.jpg") no-repeat;
		background-size: cover;

		.login-form {
			background-color: orange;
			padding: 20px 50px 20px 50px;
			min-width: 300px;

			.login-head {
				width: 300px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 20px;

			}

			.login-head img {
				width: 50px;
				margin-right: 20px;
			}

			.login-head span {
				font-size: 26px;
				color: blueviolet;
				font-weight: 900;
			}

			.login-btn {
				width: 100%;
			}
		}
	}
</style>
