package controllers

import "github.com/astaxie/beego"

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Index() {
	c.TplName = "index.html"
}
