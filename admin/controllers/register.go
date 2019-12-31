package controllers

import (
	"time"

	"github.com/astaxie/beego"
)

type RegisterController struct {
	beego.Controller
}

func (c *RegisterController) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "register.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["style"] = "style/login_register.html"

	// 	c.LayoutSections["script"] = "script/login_register.html"

	c.Data["Year"] = time.Now().Year()
}
