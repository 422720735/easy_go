package routers

import (
	"bobBlog/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.IndexController{}, "get:Index")
}
