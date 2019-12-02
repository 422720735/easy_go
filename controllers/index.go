package controllers

import "github.com/astaxie/beego"

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Index() {
	c.Layout = "base/layout.html"
	c.TplName = "article-list.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["Welcome"] = "base/welcome.html"

	c.LayoutSections["Header"] = "style/article_List.html"
}
