package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"easy_go/common"
	myjwt "easy_go/middleware"
	"easy_go/models"
	"easy_go/transform"
)

type ReplyControllers struct {
	common.BaseController
}

func (c *ReplyControllers) InsertReply() {
	auth := c.Ctx.Request.Header.Get("r")
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(auth)
	if err != nil {
		logger.Info("回复解析token失败", err.Error())
		c.Error("回复失败，参数不合法！")
		return
	}

	role, err := servers.Select_github(claims.ID, claims.Username, claims.LoginIp, auth)
	if err != nil {
		c.Error("暂未登录，不能回复！")
		return
	}

	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		c.Error("回复失败，参数不合法！")
		return
	}

	content, err := transform.InterToString(msg["content"])
	if err != nil && content == "" {
		c.Error("回复失败，回复内容不能为空！")
		return
	}

	_type, err := transform.InterToInt(msg["type"])
	if err != nil && _type == -1 {
		c.Error("回复失败，回复类型错误！")
		return
	}

	comment_id, err := transform.InterToInt(msg["comment_id"])
	if err != nil && comment_id == -1 {
		c.Error("回复失败，评论id错误！")
		return
	}

	var reply_id int
	if _type == 2 {
		reply_id, err = transform.InterToInt(msg["reply_id"])
	} else {
		reply_id = comment_id
	}

	if err != nil && reply_id == -1 {
		c.Error("回复失败，回复目标的id错误！")
		return
	}

	if role.Id == 0 || role.Id == -1 {
		c.Error("回复失败，请重新登录！")
		return
	}

	err = servers.AddReply(content, role.Id, comment_id, reply_id, models.ReplyTypeEle(_type))
	if err != nil {
		c.Error("回复操作失败！")
		return
	}

	c.Success("回复成功！")
}