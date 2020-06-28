package controllers

import (
	"easy_go/blog/servers"
	"github.com/astaxie/beego"
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


	param1 := c.Ctx.Input.Param(":menu_id")
	param2 := c.Ctx.Input.Param(":category_id")
	// 获取导航id,跟articleTypeId
	menuId, articleTypeId := getHomeParams(param1, param2)
	beego.Info(menuId, articleTypeId)

	servers.SelectArticleDetails(menuId, articleTypeId)

	menu, _ := servers.SelectArticleTypeMenuName()
	c.Data["menu"] = menu
}
