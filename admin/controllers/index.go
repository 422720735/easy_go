package controllers

import "github.com/astaxie/beego"

type IndexControllers struct {
	beego.Controller
}

func (c *IndexControllers) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "index.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections[""] = "style/login_register.html"
	c.LayoutSections["style"] = "style/main.html"

	c.LayoutSections["script"] = "script/main.html"
}
