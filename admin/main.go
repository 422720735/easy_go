package main

import (
	"easy_go/admin/controllers"
	"easy_go/admin/go-logger/v2logger"
	"strconv"

	"easy_go/admin/db"
	"easy_go/admin/logger"
	_ "easy_go/admin/routers"
	"easy_go/lib"
	"github.com/astaxie/beego"
	"runtime"
)

func init()  {
	db.Init()
	logger.Init()
	v2logger.SetConsole(true)
	v2logger.SetRollingFile("./logger/log", "test.log", 10, 5, 64)
	v2logger.SetRollingDaily("./logger/log", "test.log")
	v2logger.SetLevel(v2logger.DEBUG)
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

func log(i int)  {
	v2logger.Debug("Debug>>>>>>>>>>>>>>>>>>>>>>" , strconv.Itoa(i))
	v2logger.Info("Info>>>>>>>>>>>>>>>>>>>>>>>>>" , strconv.Itoa(i))
	v2logger.Warn("Warn>>>>>>>>>>>>>>>>>>>>>>>>>" , strconv.Itoa(i))
	v2logger.Error("Error>>>>>>>>>>>>>>>>>>>>>>>>>", strconv.Itoa(i))
	v2logger.Fatal("Fatal>>>>>>>>>>>>>>>>>>>>>>>>>", strconv.Itoa(i))
}