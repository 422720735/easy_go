package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "login.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["style"] = "style/log.html"
}
