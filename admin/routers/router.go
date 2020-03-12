package routers

import (
	"easy_go/admin/controllers"

	"github.com/astaxie/beego"
)

func init() {
	// beego.Router("/", &controllers.IndexControllers{}) // 废弃

	beego.Router("/login", &controllers.LoginController{})

	beego.Router("/register", &controllers.RegisterController{})

	beego.Router("/welcome", &controllers.DashBoardControllers{})

	beego.Router("/analysis", &controllers.DashBoardControllers{}, "get:HandleAnalysis")

	// 工作台
	beego.Router("/workplace", &controllers.DashBoardControllers{}, "get:HandleWorkplace")

	// 路由权限设置
	beego.Router("/menuSetting", &controllers.MenuController{})
	// add
	beego.Router("/menuSetting/add", &controllers.MenuController{}, "get:Add")
}
