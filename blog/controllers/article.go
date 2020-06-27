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

	menu, _ := servers.SelectArticleTypeMenuName()
	c.Data["menu"] = menu
}
