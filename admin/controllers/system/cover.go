package system

import "easy_go/admin/common"

type CoverControllers struct {
	common.BaseController
}

func (c *CoverControllers) Get() {
	c.Layout = "layout/mainLayout.html"
	c.TplName = "pages/system/cover.html"
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

	c.LayoutSections["Style"] = "style/cover.html"
	c.LayoutSections["Script"] = "script/cover.html"
}
