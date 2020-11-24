/**
 * 文章请求相关模块
 * 
 * 
 */
import request from '@/utils/request'


// 获取文章列表
export const getArticles = params => {
	return request({
		method:'GET',
		url:'/mp/v1_0/articles',
		params
	})
}

// 获取文章频道数据
export const getArticleChannels = () => {
	return request({
		method:'GET',
		url:'/mp/v1_0/channels'
	})
}

// 删除文章
export const deleteArticle = articleId => {
	return request({
		method:'DELETE',
		url:`/mp/v1_0/articles/${articleId}`
	})
}



// 新建文章
export const addArticle = (data,draft = false) => {
	return request({
		method:'POST',
		url:'/mp/v1_0/articles',
		params:{
			draft //是否存为草稿
		},
		data
	})
}