package controllers

import "easy_go/common"

type UserControllers struct {
	common.BaseController
}

func (c *UserControllers) Post() {
	auth := c.Ctx.Input.Cookie("r")
	c.Error(auth)
}
