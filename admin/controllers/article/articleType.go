package article

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"github.com/astaxie/beego/logs"
	"strconv"
)

type ArticleControllerType struct {
	common.BaseController
}

func (c *ArticleControllerType) Get() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/article/articleType/articleType.html"

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
	c.LayoutSections["ScriptMessage"] = "script/message.html"

	// req
	pageStr := c.GetString("page")
	var page int
	_int, err := strconv.ParseInt(pageStr, 10, 64)
	if err != nil {
		page = 1
	}
	page = int(_int)

	tag := c.GetString("tag")

	// 类型分类
	articleTypeList, _ := servers.SelectArticleTypeMenuName()

	data, total, _ := servers.SelectArticleTypeList(tag, page, common.PAGE_SIZE)
	articleTypelist := common.Paginator(page, common.PAGE_SIZE, total, data)

	// res
	c.Data["articleTypeList"] = articleTypeList
	c.Data["article_type_list"] = articleTypelist
}

func (c *ArticleControllerType) Add() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/article/articleType/articleTypeAdd.html"

	// 查询所有的导航菜单返回给页面。
	menuData, err := servers.SelectMenuAll()
	if err != nil {
		logs.Alert("获取全部导航数据失败", err.Error())
	}

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

	c.LayoutSections["Style"] = "style/menuSetting.html"
	c.LayoutSections["Script"] = "script/articleType/articleTypeAdd.html"
	c.LayoutSections["ScriptMessage"] = "script/message.html"

	// 数据
	c.Data["menu_data"] = menuData
}

// 添加文章类型
func (c *ArticleControllerType) HandArticleTypeAdd() {
	// 接通了获取数据。
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logs.Alert("获取注册接口数据失败", err.Error())
		c.Error("获取新增路由接口数据失败")
		return
	}

	// 类型名称
	articleName, err := transform.InterToString(msg["articleName"])
	if err != nil {
		logs.Alert("新增文章类型失败，数据不合法", err.Error())
		c.Error("新增文章类型失败，数据不合法")
		return
	}

	// 关键字
	KeyWord, err := transform.InterToString(msg["KeyWord"])
	if err != nil {
		logs.Alert("新增文章类型失败，数据不合法", err.Error())
		c.Error("新增文章类型失败，数据不合法")
		return
	}

	// 父级
	menuId, err := transform.InterToInt(msg["menuId"])
	if err != nil {
		logs.Alert("新增文章类型失败，数据不合法", err.Error())
		c.Error("新增文章类型失败，数据不合法")
		return
	}

	err = servers.IsArticleTypeTake(articleName, KeyWord)
	if err != nil {
		logs.Alert("", err.Error())
		c.Error("已经存在相同的文章类型或关键字")
		return
	}

	// 新增文章类型
	err = servers.InsertArticleType(articleName, KeyWord, menuId)
	if err != nil {
		logs.Alert("新增文章类型失败，数据不合法", err.Error())
		c.Error("新增文章类型失败，数据不合法")
		c.Error("新增文章类型失败")
		return
	}

	c.Success("新增文章类型成功")
}
