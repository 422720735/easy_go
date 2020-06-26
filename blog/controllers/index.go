package controllers

import (
	"easy_go/admin/models"
	"easy_go/blog/servers"
	"easy_go/common"
	"github.com/astaxie/beego"
	"strconv"
)

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Index() {
	c.Layout = "base/layout.html"
	c.TplName = "pages/article-list.html"
	c.LayoutSections = make(map[string]string)

	c.LayoutSections["menuUl"] = "base/menu.html"

	c.LayoutSections["spin"] = "transition/Spin.html"
	c.LayoutSections["style"] = "style/indexStyle.html"
	c.LayoutSections["script"] = "script/indexScript.html"

	// svg init加载动画
	c.LayoutSections["FirstScreen"] = "style/TweenMaxCss.html"
	c.LayoutSections["Loading"] = "transition/TweenMax.html"
	c.LayoutSections["TweenMaxJs"] = "script/TweenMaxJs.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"

	menu, _ := servers.SelectArticleTypeMenuName()

	param1 := c.Ctx.Input.Param(":menu")
	param2 := c.Ctx.Input.Param(":article")
	beego.Info(param1, "menuId")
	beego.Info(param2, "articleId")

	title := c.GetString("title")
	pageStr := c.GetString("page")
	var page int
	_int, err := strconv.ParseInt(pageStr, 10, 64)
	if err != nil {
		page = 1
	}
	page = int(_int)

	var data []*models.Article
	var total int64
	var menuId int
	var articleTypeId int
	if param1 == "" && param2 == "" {
		// 查询全部
		data, total, _ = servers.SelectArticlePageList(0, 0, title, page, common.PAGE_SIZE)
	} else if param1 == "" && param2 != "" {
		// 查询 menuId
		id1, err := strconv.Atoi(param2)
		if err == nil {
			menuId = id1
		}

		data, total, _ = servers.SelectArticlePageList(menuId, 0, title, page, common.PAGE_SIZE)
	} else {
		// 查询 menuId + articleId
		id1, err := strconv.Atoi(param1)
		if err == nil {
			menuId = id1
		}

		id2, err := strconv.Atoi(param2)
		if err == nil {
			articleTypeId = id2
		}

		data, total, _ = servers.SelectArticlePageList(menuId, articleTypeId, title, page, common.PAGE_SIZE)
	}

	beego.Info(data)
	articleList := common.Paginator(page, common.PAGE_SIZE, total, data)

	c.Data["menu"] = menu
	c.Data["articleList"] = articleList
}
