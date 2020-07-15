package main

import (
	"blog/controllers"
	"easy_go/blog/db"
	"easy_go/blog/logger"
	_ "easy_go/blog/routers"
	"easy_go/blog/tempFunc"
	"easy_go/lib"
	"github.com/astaxie/beego"
	"runtime"
)

func init()  {
	tempFunc.Init()
	db.Init()
	logger.Init()
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
	beego.ErrorController(&controllers.ErrorController{})
	beego.BConfig.CopyRequestBody = true
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.BConfig.RunMode = env
	beego.BConfig.WebConfig.ViewsPath = viewsPath
	beego.Run(":" + blogenv)
}