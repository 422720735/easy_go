package article

import "github.com/astaxie/beego"

type ArticleControllerType struct {
	beego.Controller
}

func (c *ArticleControllerType) Get() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/article/articleType/articleType.html"
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
