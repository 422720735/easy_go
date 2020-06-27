package controllers

import (
	"easy_go/admin/servers"
	"easy_go/common"
)

type TestControllers struct {
	common.BaseController
}

func (c *TestControllers) Get() {
	/*
	data, total, _ := servers.SelectArticlePageList("", "[]", 1, common.PAGE_SIZE)
	articleList := common.Paginator(1, common.PAGE_SIZE, total, data)
	res, _, _ := servers.SelectArticleIsTopId()


	//res, err := servers.SelectArticleDetails(1)
	//if err != nil {
	//	return
	//}
	//

	c.Success(map[string]interface{}{
		"o": articleList,
		"b": res,
	})
	*/
	//data, total, _ := servers.SelectArticleTypeList("", 1, common.PAGE_SIZE)
	//articleList := common.Paginator(1, common.PAGE_SIZE, total, data)
	articleTypeList, _ := servers.SelectArticleTypeMenuName(false)
	c.Success(articleTypeList)
}
