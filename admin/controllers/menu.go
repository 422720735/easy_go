package controllers

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"strconv"

	"github.com/astaxie/beego/logs"
)

type MenuController struct {
	common.BaseController
}

func (c *MenuController) Get() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/menuSetting/menuSetting.html"
	pageStr := c.GetString("page")
	var page int
	int, err := strconv.Atoi(pageStr)
	if err != nil {
		page = 1
	}
	page = int
	servers.SelectMenuPage(page)
	// 查询页面数据给前端
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
	c.LayoutSections["Script"] = "script/welcome.html"
}

func (c *MenuController) Add() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/menuSetting/menuAdd.html"
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
}

// 路由菜单权限详情页面
func (c *MenuController) Info() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/menuSetting/menuInfo.html"
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

func (c *MenuController) HandleMenuAdd() {
	// 接通了获取数据。
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logs.Alert("获取注册接口数据失败", err.Error())
		c.Error("获取新增路由接口数据失败")
		return
	}
	// 菜单名
	menuName, err := transform.InterToString(msg["menuName"])
	if err != nil {
		logs.Alert("获取菜单名失败", err.Error())
		c.Error("获取菜单名失败")
		return
	}
	// 路由
	path, err := transform.InterToString(msg["path"])
	if err != nil {
		logs.Alert("获取路由路径失败", err.Error())
		c.Error("获取路由路径失败")
		return
	}
	// icon
	icon, err := transform.InterToString(msg["icon"])
	if err != nil {
		logs.Alert("获取路由路径失败", err.Error())
		c.Error("获取路由路径失败")
		return
	}
	// 是否有下级
	isChildSwitch, err := transform.InterToBool(msg["isChildSwitch"])
	if err != nil {
		logs.Alert("获取下级菜单失败", err.Error())
		c.Error("获取下级菜单失败")
		return
	}
	// 热门推荐
	isHotSwitch, err := transform.InterToBool(msg["isHotSwitch"])
	if err != nil {
		logs.Alert("获取热门推荐失败", err.Error())
		c.Error("获取热门推荐失败")
		return
	}
	err = servers.InsertMenu(menuName, path, icon, isChildSwitch, isHotSwitch)
	if err != nil {
		logs.Alert("新增menu失败，数据不合法", err.Error())
		c.Error("新增menu失败，数据不合法")
		return
	}
	c.Success("新增menu成功")
}
