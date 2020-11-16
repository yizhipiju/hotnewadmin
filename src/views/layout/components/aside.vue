<template>
	<el-menu default-active="/" background-color="#002033"  :collapse="isCollapse" 
	 text-color="#fff" active-text-color="#ffd04b" router class="nav-menu">
		<div class="aside-img">
			<img src="./news.png" class="aside-title" />
			<span>小猪管理</span>
		</div>
		<el-menu-item class="title-wrap" index="/">
			<i class="el-icon-menu"></i>
			<span slot="title">首页</span>
		</el-menu-item>
		<el-menu-item class="title-wrap" index="/article">
			<i class="el-icon-document"></i>
			<span slot="title">内容管理</span>
		</el-menu-item>
		<el-menu-item class="title-wrap" index="/image">
			<i class="iconfont iconimage"></i>
			<span slot="title">素材管理</span>
		</el-menu-item>
		<el-menu-item class="title-wrap" index="/publish">
			<i class="iconfont iconpublish"></i>
			<span slot="title">发布文章</span>
		</el-menu-item>
		<el-menu-item class="title-wrap" index="/comment">
			<i class="iconfont iconFontAwesomecommentaltsolid"></i>
			<span slot="title">评论管理</span>
		</el-menu-item>
		<el-menu-item class="title-wrap" index="/fans">
			<i class="iconfont iconmyfans"></i>
			<span slot="title">粉丝管理</span>
		</el-menu-item>
		<el-menu-item class="title-wrap" index="/setting">
			<i class="iconfont iconxingzhuang"></i>
			<span slot="title">个人设置</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		name: 'AppAside',
		components: {},
		props: ['is-collapse'],
		data() {
			return {
			}
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
	.aside-img {
		display: flex;
		align-items: center;
		// justify-content: center;
		padding: 5px;

		span {
			color: orangered;
			font-size: 24px;
			font-weight: bold;
			margin-right: 5px;
		}
	}

	.aside-title {
		width: 60px;
		height: 60px;
		margin-right: 10px;
	}

	.nav-menu {
		padding: 8px;

		.iconfont {
			margin-right: 5px;
			padding-left: 3px;
		}
	}

	.title-wrap {
		font-size: 20px;
		margin-top: 20px;
	}
</style>
