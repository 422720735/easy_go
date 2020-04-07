package controllers

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/md5"
	"github.com/astaxie/beego/logs"
	"strings"

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
		ip := c.Ctx.Request.Header.Get("X-Real-IP")
		if ip == "" {
			forwarded := c.Ctx.Request.Header.Get("X-Forwarded-For")
			if forwarded != "" {
				list := strings.Split(forwarded, ":")
				if len(list) > 0 {
					ip = list[0]
				}
			} else {
				ip = strings.Split(c.Ctx.Request.RemoteAddr, ":")[0]
			}
		}
		/*
		1，生成token ip 把它记录在用户信息表里。
		2，如果用户记住密码则我们把token aes 加密一次放到cookies里。
		3，下次用户登陆如果session != nil 直接让用户登陆，如果没有我们先获取cookies。
		4，如果没有cookies，则直接让跳到登陆页面。
		5，如果有先就进行aes解密获取到key:val, 获取到token 解密token 去数据库查询这条数据。如果有创建新到token
		6，根据key设置session 跳转到欢迎页面。
		*/

		// ip是用户请求的ip地址，我们要ip存到数据库里。
		// 使用jwt完成cookie的写入，我们记录的cookie的时间，完成beego的路由拦截，如果用户的数据跟数据库的相同，我们就放行让他登陆。生存的token需要记录在数据库里。

		if len(check) > 0 {
			c.Ctx.SetCookie(md5.Md5("哈哈哈", common.SECRET_COOKIES_KEY), md5.Md5(user.UserName + "=|=" +user.PassWord, common.SECRET_COOKIES_KEY), 860000)
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
