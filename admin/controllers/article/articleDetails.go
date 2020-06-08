package article

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"github.com/astaxie/beego"
	"time"
)

type ArticleDetails struct {
	beego.Controller
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

	list, _ := servers.SelectArticleTypeMenuName()

	beego.Info(list, "hishiuhif")
	c.Data["title"] = title
	c.Data["id"] = id
	c.Data["list"] = list

	// 返回文章的时间戳
	c.Data["time"] = time.Now()
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

	list, _ := servers.SelectArticleTypeMenuName()

	beego.Info(list, "hishiuhif")
	c.Data["title"] = title
	c.Data["id"] = id
	c.Data["list"] = list

	// 返回文章的时间戳
	c.Data["time"] = time.Now()
}

func (c *ArticleDetails) AddOfUpdateTest() {
	list, _ := servers.SelectArticleTypeMenuName()

	common.Echo((*common.BaseController)(c), 1, list)
}
