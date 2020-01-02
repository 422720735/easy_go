package routers

import (
	"easy_go/admin/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.IndexControllers{})
	// welcome
	beego.Router("/login", &controllers.LoginController{})

	beego.Router("/register", &controllers.RegisterController{})
}
