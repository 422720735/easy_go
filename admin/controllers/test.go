package controllers

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
)

type TestControllers struct {
	common.BaseController
}

func (c *TestControllers) Get() {
	//data, total, _ := servers.SelectArticlePageList(1, common.PAGE_SIZE)
	//
	//articleList := common.Paginator(1, common.PAGE_SIZE, total, data)
	res, count, _ := servers.SelectArticleIsTopId()
	data := map[string]interface{}{
		"total": count,
		"data":  res.TopId,
	}
	c.Success(data)
}
