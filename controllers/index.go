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
	c.LayoutSections["Loading"] = "transition/TweenMax.html"

	c.LayoutSections["Header"] = "style/article_ListCss.html"
	c.LayoutSections["FirstScreen"] = "style/TweenMaxCss.html"

	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"

    c.LayoutSections["initialize"] = "transition/initialize.html"

	// svg init加载动画
	c.LayoutSections["TweenMaxJs"] = "script/TweenMaxJs.html"

	// 分页器
	c.LayoutSections["pagingJs"] = "script/pagingJs.html"
}
