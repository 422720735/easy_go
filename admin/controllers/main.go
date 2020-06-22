package controllers

import (
	"easy_go/admin/common"
)

type MainController struct {
	common.BaseController
}

func (c *MainController) Get() {
	c.Layout = "layout/mainLayout.html"
	c.TplName = "pages/menuSetting.html"
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
	// session := c.GetSession("blog")
	// if session == nil {
	// 	c.Redirect("/login", 302)
	// } else {

	// }
}
