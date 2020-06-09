package article

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
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
	c.Success(msg)
}