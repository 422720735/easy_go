package controllers

import "github.com/astaxie/beego"

type ArticleController struct {
	beego.Controller
}

func (c *ArticleController) Get() {
	c.Layout = "base/articleLayout.html"
	c.TplName = "articleDetails.html"
	c.LayoutSections = make(map[string]string)
    // svg init加载动画
// 	c.LayoutSections["Loading"] = "transition/TweenMax.html"
	// h1
	c.LayoutSections["ArticleH1"] = "articleDetailsH1.html"

	// svg init加载动画
// 	c.LayoutSections["FirstScreen"] = "style/TweenMaxCss.html"
	c.LayoutSections["ArticleDetails"] = "style/ArticleDetailsCss.html"


	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	// 加载更多动画
	c.LayoutSections["initialize"] = "transition/initialize.html"

	// svg init加载动画
// 	c.LayoutSections["TweenMaxJs"] = "script/TweenMaxJs.html"

	// 分页器
	c.LayoutSections["pagingJs"] = "script/pagingJs.html"

	c.LayoutSections["articleDetailsJs"] = "script/articleDetailsJs.html"
}
