package article

import "github.com/astaxie/beego"

type ArticleDetails struct {
	beego.Controller
}

// add + update
func (c *ArticleDetails) AddOfUpdate() {
	title := c.GetString("title")
	if title == "" {
		title = "新增"
	}
	id := c.GetString("id")
	c.Layout = "layout/mainLayout.html"
	c.TplName = "pages/article/articleDetails/articleDetails.html"
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

	c.Data["title"] = title
	c.Data["id"] = id
}
