package controllers

import "github.com/astaxie/beego"

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Index() {
	c.Layout = "layout.html"
	this.TplName = "layout.html"
	c.LayoutSections = make(map[string]string)
    c.LayoutSections["articleList"] = "article-list.html"
// 	c.LayoutPageList = make(map[string]string)
// 	c.LayoutPageList["articleList"] = "article-list.html"
}
