package article

import (
	"easy_go/admin/servers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

type ArticleControllerType struct {
	beego.Controller
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
	c.LayoutSections["Script"] = "script/menuSettingAdd.html"

	// 数据
	c.Data["menu_data"] = menuData
}
