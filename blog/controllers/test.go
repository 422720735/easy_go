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

func (c *TestControllers) Get2() {
	list, err:= servers.SelectFilterLimit()
	if err != nil {
		c.Error(err.Error())
	} else {
		c.Success(list)
	}
}