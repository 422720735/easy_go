package controllers

import (
	"easy_go/blog/servers"
	"easy_go/common"
)

type TestControllers struct {
	common.BaseController
}

func (c *TestControllers) Get() {
	list, err:= servers.SelectArticleTypeMenuName()
	if err != nil {
		c.Success(err.Error())
	} else {
		c.Success(list)
	}
}

//func (c *TestControllers) Get2() {
//	data, total, _ := servers.SelectArticlePageList(0, 0, "", 1, common.PAGE_SIZE)
//	beego.Info(data, "1")
//	beego.Info(total, "2")
//	articleList := common.Paginator(1, common.PAGE_SIZE, total, data)
//	c.Success(articleList)
//}