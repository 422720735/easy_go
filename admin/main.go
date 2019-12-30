package main

import (
	"easy_go/admin/controllers"
	_ "easy_go/admin/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.ErrorController(&controllers.ErrorController{})
	beego.BConfig.RunMode = "dev"
	beego.BConfig.WebConfig.ViewsPath = "template"
	beego.Run(":" + beego.AppConfig.String("httpport"))
}

