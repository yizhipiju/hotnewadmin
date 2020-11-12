<template>
	<el-menu default-active="/" background-color="#002033"
	 text-color="#fff" active-text-color="#ffd04b" router class="nav-menu">
		<div class="aside-img">
			<img src="./news.png" class="aside-title" />
			<span>小猪管理</span>
		</div>
		<el-menu-item index="/">
			<i class="el-icon-menu"></i>
			<span slot="title">首页</span>
		</el-menu-item>
		<el-menu-item index="/article">
			<i class="el-icon-document"></i>
			<span slot="title">内容管理</span>
		</el-menu-item>
		<el-menu-item index="/image">
			<i class="iconfont iconimage"></i>
			<span slot="title">素材管理</span>
		</el-menu-item>
		<el-menu-item index="/publish">
			<i class="iconfont iconpublish"></i>
			<span slot="title">发布文章</span>
		</el-menu-item>
		<el-menu-item index="/comment">
			<i class="iconfont iconFontAwesomecommentaltsolid"></i>
			<span slot="title">评论管理</span>
		</el-menu-item>
		<el-menu-item index="/fans">
			<i class="iconfont iconmyfans"></i>
			<span slot="title">粉丝管理</span>
		</el-menu-item>
		<el-menu-item index="/setting">
			<i class="iconfont iconxingzhuang"></i>
			<span slot="title">个人设置</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		name: 'AppAside',
		components: {},
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
		methods: {
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.aside-img{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px 20px 20px 0;
		span{
			color: orangered;
			font-size: 22px;
			font-weight: bold;
		}
	}
	.aside-title{
		width: 60px;
		height: 60px;
		margin-right: 10px ;
	}
	.nav-menu{
		.iconfont{
			margin-right: 5px;
			padding-left: 3px;
		}
	}
</style>
