package controllers

import (
	"github.com/astaxie/beego"
	// "time"
)

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "layout/login_registerLayout.html"
	c.TplName = "pages/login.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["FooterLayout"] = "layout/login_register_footer.html"

	c.LayoutSections["style"] = "style/login_register.html"

    c.LayoutSections["script"] = "script/login_register.html"
}
