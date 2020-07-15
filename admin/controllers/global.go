package controllers

import (
	"easy_go/admin/servers"
)

var ArticleCount int

/*
	我们的文章量设置为-1，进入相关页面才会去查询文章量，
	并且用户操作了文章的上下架、删除、编辑、新增等把这个值初始为-1，
	下一次进入相关页面才去查询文章总数量。
*/
func AdminInit() {
	ArticleCount = -1
	SelectCount()
}

func SelectCount() int {
	if ArticleCount < 0 {
		count, _ := servers.SelectArticleCount()
		ArticleCount = count
	}

	return ArticleCount
}
