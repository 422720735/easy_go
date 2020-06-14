package controllers

import (
	"easy_go/qny"
	"github.com/astaxie/beego"
	"time"
)

type QiNiuController struct {
	beego.Controller
}

func InsertToken(c *QiNiuController)  {
	token := qny.UpLoadQiNiuToken()
	var results = map[string]interface{}{
		"expireTime": time.Now().UnixNano() / 1e6,
		"token":      token,
	}

	c.Data["json"] = results
	c.ServeJSON()
}
