package controllers

import "github.com/astaxie/beego"

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "base/loginLayout.html"
	c.TplName = "pages/login.html"
	c.LayoutSections = make(map[string]string)

	// 登录页的css
	c.LayoutSections["Style"] = "style/loginStyle.html"

	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	// 登录页js
	c.LayoutSections["Script"] = "script/loginScript.html"
}
