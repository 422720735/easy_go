package routers

import (
	"easy_go/admin/controllers"
	"easy_go/admin/controllers/article"
	"fmt"
	"github.com/astaxie/beego/context"

	"github.com/astaxie/beego"
)

const Api = "/api"

func init() {
	beego.InsertFilter(Api+"/*", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/", beego.BeforeExec, FilterUser)
	// beego.Router("/", &controllers.IndexControllers{}) // 废弃

	beego.Router("/login", &controllers.LoginController{})

	beego.Router("/register", &controllers.RegisterController{})

	beego.Router("/", &controllers.DashBoardControllers{})

	beego.Router("/analysis", &controllers.DashBoardControllers{}, "get:HandleAnalysis")

	// 工作台
	beego.Router("/workplace", &controllers.DashBoardControllers{}, "get:HandleWorkplace")

	// 路由权限设置
	beego.Router("/menuSetting", &controllers.MenuController{})

	// 导航菜单-add
	beego.Router("/menuSetting/add", &controllers.MenuController{}, "get:Add;post:HandleMenuAdd")

	// 导航菜单-info
	beego.Router("/menuSetting/info", &controllers.MenuController{}, "get:Info")

	// 文章类型
	beego.Router("/article/type", &article.ArticleControllerType{})

	// 文章列表
	beego.Router("/article/list", &article.ArticleList{})

	// 文章新增+编辑
	beego.Router("/article/details", &article.ArticleDetails{}, "get:AddOfUpdate")
	register()
}

func register() {
	beego.Router(Api+"/login", &controllers.LoginController{}, "post:HandleLogin")
	beego.Router(Api+"/register", &controllers.RegisterController{}, "post:AddRegister")
}

var FilterUser = func(ctx *context.Context) {
	user := ctx.Input.Session("userName")
	if user == nil {
		ctx.Redirect(302, "/login", )
	}
	fmt.Print(user)
}
