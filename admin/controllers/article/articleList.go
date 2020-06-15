package article

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"github.com/astaxie/beego"
	"strconv"
)

type ArticleList struct {
	beego.Controller
}

func (c *ArticleList) Get() {
	c.Layout = "layout/mainLayout.html"

	pageStr := c.GetString("page")
	var page int
	_int, err := strconv.ParseInt(pageStr, 10, 64)
	if err != nil {
		page = 1
	}
	page = int(_int)

	// 类型分类
	articleTypeList, _ := servers.SelectArticleTypeMenuName()
	// 文章list分页查询
	data, total, _ := servers.SelectArticlePageList(page, common.PAGE_SIZE)

	articleList := common.Paginator(page, common.PAGE_SIZE, total, data)

	c.TplName = "pages/article/articleList/articleList.html"
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
	// 数据
	c.Data["articleTypeList"] = articleTypeList

	res, count, err := servers.SelectArticleIsTopId()
	c.Data["articleList"] = articleList

	if count == 1 && err == nil {
		c.Data["top_id"] = res.TopId
	} else {
		c.Data["top_id"] = nil
	}
}
