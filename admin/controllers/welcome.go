package controllers

import (
	"github.com/astaxie/beego"
	// "time"
)

type WelcomeController struct {
	beego.Controller
}

func (c *WelcomeController) Get() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/welcome.html"
	c.LayoutSections = make(map[string]string)
	// menu
	c.LayoutSections["LeftMenu"] = "layout/leftSideMenuLayout.html"
	// header
	c.LayoutSections["HeaderLayout"] = "layout/headerLayout.html"
	// footer
	c.LayoutSections["FooterLayout"] = "layout/footerLayout.html"
	// css
	c.LayoutSections["BaseStyle"] = "style/baseStyle.html"
	// js
	c.LayoutSections["BaseScript"] = "script/baseScript.html"
}
