package main

import (
	"easy_go/blog/controllers"
	"easy_go/blog/db"
	"easy_go/blog/logger"
	_ "easy_go/blog/routers"
	"easy_go/blog/tempFunc"
	"easy_go/lib"
	"github.com/astaxie/beego"
	"runtime"
)

func init()  {
	db.Init()
	logger.Init()
	tempFunc.Init()
}

func main() {
	goos := runtime.GOOS
	system := ""
	if goos == "linux" {
		system = "admin_prod"
	} else {
		system = "admin_dev"
	}
	env := lib.Conf.Read(system, "env")
	blogenv := lib.Conf.Read(system, "blogenv")
	viewsPath := lib.Conf.Read(system, "viewspath")
	beego.BConfig.CopyRequestBody = true
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.ErrorController(&controllers.ErrorController{})
	beego.BConfig.RunMode = env
	beego.BConfig.WebConfig.ViewsPath = viewsPath
	beego.Run(":" + blogenv)
}