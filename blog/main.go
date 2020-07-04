package main

import (
	"easy_go/blog/controllers"
	"easy_go/blog/db"
	"easy_go/blog/logger"
	_ "easy_go/blog/routers"
	"easy_go/blog/tempFunc"
	"github.com/astaxie/beego"
)

func init()  {
	tempFunc.Init()
	db.Init()
	logger.Init()
}

func main() {
	// beego.BConfig.RunMode = beego.AppConfig.String("runmode")          // 环境
	beego.ErrorController(&controllers.ErrorController{})
    beego.BConfig.RunMode = "dev"
	beego.BConfig.WebConfig.ViewsPath = "template" // 静态目录
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.Run(":" + beego.AppConfig.String("httpport"))
}