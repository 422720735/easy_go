package controllers

import "github.com/astaxie/beego"

/*
主要做状态码异常的静态html页面跳转
*/
type ErrorController struct {
	beego.Controller
}

func (c *ErrorController) Error403() {
	c.Data["content"] = "你无权访问该页面。"
	c.Data["status"] = "403"
	c.TplName = "error.html"
}

func (c *ErrorController) Error404() {
	c.Data["content"] = "您访问的页面不存在。"
	c.Data["status"] = "404"
	c.TplName = "error.html"
}

func (c *ErrorController) Error500() {
	c.Data["content"] = "服务器出错了。"
	c.Data["status"] = "500"
	c.TplName = "error.html"
}

func (c *ErrorController) Error503() {
	c.Data["content"] = "服务器目前无法使用（由于超载或停机维护）"
	c.Data["status"] = "503"
	c.TplName = "error.html"
}
