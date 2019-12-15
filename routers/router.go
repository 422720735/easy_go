package routers

import (
	"easy_go/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.IndexController{}, "get:Index")

	beego.Router("/article", &controllers.ArticleController{})
}
