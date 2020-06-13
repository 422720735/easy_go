package article

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"easy_go/qny"
	"github.com/astaxie/beego/logs"
	"time"
)

type ArticleDetails struct {
	common.BaseController
}

// add + update
func (c *ArticleDetails) AddOfUpdate() {
	title := c.GetString("title")
	if title == "" {
		title = "新增-富文本编辑器"
	}
	id := c.GetString("id")
	c.Layout = "layout/mainLayout.html"
	c.TplName = "pages/article/articleDetails/articleDetails.html"
	c.LayoutSections = make(map[string]string)
	// menu
	c.LayoutSections["LeftMenu"] = "layout/leftSideMenuLayout.html"
	// header
	c.LayoutSections["HeaderLayout"] = "layout/headerLayout.html"
	// footer
	c.LayoutSections["FooterLayout"] = "layout/footerLayout.html"
	// css
	c.LayoutSections["BaseStyle"] = "style/baseStyle.html"
	// js
	c.LayoutSections["BaseScript"] = "script/baseScript.html"

	c.LayoutSections["Style"] = "style/articleDetails.html"
	c.LayoutSections["Script"] = "script/articleDetails.html"
	c.LayoutSections["ScriptMessage"] = "script/message.html"
	list, _ := servers.SelectArticleTypeMenuName()

	c.Data["title"] = title
	c.Data["id"] = id
	c.Data["list"] = list

	if id == "" {
		// 返回文章的时间戳
		c.Data["CreatedTime"] = time.Now()
		c.Data["UpdateTime"] = nil
	}

}

func (c *ArticleDetails) AddOfUpdateMarkdown() {
	title := c.GetString("title")
	if title == "" {
		title = "新增-Markdown"
	}
	id := c.GetString("id")
	c.Layout = "layout/extraLayout.html"
	c.TplName = "pages/article/articleDetails/articleDetailsMarkdown.html"
	c.LayoutSections = make(map[string]string)
	// css
	c.LayoutSections["BaseStyle"] = "style/baseStyle.html"
	// js
	c.LayoutSections["BaseScript"] = "script/baseScript.html"

	c.LayoutSections["Style"] = "style/articleDetails.html"
	c.LayoutSections["Script"] = "script/articleDetailsMarkdown.html"
	c.LayoutSections["ScriptMessage"] = "script/message.html"
	list, _ := servers.SelectArticleTypeMenuName()

	c.Data["title"] = title
	c.Data["id"] = id
	c.Data["list"] = list

	if id == "" {
		// 返回文章的时间戳
		c.Data["CreatedTime"] = time.Now()
		c.Data["UpdateTime"] = nil
	}
}

func (c *ArticleDetails) HandArticleDetailsInsert() {
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logs.Alert("获取文章详情数据失败", err.Error())
		c.Error("获取文章详情数据失败")
		return
	}

	title, err := transform.InterToString(msg["title"])
	if err != nil || title == "" {
		logs.Alert("获取文章标题失败", err.Error())
		c.Error("获取文章标题失败")
		return
	}

	menuId, err := transform.InterToInt(msg["menuId"])
	if err != nil {
		logs.Alert("获取文章menu失败", err.Error())
		c.Error("获取文章menu失败")
		return
	}

	categoryId, err := transform.InterToInt(msg["categoryId"])
	if err != nil {
		logs.Alert("获取文章类型失败", err.Error())
		c.Error("获取文章类型失败")
		return
	}

	content, err := transform.InterToString(msg["content"])
	if err != nil || content == "" {
		logs.Alert("获取文章内容失败", err.Error())
		c.Error("获取文章内容失败")
		return
	}

	cover, err := transform.InterToString(msg["cover"])
	if err != nil || cover == "" {
		logs.Alert("获取文章封面失败", err.Error())
		c.Error("获取文章封面失败")
		return
	}

	desc, err := transform.InterToString(msg["desc"])
	if err != nil {
		logs.Alert("获取文章描述失败", err.Error())
		c.Error("获取文章描述失败")
		return
	}

	keyword, err := transform.InterToString(msg["keyword"])
	if err != nil {
		logs.Alert("获取文章关键字失败", err.Error())
		c.Error("获取文章关键字失败")
		return
	}

	isTop, err := transform.InterToBool(msg["isTop"])
	if err != nil {
		logs.Alert("获取文章置顶失败", err.Error())
		c.Error("获取文章置顶失败")
		return
	}

	hot, err := transform.InterToBool(msg["hot"])
	if err != nil {
		logs.Alert("获取文章热门失败", err.Error())
		c.Error("获取文章热门失败")
		return
	}

	recommend, err := transform.InterToBool(msg["recommend"])
	if err != nil {
		logs.Alert("获取文章推荐失败", err.Error())
		c.Error("获取文章推荐失败")
		return
	}

	prod, err := transform.InterToBool(msg["prod"])
	if err != nil {
		logs.Alert("参数不正确", err.Error())
		c.Error("参数不正确")
		return
	}

	_ = servers.ArticleDetails(title, content, cover, desc, keyword, menuId, categoryId, isTop, hot, recommend, prod)
	//if err != nil {
	//	logs.Alert("参数不正确", err.Error())
	//	c.Error("参数不正确")
	//	return
	//}
	token := qny.UpLoadQiNiuToken()
	c.Success(token)
}
