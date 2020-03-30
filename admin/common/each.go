package common

import (
	"github.com/astaxie/beego"
	"time"
	// captcha2 "github.com/astaxie/beego/utils/captcha"
)
/*
// 全局验证码结构体
var captcha *captcha2.Captcha

// init函数初始化captcha
func init()  {
	// 验证码功能
	// 使用Beego缓存存储验证码数据
	store := captcha.NewMemoryCache()
	// 创建验证码
	captcha = captcha.NewWithFilter("/captcha", store)
	// 设置验证码长度
	captcha.ChallengeNums = 4
	// 设置验证码模板高度
	captcha.StdHeight = 50
	// 设置验证码模板宽度
	captcha.StdWidth = 120
}*/

type BaseController struct {
	beego.Controller
}

type Message interface {
	Success(msg, url string)
	Error(msg, url string)
}

func (c *BaseController) History(msg string, url string) {
	if url == "" {
		c.Ctx.WriteString("<script>alert('" + msg + "');window.history.go(-1);</script>")
		c.StopRun()
	} else {
		c.Redirect(url, 302)
	}
}
func (c *BaseController) Success(msg string) {
	c.Data["json"] = map[string]interface{}{
		"code":    G_Success,
		"message": ReturnMessage(G_Success),
		"data":    msg,
		"time":    time.Now().Unix(),
	}
	c.ServeJSON()
}

func (c *BaseController) Error(msg string) {
	c.Data["json"] = map[string]interface{}{
		"code":    G_ParamErr,
		"message": ReturnMessage(G_ParamErr),
		"data":    msg,
		"time":    time.Now().Unix(),
	}
	c.ServeJSON()
}

func Echo(c *BaseController, code int, body interface{}) {
	c.Data["json"] = map[string]interface{}{
		"code": code,
		"data": body,
		"time": time.Now().Unix(),
	}
	c.ServeJSON()
}