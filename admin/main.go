package main

import (
	"easy_go/admin/controllers"
	"easy_go/admin/db"
	_ "easy_go/admin/routers"
	"easy_go/lib"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"runtime"
)

var FilterUser = func(ctx *context.Context) {
	// 获取session 跟cookies 数据库对比 过关就进入页面。
	_,ok:=ctx.Input.Session("userId").(string)
	if !ok {}
}
func init()  {
	db.Init()
}

// hltool
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
