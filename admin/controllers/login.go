package controllers

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"easy_go/md5"
	"github.com/astaxie/beego"
	// "time"
)

type LoginController struct {
	common.BaseController
}

func (c *LoginController) Get() {
	c.Layout = "layout/login-registerLayout.html"
	c.TplName = "pages/login-img.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["script"] = "script/login_register.html"

	// c.LayoutSections["style"] = "style/login_img.html"

	// c.LayoutSections["script"] = "script/login_img.html"
}

func (c *LoginController) HandleLogin() {
	_ = c.GetStrings("checkbox")
	msg, err := common.Unmarshal(&c.Controller)
	username, _ := transform.InterToString(msg["username"])
	password, _ := transform.InterToString(msg["password"])
	if username == "" || len(username) < 6 || password == "" || len(password) < 6 {
		beego.Info("------", username, password)
		c.History("账号或密码不合法", "/login")
		return
	}
	// 加密后的密码
	processPwd, err := servers.SelectUserMd5Pwd(username, md5.Md5(password, common.SECRET_KEY))
	if err != nil {
		beego.Info(processPwd, "+++++")
	}
	if username == "admin" && password == "123456" {
		c.Redirect("/workplace", 302)
	} else {
		c.Redirect("/login", 302)
	}
}
