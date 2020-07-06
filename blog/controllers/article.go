package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"easy_go/common"
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
	id1, err := strconv.Atoi(param)
	if err == nil {
		id = id1
	} else {
		id = 0
	}

	menu, _ := servers.SelectArticleTypeMenuName()

	details, err := servers.SelectArticleDetails(id)
	if err != nil {
		logger.Error("请求文章详情参数不正确或者没有数据可查询", err.Error())
		c.Redirect("/404", 302)
		return
	}
	c.Data["menu"] = menu
	c.Data["details"] = details
	publicA(c)
}

func publicA(c *ArticleController) {
	u_id := c.GetSession("id")
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

func (c *ArticleController) CommentList() {
	param := c.Ctx.Input.Param(":id")
	if param == "" {
		c.Error("获取评论参数不合法")
		return
	}

	_id, err := strconv.Atoi(param)
	if err != nil {
		c.Error("获取评论参数不合法")
		return
	}

	// 获取到文章id去查询评论+回复
	c.Success(_id)
}
