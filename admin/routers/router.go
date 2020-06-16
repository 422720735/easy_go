package routers

import (
	"easy_go/admin/common"
	"easy_go/admin/controllers"
	"easy_go/admin/controllers/article"
	"github.com/astaxie/beego/context"

	"github.com/astaxie/beego"
)

const Api = "/api"

func init() {
	beego.InsertFilter("/", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/analysis", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/workplace", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/menuSetting/*", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/article/*", beego.BeforeExec, FilterUser)

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
	beego.Router("/menuSetting/add", &controllers.MenuController{}, "get:Add")

	// 导航菜单-info
	beego.Router("/menuSetting/info", &controllers.MenuController{}, "get:Info")

	// 文章类型
	beego.Router("/article/type", &article.ArticleControllerType{})
	beego.Router("/article/type/add", &article.ArticleControllerType{}, "get:Add")

	// 文章列表
	beego.Router("/article/list", &article.ArticleList{})

	// 文章新增+编辑
	beego.Router("/article/details", &article.ArticleDetails{}, "get:AddOfUpdate")
	beego.Router("/article/details/markdown", &article.ArticleDetails{}, "get:AddOfUpdateMarkdown")
	register()
}

func register() {
	beego.Router(Api+"/qn/token", &controllers.QiNiuController{}, "get:InsertToken")

	beego.Router(Api+"/login", &controllers.LoginController{}, "post:HandleLogin")
	beego.Router(Api+"/register", &controllers.RegisterController{}, "post:AddRegister")

	beego.Router(Api + "/menuSetting/add", &controllers.MenuController{}, "post:HandleMenuAdd")
	beego.Router(Api + "/menuSetting/move/*", &controllers.MenuController{},"get:HandMove_up_down")
	beego.Router(Api + "/menuSetting/child", &controllers.MenuController{},"post:HandChangeChild")
	beego.Router(Api + "/menuSetting/issue", &controllers.MenuController{},"get:HandUpdateIssue")
	beego.Router(Api + "/menuSetting/delete", &controllers.MenuController{},"post:HandDelete")

	beego.Router(Api + "/articleType/add", &article.ArticleControllerType{},"post:HandArticleTypeAdd")

	// 查询文章详情 文章新增 编辑接口
	beego.Router(Api + "/article/details", &article.ArticleDetails{}, "get:ArticleAll;post:HandArticleDetailsInsert;put:HandArticleDetailsUpdate")


	beego.Router("/test", &controllers.TestControllers{})
}
// 全局过滤方法。
// https://www.kancloud.cn/hello123/beego/126127
var FilterUser = func(ctx *context.Context) {
	_, ok := ctx.Input.Session("userName").(string)
	if !ok && (ctx.Request.RequestURI != "/login" || ctx.Request.RequestURI != "register") {
		// 1 获取cookies
		auth := ctx.GetCookie("auth")
		if auth == "" {
			ctx.Redirect(302, "/login")
		} else {
			// 验证cook是否有效，有效记得session
			// 如果解析token有用户数据把数据记录在session
			user := common.ParseTokenUser(auth)
			if user == nil {
				ctx.Redirect(302, "/login")
			} else {
				ctx.Output.Session("userId", user.Id)
				ctx.Output.Session("userName", user.Username)
			}
		}
	}
}
