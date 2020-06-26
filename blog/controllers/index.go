package controllers

import "github.com/astaxie/beego"

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Index() {
	c.Layout = "base/layout.html"
	c.TplName = "pages/article-list.html"
	c.LayoutSections = make(map[string]string)

	c.LayoutSections["spin"] = "transition/Spin.html"
	c.LayoutSections["style"] = "style/indexStyle.html"
	c.LayoutSections["script"] = "script/indexScript.html"


	// svg init加载动画
	c.LayoutSections["FirstScreen"] = "style/TweenMaxCss.html"
	c.LayoutSections["Loading"] = "transition/TweenMax.html"
	c.LayoutSections["TweenMaxJs"] = "script/TweenMaxJs.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"


}
