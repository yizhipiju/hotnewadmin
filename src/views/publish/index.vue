<template>
	<div class="publish-container">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumbcantaniner">
		    	<el-breadcrumb-item to="/">首页</el-breadcrumb-item>
		    	<el-breadcrumb-item>发布文章</el-breadcrumb-item>
		    </el-breadcrumb>
		  </div>
		  <!--  -->
		  <el-form ref="form" :model="article" label-width="80px">
		    <el-form-item label="标题">
		      <el-input v-model="article.title"></el-input>
		    </el-form-item>
			<el-form-item label="内容">
			  <el-input type="textarea" v-model="article.content"></el-input>
			</el-form-item>
		    <el-form-item label="封面">
		      <el-radio-group v-model="article.cover.type">
		        <el-radio :label="1">单图</el-radio>
		        <el-radio :label="3">三图</el-radio>
		        <el-radio :label="0">无图</el-radio>
		        <el-radio :label="-1">自动</el-radio>
		      </el-radio-group>
		    </el-form-item>
		    <el-form-item label="频道">
		      <el-select v-model="article.channel_id" placeholder="请选择频道">
		        <el-option v-for="(channel,index) in channels" :key="index" 
				:label="channel.name" :value="channel.id"></el-option>
		      </el-select>
		    </el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="onPublish">发布</el-button>
			    <el-button>存入草稿</el-button>
			  </el-form-item>
		  </el-form>
		  <!--  -->
		</el-card>
	</div>
</template>

<script>
	import { getArticleChannels,addArticle } from '@/api/article'
	
	export default{
		name:'PublishIndex',
		components:{
			
		},
		props:{},
		data(){
			return{
				article:{
					title:'',//文章标题
					content:'',//文章内容
					cover:{//文章封面
						type:0,//封面类型  -1:自动 0:无图  1:一张 3:三张
						images:[]//封面图片地址
					},
					channel_id:null
				},
				channels:[]//文章频道列表
			}
		},
		computed:{},
		watch:{},
		created() {
			this.loadChannels()
		},
		mounted() {
			
		},
		methods:{
			// async onPublish() {
			// 	const { data } = await addArticle(this.article)
			// 	console.log(data)
			// },
			onPublish(){
				addArticle(this.article).then(res=>{
					console.log(res)
				})
			},
			async loadChannels(){
				const { data } =  await getArticleChannels()
				this.channels = data.data.channels
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	.form-oneImage{
		width: 130px;
		height: 130px;
		border: 1px solid;
	}
	.form-threeImage{
		width: 130px;
		height: 130px;
		border: 1px solid;
	}
</style>
