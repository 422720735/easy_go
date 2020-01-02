package controllers

import "github.com/astaxie/beego"

type IndexControllers struct {
	beego.Controller
}

func (c *IndexControllers) Get() {
	c.Layout = "base/layout.html"
	c.TplName = "index.html"

	c.LayoutSections = make(map[string]string)
	c.LayoutSections["Loading"] = "transition/loading.html"
	c.LayoutSections["menu"] = "base/menu.html"

	c.Data["Base"] = "Base"
	//c.LayoutSections["BaseStyle"] = "style/base.html"

	//c.LayoutSections["BaseScript"] = "script/base.html"
}
