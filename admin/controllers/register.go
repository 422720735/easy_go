package controllers

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"easy_go/md5"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

type RegisterController struct {
	common.BaseController
}

/**
注册码 8201 平台管理员
注册吗 20170510 超级管理员
*/
func (c *RegisterController) Get() {
	c.Layout = "layout/login-registerLayout.html"
	c.TplName = "pages/register-img.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["styleMessage"] = "style/message.html"
	c.LayoutSections["script"] = "script/login_register.html"
	c.LayoutSections["scriptMessage"] = "script/message.html"
}

func (c *RegisterController) AddRegister() {
	var role int
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logs.Alert("获取注册接口数据失败", err.Error())
		c.Error("获取注册接口数据失败")
		return
	}
	invitecode, err := transform.InterToString(msg["invitecode"])
	if err != nil {
		logs.Warn("邀请码错误", err.Error())
		c.Error("获取注册接口数据失败")
		return
	}
	beego.Info(invitecode != "8201", "invitecode")
	if invitecode == "8201" || invitecode == "20170510" {
		if invitecode == "20170510" {
			role = 1
		} else {
			role = 2
		}
	} else {
		c.Error("邀请码错误")
		return
	}
	username, err := transform.InterToString(msg["username"])
	if username == "" || len(username) < 6 {
		c.Error("输入不合法")
		return
	}
	password, err := transform.InterToString(msg["password"])
	if password == "" || len(password) < 6 {
		c.Error("输入不合法")
		return
	}
	count := servers.IsUserTake(username)
	if count > 0 {
		c.Success("账号以被占用。")
		return
	}
	// 加密后的密码
	processPwd := md5.Md5(password, common.SECRET_KEY)
	err=servers.InsertUser(username, processPwd, role)
	if err != nil {
		c.Error("注册账号失败")
		return
	}
	c.Success("注册成功")
}
