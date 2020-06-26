package routers

import (
	"easy_go/blog/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/?:menu/?:article", &controllers.IndexController{}, "get:Index")

	beego.Router("/article", &controllers.ArticleController{})

	beego.Router("/login", &controllers.LoginController{})

	//beego.Router("/test", &controllers.TestControllers{}, "get:Get2")
}
