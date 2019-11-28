package main

import (
	_ "easy_go/routers"

	"github.com/astaxie/beego"
)

func inint() {
	beego.BConfig.RunMode = beego.AppConfig.String("runmode")          // 环境
	beego.BConfig.WebConfig.ViewsPath = beego.AppConfig.String("view") // 静态目录
}
func main() {
	beego.Run(":" + beego.AppConfig.String("httpport"))
}
