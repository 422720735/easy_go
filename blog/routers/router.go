package routers

import (
	"easy_go/blog/servers"
	myjwt "easy_go/middleware"
	"github.com/astaxie/beego/context"
	"easy_go/blog/controllers"
	"github.com/astaxie/beego"
	"strings"
)

const Api = "/api"

func init() {
	beego.InsertFilter("/*", beego.BeforeRouter, FilterUser)
	beego.Router("/captcha", &controllers.CaptchaControllers{})
	beego.Router("/captcha/:captchaId", &controllers.CaptchaControllers{}, "get:ShowCode")

	beego.Router("/oauth/github", &controllers.OAuthControllers{}, "get:Github")
	// https://blog.csdn.net/weixin_44100826/article/details/106822155?utm_medium=distribute.pc_relevant.none-task-blog-baidujs-3
	beego.Router("/oauth/gitee", &controllers.OAuthControllers{}, "get:Gitee")

	beego.Router("/?:menu_id/?:category_id", &controllers.IndexController{}, "get:Index")

	beego.Router("/article/?:id", &controllers.ArticleController{})
	beego.Router("/article/praise/?:id", &controllers.ArticleController{}, "get:GetPraiseCount")


	beego.Router("/article/comment/?:id", &controllers.CommentControllers{}, "get:GetCommentList")

	beego.Router("/login", &controllers.LoginController{})

	beego.Router("/test", &controllers.TestControllers{}, "get:Get3")

	beego.Router("/404", &controllers.ErrorController{}, "get:Error404")

	business()
}

func business() {
	// 退出登录
	beego.Router(Api + "/log/out", &controllers.UserControllers{})
	// 新增评论
	beego.Router(Api + "/comment/insert", &controllers.CommentControllers{},"post:InsertComment")
	// 新增回复
	beego.Router(Api + "/reply/insert", &controllers.ReplyControllers{},"post:InsertReply")
	beego.Router(Api + "/article/praise", &controllers.ArticleController{},"post:InsertPraise")
}

/*
如果用户没有session信息，我们通过cookies信息的token去验证用户信息，
如果合法则把信息装入session里
*/
var FilterUser = func(ctx *context.Context) {
	id := ctx.Input.CruSession.Get("id")
	if id == nil && (ctx.Request.RequestURI != Api + "/log/out" || strings.Index(ctx.Request.RequestURI, "/static") != - 1) {
		// 1 获取cookies
		if auth := ctx.GetCookie("auth"); auth != "" {
			// 验证token
			j := myjwt.NewJWT()
			claims, err := j.ParseToken(auth)
			if err == nil {
				role, err := servers.Select_github(claims.ID, claims.Username, claims.LoginIp, auth)
				if err == nil {
					ctx.Output.Session("u_id", role.Id)
					ctx.Output.Session("u_name", role.Name)
					ctx.Output.Session("u_avatar_url", role.AvatarUrl)
				}
			}
		}
	}
}
