package routers

import (
	"easy_go/admin/controllers"
	"easy_go/admin/controllers/article"
	"easy_go/admin/controllers/system"
	"easy_go/common"
	"github.com/astaxie/beego/context"

	"github.com/astaxie/beego"
)

const Api = "/api"

func init() {
	beego.InsertFilter("/", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/workplace", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/menuSetting/*", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/article/*", beego.BeforeExec, FilterUser)
	beego.InsertFilter("/cover/*", beego.BeforeExec, FilterUser)
	beego.InsertFilter(Api +"/**", beego.BeforeRouter, FilterUser)

	beego.Router("/captcha", &controllers.CaptchaControllers{})
	beego.Router("/captcha/:captchaId", &controllers.CaptchaControllers{}, "get:ShowCode")

	// 注册、登录
	beego.Router("/login", &controllers.LoginController{}, "get:Get;post:HandleLogin")
	beego.Router("/register", &controllers.RegisterController{})


	// 工作台
	beego.Router("/", &controllers.DashBoardControllers{})
	beego.Router("/workplace", &controllers.DashBoardControllers{})

	// 系统设置
	beego.Router("/cover", &system.CoverControllers{})

	// 路由权限设置
	beego.Router("/menuSetting", &controllers.MenuController{})

	// 导航菜单-add
	beego.Router("/menuSetting/add", &controllers.MenuController{}, "get:Add")

	// 导航菜单-info
	beego.Router("/menuSetting/info", &controllers.MenuController{}, "get:Info")

	// 文章类型
	beego.Router("/article/type", &article.ArticleControllerType{}, "get:GetList")
	beego.Router("/article/type/details", &article.ArticleControllerType{}, "get:GetDetails")

	// 文章列表
	beego.Router("/article/list", &article.ArticleList{})

	// 文章新增+编辑
	beego.Router("/article/details", &article.ArticleDetails{}, "get:ArticleDetails")
	beego.Router("/article/details/markdown", &article.ArticleDetails{}, "get:ArticleDetailsMarkdown")
	business()
}

func business() {
	// 获取七牛云的token
	beego.Router(Api + "/qn/token", &controllers.QiNiuController{}, "get:InsertToken")
	// 导航菜单
	beego.Router(Api + "/menuSetting/add", &controllers.MenuController{}, "post:HandleMenuAdd")
	beego.Router(Api + "/menuSetting/move/*", &controllers.MenuController{},"get:HandMove_up_down")
	beego.Router(Api + "/menuSetting/child", &controllers.MenuController{},"post:HandChangeChild")
	beego.Router(Api + "/menuSetting/issue", &controllers.MenuController{},"get:HandUpdateIssue")
	beego.Router(Api + "/menuSetting/delete", &controllers.MenuController{},"post:HandDelete")

	// 查询文章详情 文章新增 编辑接口
	beego.Router(Api + "/article/details", &article.ArticleDetails{}, "get:ArticleAll;post:HandArticleDetailsInsert;put:HandArticleDetailsUpdate")
	beego.Router(Api + "/article/issue", &article.ArticleList{},"get:HandUpdateIssue")
	beego.Router(Api + "/article/delete", &article.ArticleList{},"post:HandDelete")
	beego.Router(Api + "/article/move/*", &article.ArticleList{},"get:HandMove_up_down")

	// 文章类型操作
	beego.Router(Api + "/article/type/details", &article.ArticleControllerType{}, "get:GetArticleTypeInfo;post:HandArticleTypeAdd;put:HandleTypeUpdate")
	beego.Router(Api + "/article/type/issue", &article.ArticleControllerType{},"get:HandArticleTypeUpdateIssue")
	beego.Router(Api + "/article/type/delete", &article.ArticleControllerType{},"post:HandArticleTypeDelete")
	beego.Router(Api + "/article/type/move/*", &article.ArticleControllerType{},"get:HandArticleType_up_down")

	// 封面
	beego.Router(Api + "/cover/alter", &system.CoverControllers{}, "post:HandleCoverAlter")
	beego.Router(Api + "/cover", &system.CoverControllers{}, "get:CoverInfo")

	// 退出登录
	beego.Router(Api + "/log/out", &system.SystemController{})

	beego.Router("/test", &controllers.TestControllers{})
}

// 全局过滤方法。
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
