package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"easy_go/common"
	myjwt "easy_go/middleware"
	"easy_go/transform"
	"strconv"
)

type ArticleController struct {
	common.BaseController
}

func (c *ArticleController) Get() {
	c.Layout = "base/articleLayout.html"
	c.TplName = "pages/articleDetails.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["menuUl"] = "base/menu.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"
	c.LayoutSections["style"] = "style/detailsStyle.html"
	c.LayoutSections["script"] = "script/detailsScript.html"

	param := c.Ctx.Input.Param(":id")
	var id int
	_id, err := strconv.Atoi(param)
	if err == nil {
		id = _id
	} else {
		c.History("查看文章详情失败", "/")
		return
	}

	menu, _ := servers.SelectArticleTypeMenuName()
	details, err := servers.SelectArticleDetails(id)

	if err != nil {
		logger.Error("请求文章详情参数不正确或者没有数据可查询", err.Error())
		c.Redirect("/404", 302)
		return
	}

	// 文章阅读量+1

	c.Data["menu"] = menu
	c.Data["details"] = details
	publicA(c)
}

func publicA(c *ArticleController) {
	u_id := c.GetSession("u_id")
	if u_id != nil {
		name := c.GetSession("u_name")
		avatar_url := c.GetSession("u_avatar_url")
		auth_token := c.GetSession("u_auth_token")
		c.Data["u_id"] = u_id
		c.Data["u_name"] = name
		c.Data["u_avatar_url"] = avatar_url
		c.Data["u_auth_token"] = auth_token
	}
}

func (c *ArticleController) InsertPraise() {
	auth := c.Ctx.Request.Header.Get("r")
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(auth)
	if err != nil {
		logger.Info("回复解析token失败", err.Error())
		c.Error("点赞失败，参数不合法！")
		return
	}

	role, err := servers.Select_github(claims.ID, claims.Username, claims.LoginIp, auth)
	if err != nil {
		c.Error("暂未登录，无法点赞！")
		return
	}

	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		c.Error("点赞失败，参数不合法！")
		return
	}

	article_id, err := transform.InterToInt(msg["article_id"])
	if err != nil && article_id > 0 {
		c.Error("点赞失败，文章不能为空！")
		return
	}

	state, err := servers.UpdateArticlePraise(role.Id, article_id)
	if err != nil {
		c.Error("点赞操作失败4！")
		return
	}

	// 查询点赞情况
	praiseTotal := servers.SelectPraise(article_id)

	res := map[string]interface{}{
		"praise": praiseTotal,
		"state":  state,
	}
	c.Success(res)
}

func (c *ArticleController) GetPraiseCount() {
	param := c.Ctx.Input.Param(":id")
	var article_id int
	_id, err := strconv.Atoi(param)
	if err == nil {
		article_id = _id
	} else {
		c.Error("文章id不能为空")
		return
	}


	// 如果有token,我们就去查询用户文章点赞状态
	var state bool
	auth := c.Ctx.Request.Header.Get("r")
	if auth != "" {
		j := myjwt.NewJWT()
		claims, err := j.ParseToken(auth)
		if err == nil {
			role, err := servers.Select_github(claims.ID, claims.Username, claims.LoginIp, auth)
			if err == nil {
				state, err = servers.SelectArticlePraise(role.Id, article_id)
			}
		}
	}

	// 查询点赞情况
	praiseTotal := servers.SelectPraise(article_id)

	res := map[string]interface{}{
		"praise": praiseTotal,
		"state": state,
	}
	c.Success(res)
}
