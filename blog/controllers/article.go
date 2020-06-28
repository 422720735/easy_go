package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"github.com/astaxie/beego"
	"strconv"
)

type ArticleController struct {
	beego.Controller
}

func (c *ArticleController) Get() {
	c.Layout = "base/articleLayout.html"
	c.TplName = "pages/articleDetails.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["menuUl"] = "base/menu.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	c.LayoutSections["style"] = "style/detailsStyle.html"
	c.LayoutSections["script"] = "script/detailsScript.html"

	param := c.Ctx.Input.Param(":id")
	var id int
	id1, err := strconv.Atoi(param)
	if err == nil {
		id = id1
	} else {
		id = 0
	}

	menu, _ := servers.SelectArticleTypeMenuName()

	details, err := servers.SelectArticleDetails(id)
	if err != nil {
		logger.Error("请求文章详情参数不正确或者没有数据可查询", err.Error())
		c.Redirect("/", 302)
		return
	}
	c.Data["menu"] = menu
	c.Data["details"] = details
}
