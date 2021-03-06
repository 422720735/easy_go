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
	"time"
)

type LoginController struct {
	common.BaseController
}

func (c *LoginController) Get() {
	c.Layout = "layout/login-registerLayout.html"
	c.TplName = "pages/login.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["script"] = "script/login_register.html"
	c.Data["metaTitle"] = "登陆"
}

func (c *LoginController) HandleLogin() {
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("账号或密码不合法", err.Error())
		c.Error("登录失败")
		return
	}

	result, err := transform.InterToString(msg["s"])
	if err != nil {
		logger.Info("账号或密码不合法", err.Error())
		c.Error("账号或密码不合法")
		return
	}

	res := strings.Split(result, "-")
	if len(res) != 2 {
		logger.Info("账号或密码不合法")
		c.Error("账号或密码不合法")
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

	username := aes.DePwdCode(res[1])
	password := aes.DePwdCode(res[0])

	if username == "" || len(username) < 6 || password == "" || len(password) < 6 {
		c.Error("账号或密码不合法")
		return
	}
	// 加密后的密码
	process, err := servers.SelectUserMd5Pwd(username, md5.Md5(password, common.SECRET_KEY))
	if err != nil {
		logger.Error("用户:"+username+"加密失败", err.Error())
		c.Error("账号或密码不合法")
		return
	}
	// 跟数据库的比对
	user, err := servers.SelectUserMd5Pwd(username, process.PassWord)
	if err != nil {
		logger.Warn("用户:"+username+"比对密码出错", err.Error())
		c.Error("账号或密码不合法")
		return
	}

	// 是否记住密码
	check, _ := transform.InterToBool(msg["checkbox"])

	if user.PassWord != "" {
		// 记住密码，aes加密
		if check {
			ip := c.Ctx.Request.RemoteAddr
			// 生成token
			user.LoginIp = ip
			tokenString, err := common.NewCurrentCookie(user)
			if err != nil {
				//logger.Warn("用户登录创建token失败", err.Error())
				c.Error("未知异常")
				return
			}
			// 把token 登录时间，登录ip，更新sql时间，更新到用户表里，走一次sql更新，sql成功后继续下面的操作。
			user.LoginIp = ip
			user.CurrentLoginTime.Scan(time.Now())
			user.UpdateTime.Scan(time.Now())
			user.AuthToken = tokenString
			err = servers.LoginRecord(user)
			if err != nil {
				logger.Info("用户记录登陆信息失败", err.Error())
				c.Error("未知异常")
				return
			}
			c.Ctx.SetCookie("auth", tokenString, time.Second*60*60)
		}
		// 存session
		c.SetSession("userId", user.Id)
		c.SetSession("userName", user.UserName)
		c.Success("登录成功")
	} else {
		c.Error("登录失败")
	}
}
