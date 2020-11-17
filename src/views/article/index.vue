<template>
	<div class="article-container">

		<el-card class="filter-card">
			<div slot="header" class="clearfix">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item to="/">首页</el-breadcrumb-item>
					<el-breadcrumb-item>内容管理</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<!--  -->
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="状态">
					<el-radio-group v-model="status">
						<el-radio :label="null">全部</el-radio>
						<el-radio :label="0">草稿</el-radio>
						<el-radio :label="1">待审核</el-radio>
						<el-radio :label="2">审核通过</el-radio>
						<el-radio :label="3">审核失败</el-radio>
						<el-radio :label="4">已删除</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="频道">
					<el-select v-model="form.region" placeholder="请选择频道">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="日期">
					<el-date-picker v-model="form.date1" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期"
					 :default-time="['12:00:00']">
					</el-date-picker>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="loadArticles(1)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-card>

		<el-card class="box-card">
			<div slot="header" class="clearfix">
				根据筛选条件查询到 3432 条结果
			</div>

			<!--  -->
			<el-table :data="articles" style="width: 100%" stripe border class="list-table">
				<el-table-column prop="date" label="封面">
					<template slot-scope="scope">
						<img v-if="scope.row.cover.images[0]" class="article-cover" :src="scope.row.cover.images[0]" />
						<img v-else class="article-cover" src="./no-cover.jpg" />
					</template>
				</el-table-column>
				<el-table-column prop="title" label="标题" />
				<el-table-column label="状态">
					<template slot-scope="scope">
						<el-tag :type="articleStatus[scope.row.status].type">{{ articleStatus[scope.row.status].text }}</el-tag>
						<!-- <el-tag v-if="scope.row.status === 0 ">草稿</el-tag>
						<el-tag v-else-if="scope.row.status === 1" type="warning">待审核</el-tag>
						<el-tag v-else-if="scope.row.status === 2" type="success">审核通过</el-tag>
						<el-tag v-else-if="scope.row.status === 3" type="danger">审核失败</el-tag>
						<el-tag v-else-if="scope.row.status === 4" type="info">已删除</el-tag> -->
						
					</template>
				</el-table-column>, 
				<el-table-column prop="pubdate" label="发布时间" />
				<el-table-column prop="address" label="操作">
					<template slot-scope="scope">
						<el-button size="mini" circle type="primary" icon="el-icon-edit"></el-button>
						<el-button size="mini" type="danger" circle icon="el-icon-delete"></el-button>
					</template>
				</el-table-column>
			</el-table>


			<!--  -->
			<el-pagination 
				background 
				layout="prev, pager, next" 
				:total="totalCount"
				:page-size="pageSize"
				@current-change="onCurrentChange"
			>
			</el-pagination>
		</el-card>

	</div>
</template>

<script>
	import {
		getArticles
	} from '@/api/article'

	export default {
		name: 'ArticleIndex',
		components: {},
		props: {},
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				articles: [],
				articleStatus:[
					{ status: 0, text:'草稿' },
					{ status: 1, text:'待审核', type: 'warning' },
					{ status: 2, text:'审核通过', type: 'success' },
					{ status: 3, text:'审核失败', type: 'danger' },
					{ status: 4, text:'已删除', type: 'info' }
				],
				totalCount:0,
				pageSize:10,
				status:null
			}
		},
		computed: {},
		watch: {},
		created() {
			this.loadArticles()
		},
		mounted() {

		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			async loadArticles(page = 1) {
				const { data } = await getArticles({
					page,
					per_page:this.pageSize,
					status:this.status
				})
				console.log(data)
				this.articles = data.data.results
				this.totalCount = data.data.total_count
			},
			onCurrentChange(page){
				this.loadArticles(page)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.filter-card {
		margin-bottom: 30px;
	}

	.list-table {
		margin-bottom: 20px;
	}
	.article-cover{
		width: 80px;
		background-size: cover;
	}
</style>
