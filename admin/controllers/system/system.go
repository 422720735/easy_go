package system

import (
	"easy_go/admin/common"
)

type SystemController struct {
	common.BaseController
}

func (c *SystemController) Post() {
	c.DelSession("userName")
	c.DelSession("userId")
	c.Ctx.SetCookie("auth", "", -1)
	c.Success("已退出登录！")
}
