package controllers

import "github.com/astaxie/beego"

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "base/loginLayout.html"
	c.TplName = "login.html"
	c.LayoutSections = make(map[string]string)
	// 登录页会用到文章页的js保留
	c.LayoutSections["ArticleDetails"] = "style/ArticleDetailsCss.html"
	// 登录页js
	c.LayoutSections["LoginJs"] = "script/LoginJs.html"
	// 登录页的css
	c.LayoutSections["LoginStyle"] = "style/loginCss.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	// 加载更多动画
	c.LayoutSections["initialize"] = "transition/initialize.html"
}
