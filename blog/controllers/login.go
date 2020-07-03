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

	githubClientId := lib.Conf.Read("github", "ClientId")
	giteeClientId := lib.Conf.Read("gitee", "ClientId")

	menu, _ := servers.SelectArticleTypeMenuName()
	c.Data["menu"] = menu
	c.Data["githubClientId"] = githubClientId
	c.Data["giteeClientId"] = giteeClientId
}
