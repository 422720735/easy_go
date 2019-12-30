package main

import (
	_ "easy_go/admin/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.BConfig.WebConfig.ViewsPath = "template"
	beego.Run(":" + beego.AppConfig.String("httpport"))
}

