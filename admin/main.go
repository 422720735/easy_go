package main

import (
	"easy_go/admin/controllers"
	"easy_go/admin/logger"
	_ "easy_go/admin/routers"
	"easy_go/admin/tempFunc"
	"easy_go/db"
	"easy_go/lib"
	"github.com/astaxie/beego"
	"runtime"
)


func init() {
	db.Init()
	logger.Init()
	tempFunc.Init()
	/*
	我们的文章量设置为-1，进入相关页面才会去查询文章量，
	并且用户操作了文章的上下架、删除、编辑、新增等把这个
	*/
	controllers.AdminInit()
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
	port := lib.Conf.Read(system, "httpport")
	viewsPath := lib.Conf.Read(system, "viewspath")
	beego.BConfig.CopyRequestBody = true
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.ErrorController(&controllers.ErrorController{})
	beego.BConfig.RunMode = env
	beego.BConfig.WebConfig.ViewsPath = viewsPath
	beego.Run(":" + port)
}
