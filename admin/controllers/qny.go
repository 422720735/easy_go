package controllers

import (
	"easy_go/qny"
	"github.com/astaxie/beego"
	"time"
)

type QiNiuController struct {
	beego.Controller
}

func (c *QiNiuController) InsertToken() {
	token := qny.UpLoadQiNiuToken()
	var results = map[string]interface{}{
		"expireTime": time.Now().UnixNano() / 1e6,
		"token":      token,
	}
	if token != "" {
		results["code"] = 1
	} else {
		results["code"] = 0
	}
	c.Data["json"] = results
	c.ServeJSON()
}
