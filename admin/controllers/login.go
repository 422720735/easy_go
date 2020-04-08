package controllers

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/aes"
	"easy_go/md5"
	"encoding/base64"
	"time"

	"github.com/astaxie/beego/logs"
)

var saltKey string

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
	username := c.GetString("username")
	password := c.GetString("password")
	check := c.GetStrings("checkbox")
	if username == "" || len(username) < 6 || password == "" || len(password) < 6 {
		c.History("账号或密码不合法", "")
		return
	}
	// 加密后的密码
	process, err := servers.SelectUserMd5Pwd(username, md5.Md5(password, common.SECRET_KEY))
	if err != nil {
		logs.Alert("用户:"+username+"加密失败", err.Error())
		c.History("账号或密码不合法", "")
		return
	}
	// 跟数据库的比对
	user, err := servers.SelectUserMd5Pwd(username, process.PassWord)
	if err != nil {
		logs.Alert("用户:"+username+"比对密码出错", err.Error())
		c.History("账号或密码不合法", "")
		return
	}

	if user.PassWord != "" {
		ip := c.Ctx.Request.RemoteAddr
		// 生成token
		user.LoginIp = ip
		tokenString, err := common.NewCurrentCookie(user)
		if err != nil {
			logs.Warning("用户登录创建token失败", err.Error())
			c.History("未知异常", "")
			return
		}
		// 把token 登录时间，登录ip，更新sql时间，更新到用户表里，走一次sql更新，sql成功后继续下面的操作。
		user.LoginIp = ip
		user.CurrentLoginTime.Scan(time.Now())
		user.UpdateTime.Scan(time.Now())
		user.AuthToken = tokenString
		err = servers.UserLoginSetToken(user)
		if err != nil {
			logs.Alert("用户记录登陆信息失败", err.Error())
			c.History("未知异常", "")
			return
		}
		// 记住密码，aes加密
		if len(check) > 0 {
			aesKey := aes.NewGoAES([]byte(common.SECRET_AES_KEY))
			encrypt, err := aesKey.Encrypt([]byte(tokenString))
			if err != nil {
				logs.Warning("用户token-aes加密失败", err.Error())
				c.History("未知异常", "")
				return
			}
			// 转存字符串
			saltKey = base64.StdEncoding.EncodeToString(encrypt)
		}

		/*
			1，生成token ip 把它记录在用户信息表里。
			2，如果用户记住密码则我们把token aes 加密一次放到cookies里。
			3，下次用户登陆如果session != nil 直接让用户登陆，如果没有我们先获取cookies。
			4，如果没有cookies，则直接让跳到登陆页面。
			5，如果有先就进行aes解密获取到key:val, 获取到token 解密token 去数据库查询这条数据。如果有创建新到token
			6，根据key设置session 跳转到欢迎页面。
		*/
		// 用户的username,password,ip，当前时间。生成aes密钥。
		// ip是用户请求的ip地址，我们要ip存到数据库里。
		// 使用jwt完成cookie的写入，我们记录的cookie的时间，完成beego的路由拦截，如果用户的数据跟数据库的相同，我们就放行让他登陆。生存的token需要记录在数据库里。
		if saltKey != "" {
			// 1小时有效
			c.Ctx.SetCookie("auth", saltKey, time.Second*60*60)
		}
		// 存session
		c.SetSession("userId", user.Id)
		c.SetSession("userName", user.UserName)
		c.Redirect("/workplace", 302)
		return
	} else {
		c.Redirect("/login", 302)
	}
}
