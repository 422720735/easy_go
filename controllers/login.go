package controllers

import "github.com/astaxie/beego"

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "base/loginLayout.html"
	c.TplName = "login.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["ArticleDetails"] = "style/ArticleDetailsCss.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	// 加载更多动画
	c.LayoutSections["initialize"] = "transition/initialize.html"
}
