package controllers

import (
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	"easy_go/aes"
	"easy_go/common"
	"easy_go/md5"
	"easy_go/middleware"
	"easy_go/transform"
	"strings"
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
	c.TplName = "pages/register.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["script"] = "script/login_register.html"
}

func (c *RegisterController) Post() {
	var role int
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("获取注册接口数据失败", err.Error())
		c.Error("获取注册接口数据失败")
		return
	}

	code, err := transform.InterToString(msg["code"])
	if err != nil {
		logger.Info("验证码不合法", err.Error())
		c.Error("验证码不合法")
		return
	}

	if len(code) != 6 {
		logger.Info("验证码长度不正确")
		c.Error("验证码长度不正确")
		return
	}

	captchaId, ok := c.GetSession("captchaId").(string)
	if !ok {
		c.Error("验证码验证失败")
		return
	}

	_bool := middleware.VerifyCaptcha(captchaId, code)
	if !_bool {
		c.Error("验证码不合法")
		return
	} else {
		c.DelSession("captchaId")
	}

	invitecode, err := transform.InterToString(msg["invitecode"])
	if err != nil {
		logger.Info("邀请码错误", err.Error())
		c.Error("获取注册接口数据失败")
		return
	}
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

	result, err := transform.InterToString(msg["t"])
	if err != nil {
		logger.Info("账号或密码不合法", err.Error())
		c.Error("账号或密码不合法")
		return
	}

	res := strings.Split(result, "+")
	if len(res) != 2 {
		logger.Info("账号或密码不合法")
		c.Error("账号或密码不合法")
		return
	}

	username := aes.DePwdCode(res[0])
	password := aes.DePwdCode(res[1])

	count, err := servers.IsUserTake(username)
	if err != nil {
		logger.Info("用户注册查询账号是否占用失败" + err.Error())
		c.Error("未知异常")
	}
	if count > 0 {
		c.Error("账号以被占用。")
		return
	}
	// 加密后的密码
	processPwd := md5.Md5(password, common.SECRET_KEY)
	err = servers.InsertUser(username, processPwd, role)
	if err != nil {
		logger.Warn("注册账号失败", err.Error())
		c.Error("注册账号失败")
		return
	}
	c.Success("注册成功")
}
