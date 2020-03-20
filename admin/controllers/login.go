package controllers

import (
	"github.com/astaxie/beego"
	// "time"
)

type LoginController struct {
	beego.Controller
}

// func (c *LoginController) Get() {
// 	c.Layout = "layout/login_registerLayout.html"
// 	c.TplName = "pages/login.html"

// 	c.LayoutSections = make(map[string]string)
// 	c.LayoutSections["FooterLayout"] = "layout/login_register_footer.html"

// 	c.LayoutSections["style"] = "style/login_register.html"

// 	c.LayoutSections["script"] = "script/login_register.html"
// }
func (c *LoginController) Get() {
	c.Layout = "layout/login-registerLayout.html"
	c.TplName = "pages/login-img.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["script"] = "script/login_register.html"

	// c.LayoutSections["style"] = "style/login_img.html"

	// c.LayoutSections["script"] = "script/login_img.html"
}

func (c *LoginController) Post() {
	username := c.GetString("username")
	password := c.GetString("password")
	if username == "admin" && password == "123456" {
		c.Redirect("/workplace", 302)
	} else {
		c.Redirect("/login", 302)
	}
}
