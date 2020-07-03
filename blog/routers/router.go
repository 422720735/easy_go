package routers

import (
	"easy_go/blog/controllers"
	"github.com/astaxie/beego"
)

const Api = "/api"

func init() {
	beego.Router("/captcha", &controllers.CaptchaControllers{})
	beego.Router("/captcha/:captchaId", &controllers.CaptchaControllers{}, "get:ShowCode")

	beego.Router("/oauth", &controllers.OAuthControllers{})

	beego.Router("/?:menu_id/?:category_id", &controllers.IndexController{}, "get:Index")

	beego.Router("/article/?:id", &controllers.ArticleController{})

	beego.Router("/login", &controllers.LoginController{})

	beego.Router("/test", &controllers.TestControllers{}, "get:Get3")

	beego.Router("/404", &controllers.ErrorController{}, "get:Error404")

	business()
}

func business()  {
	// 退出登录
	beego.Router(Api + "/log/out", &controllers.UserControllers{})
}