package controllers

import "github.com/astaxie/beego"

type ArticleController struct {
	beego.Controller
}

func (c *ArticleController) Get() {
	c.Layout = "base/articleLayout.html"
	c.TplName = "articleDetails.html"
	c.LayoutSections = make(map[string]string)

	c.LayoutSections["Loading"] = "transition/TweenMax.html"
	// h1
	c.LayoutSections["ArticelH1"] = "articleDetailsH1.html"

	c.LayoutSections["Header"] = "style/article_ListCss.html"
	c.LayoutSections["FirstScreen"] = "style/TweenMaxCss.html"
	c.LayoutSections["ArticleDetails"] = "style/ArticleDetailsCss.html"

	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"

	c.LayoutSections["initialize"] = "transition/initialize.html"

	// svg init加载动画
	c.LayoutSections["TweenMaxJs"] = "script/TweenMaxJs.html"

	// 分页器
	c.LayoutSections["pagingJs"] = "script/pagingJs.html"
}
