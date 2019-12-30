package controllers

import (
	"github.com/astaxie/beego"
	"time"
)

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "user.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["style"] = "style/user.html"


	c.LayoutSections["script"] = "script/user.html"

	c.Data["Year"] = time.Now().Year()
}
