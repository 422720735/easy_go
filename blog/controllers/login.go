package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"easy_go/common"
	"easy_go/lib"
	myjwt "easy_go/middleware"
	"easy_go/models"
	"easy_go/transform"
	"time"
)

type LoginController struct {
	common.BaseController
}

func (c *LoginController) Get() {
	if c.GetSession("id") != nil {
		c.Redirect("/", 302)
		return
	}
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
	giteeRedirectUrl := lib.Conf.Read("gitee", "RedirectUrl")

	menu, _ := servers.SelectArticleTypeMenuName()
	c.Data["menu"] = menu
	c.Data["githubClientId"] = githubClientId
	c.Data["giteeClientId"] = giteeClientId
	c.Data["giteeRedirectUrl"] = giteeRedirectUrl
}

func (c *LoginController) Post() {
	auth := c.Ctx.Request.Header.Get("r")
	// 验证token
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(auth)
	if err != nil {
		c.Error("无权限退出登录")
		return
	}

	_, err = servers.SelectUserLoginInfo(claims.ID, claims.Username, claims.LoginIp, auth)
	if err != nil {
		logger.Info("退出登录解析token失败", err.Error())
		c.Error("无权限退出登录")
		return
	}
	c.DelSession("u_id")
	c.DelSession("u_name")
	c.DelSession("u_avatar_url")
	c.Ctx.SetCookie("auth", "")
	c.Success(auth)
}

// 公共第三方登录业务逻辑
func loginUser(user map[string]interface{}, u_type models.RoleTypeEle, c *OAuthControllers) {
	uid, _ := transform.InterToInt(user["id"])
	name, _ := transform.InterToString(user["name"])
	login, _ := transform.InterToString(user["login"])
	location, _ := transform.InterToString(user["location"])
	avatar_url, _ := transform.InterToString(user["avatar_url"])
	access_token, _ := transform.InterToString(user["access_token"])
	var u models.User
	u.Id = uid

	// github用户名有可能用户没有设置我们用 github的login
	if name == "" {
		u.UserName = login
	} else {
		u.UserName = name
	}

	u.LoginIp = common.RemoteIp(c.Ctx.Request)
	auth_token, err := common.NewCurrentCookie(u)

	if err != nil {
		c.History("未知错误", "/")
		logger.Info("生成登录token失败", err.Error())
		return
	}

	role, err := servers.Login_github(uid, u_type, u.UserName, login, location, avatar_url, access_token, auth_token, u.LoginIp)
	if err != nil {
		c.History("第三方登陆失败", "/")
	}

	c.Ctx.SetCookie("auth", auth_token, time.Second*60*60)
	c.SetSession("u_id", role.Id)
	c.SetSession("u_name", role.Name)
	c.SetSession("u_avatar_url", role.AvatarUrl)
	c.History("", "/")
}

