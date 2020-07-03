package controllers

import (
	"easy_go/blog/servers"
	"easy_go/lib"
	"github.com/astaxie/beego"
)

type LoginController struct {
	beego.Controller
}

func (c *LoginController) Get() {
	c.Layout = "base/loginLayout.html"
	c.TplName = "pages/login.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["menuUl"] = "base/menu.html"
	// 登录页的css
	c.LayoutSections["Style"] = "style/loginStyle.html"

	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	// 登录页js
	c.LayoutSections["Script"] = "script/loginScript.html"

	ClientId := lib.Conf.Read("github", "ClientId")
	ClientSecret := lib.Conf.Read("github", "ClientSecret")
	RedirectUrl := lib.Conf.Read("github", "RedirectUrl")

	menu, _ := servers.SelectArticleTypeMenuName()
	c.Data["menu"] = menu
	c.Data["clientId"] = ClientId
	c.Data["clientSecret"] = ClientSecret
	c.Data["redirectUrl"] = RedirectUrl

	c.Data["Log"] = "1233"
}
