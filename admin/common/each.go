package common

import (
	"github.com/astaxie/beego"
	"time"
)

type BaseController struct {
	beego.Controller
}

type Message interface {
	Success(msg, url string)
	Error(msg, url string)
}

func (c *BaseController) Success(msg string) {
	c.Data["json"] = map[string]interface{}{
		"code": G_Success,
		"message": ReturnMessage(G_Success),
		"data":  msg,
		"time": time.Now().Unix(),
	}
	c.ServeJSON()
}

func (c *BaseController) Error(msg string) {
	c.Data["json"] = map[string]interface{}{
		"code": G_ParamErr,
		"message": ReturnMessage(G_ParamErr),
		"data":  msg,
		"time": time.Now().Unix(),
	}
	c.ServeJSON()
}

func Echo(c *beego.Controller, code int, body interface{}) {
	c.Data["json"] = map[string]interface{}{
		"code": code,
		"data":  body,
		"time": time.Now().Unix(),
	}
	c.ServeJSON()
}
