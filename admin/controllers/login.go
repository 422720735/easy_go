package controllers

import (
	"github.com/astaxie/beego"
	// "time"
)

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "login.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["style"] = "style/login_register.html"

    c.LayoutSections["script"] = "script/login_register.html"
}
