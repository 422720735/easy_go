package controllers

import (
	"easy_go/blog/servers"
	"easy_go/common"
	"strconv"
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
	param1 := c.Ctx.Input.Param(":menu_id")
	param2 := c.Ctx.Input.Param(":category_id")
	title := c.GetString("title")
	pageStr := c.GetString("page")

	var page int
	_int, err := strconv.ParseInt(pageStr, 10, 64)
	if err != nil {
		page = 1
	}
	page = int(_int)


	menuId, articleTypeId:=getParams(param1, param2)

	list, total, err:= servers.SelectArticleFilterLimit(menuId, articleTypeId, title, page, common.PAGE_SIZE)
	if err != nil {
		c.Error(err.Error())
	} else {
		var d = map[string]interface{}{
			"data": list,
			"total": total,
		}
		c.Success(d)
	}
}

func getParams(param1, param2 string) (int, int) {
	if param1 == "" && param2 == "" {
		// 查询全部
		return 0, 0
	} else if param1 == "" && param2 != "" {
		id1, err := strconv.Atoi(param2)
		if err == nil {
			return id1, 0
		}
	} else if param1 != "" && param2 != "" {
		var a int
		var b int
		id1, err := strconv.Atoi(param1)
		if err == nil {
			a = id1
		}

		id2, err := strconv.Atoi(param2)
		if err == nil {
			b = id2
		}
		return a, b
	}
	return 0, 0
}