package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"easy_go/common"
	myjwt "easy_go/middleware"
	"easy_go/transform"
	"strconv"
)

type CommentControllers struct {
	common.BaseController
}

// 查询评论信息
func (c *CommentControllers) SelectComment() {
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

	auth := c.Ctx.Request.Header.Get("r")
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(auth)
	if err != nil {
		logger.Info("评论解析token失败", err.Error())
		c.Error("评论失败，参数不合法！")
		return
	}

	_, err = servers.Select_github(claims.ID, claims.Username, claims.LoginIp, auth)
	if err != nil {
		c.Error("评论失败，参数不合法！")
		return
	}

	c.Success(_id)
}

// 新增评论
func (c *CommentControllers) InsertComment() {
	auth := c.Ctx.Request.Header.Get("r")
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(auth)
	if err != nil {
		logger.Info("评论解析token失败", err.Error())
		c.Error("评论失败，参数不合法！1")
		return
	}

	role, err := servers.Select_github(claims.ID, claims.Username, claims.LoginIp, auth)
	if err != nil {
		c.Error("评论失败，参数不合法！2")
		return
	}

	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		c.Error("评论失败，参数不合法！3")
		return
	}

	message, err := transform.InterToString(msg["message"])
	if err != nil && message == "" {
		c.Error("评论失败！4")
		return
	}

	articleId, err := transform.InterToInt(msg["article_id"])

	// 新增评论信息
	err = servers.AddComment(role, articleId, message)
	if err != nil {
		c.Error("评论失败！")
		return
	}

	c.Success(articleId)
}
