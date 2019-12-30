package controllers

import (
	"github.com/astaxie/beego"
)

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "login.html"
}
