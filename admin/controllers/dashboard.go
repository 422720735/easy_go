// 仪表盘代码
package controllers

import (
	"easy_go/admin/common"
)

type DashBoardControllers struct {
	common.BaseController
}

// 首页跳转到欢迎页面
func (c *DashBoardControllers) Get() {
	isLogin:=c.GetSession("userName")
	if isLogin == nil || isLogin=="" {
		// c.Redirect("/login", 302)
		// aes解密拿到username 数据库比对。
		// 走方法获取cookies 解密到数据查看如果有这条数据就登陆。
	}

	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/dashboard/welcome.html"
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

	c.LayoutSections["Style"] = "style/welcome.html"
	c.LayoutSections["Script"] = "script/welcome.html"

}

func (c *DashBoardControllers) HandleAnalysis() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/dashboard/analysis.html"
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

func (c *DashBoardControllers) HandleWorkplace() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/dashboard/workplace.html"
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
