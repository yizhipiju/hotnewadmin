<template>
	<div class="home-container">
		<img src="./shouye.jpg" />
	</div>
</template>

<script>
	export default{
		name:'HomeIndex',
		components:{},
		props:{},
		data(){
			return{}
		},
		computed:{},
		watch:{},
		created() {
			
		},
		mounted() {
			
		},
		methods:{}
	}
</script>

<style scoped="scoped" lang="less">
	.home-container{
		position: fixed;
		top: 60px;
		margin-left: -20px;
		img{
			width: 100%;
			// background-size: cover;
		}
	}
</style>
