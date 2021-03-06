package controllers

import (
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	"easy_go/common"
	"easy_go/transform"
	"strconv"
	"strings"
)

type MenuController struct {
	common.BaseController
}

func (c *MenuController) Get() {
	c.Layout = "layout/mainLayout.html"

	c.TplName = "pages/menuSetting/menuSetting.html"
	pageStr := c.GetString("page")
	var page int
	_int, err := strconv.ParseInt(pageStr, 10, 64)
	if err != nil {
		page = 1
	}
	page = int(_int)
	data, total, _ := servers.SelectMenuPage(page, common.PAGE_SIZE)
	menuList := common.Paginator(page, common.PAGE_SIZE, total, data)
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
	c.LayoutSections["Script"] = "script/menuSetting.html"
	c.Data["metaTitle"] = "导航菜单"
	// 数据
	c.Data["menu_data"] = menuList

	c.Data["articleCount"] = SelectCount()
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
	c.Data["metaTitle"] = "新增导航"
	c.Data["articleCount"] = SelectCount()
}

func (c *MenuController) HandleMenuAdd() {
	// 接通了获取数据。
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("获取注册接口数据失败", err.Error())
		c.Error("获取新增路由接口数据失败")
		return
	}

	// 菜单名
	menuName, err := transform.InterToString(msg["menuName"])
	if err != nil {
		logger.Info("获取菜单名失败", err.Error())
		c.Error("获取菜单名失败")
		return
	}

	// 路由
	path, err := transform.InterToString(msg["path"])
	if err != nil {
		logger.Info("获取路由路径失败", err.Error())
		c.Error("获取路由路径失败")
		return
	}
	// icon
	icon, err := transform.InterToString(msg["icon"])
	if err != nil {
		logger.Info("获取路由路径失败", err.Error())
		c.Error("获取路由路径失败")
		return
	}

	// 是否有下级
	isChildSwitch, err := transform.InterToBool(msg["isChildSwitch"])
	if err != nil {
		logger.Info("获取下级菜单失败", err.Error())
		c.Error("获取下级菜单失败")
		return
	}

	err = servers.InsertMenu(menuName, path, icon, isChildSwitch)
	if err != nil {
		logger.Warn("新增menu失败，数据不合法", err.Error())
		c.Error("新增menu失败，数据不合法")
		return
	}
	c.Success("新增menu成功")
}

// 上移和下移
func (c *MenuController) HandMove_up_down() {
	// 修改的数据
	u := c.Ctx.Request.RequestURI

	// 获取当前sort数值
	sortStr := c.GetString("sort")
	var sort int
	_int, err := strconv.Atoi(sortStr)

	// 获取当前sort数值
	page := c.GetString("page")
	if page == "" {
		page = "1"
	}

	if err != nil {
		// 直接走
		logger.Info("获取排序失败", err.Error())
		c.Redirect("/menuSetting?page="+page, 302)
		return
	}
	sort = _int
	if strings.Index(u, "up") > -1 {
		// 上移动
		err = servers.UpdateUpDown(sort, "top")
	} else {
		// 下移动
		err = servers.UpdateUpDown(sort, "bottom")
	}

	if err != nil {
		logger.Warn("上移下移失败", err.Error())
		c.Redirect("/menuSetting?page="+page, 302)
		return
	}

	c.Redirect("/menuSetting?page="+page, 302)
}

// 修改数据
func (c *MenuController) HandChangeChild() {
	// 获取参数
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("获取数据失败", err.Error())
		c.Error("获取更改导航数据失败")
		return
	}
	id, err := transform.InterToInt(msg["id"])
	if err != nil {
		logger.Info("获取数据失败" + err.Error())
		c.Error("获取更改导航数据失败")
		return
	}
	status, err := transform.InterToBool(msg["status"])
	if err != nil {
		logger.Info("获取数据失败" + err.Error())
		c.Error("获取更改导航数据失败")
		return
	}
	showCount, err := servers.UpdateChild(id, status)
	if showCount == 15 {
		logger.Info("当前上架已到最大限！")
		c.Error("当前已上架导航菜单已有15条！")
		return
	}

	if err != nil {
		logger.Warn("数据修改失败" + err.Error())
		c.Error("修改状态失败")
		return
	}
	c.Success("修改成功")
}

// 上架、下架
func (c *MenuController) HandUpdateIssue() {
	page := c.GetString("page")
	if page == "" {
		page = "1"
	}
	idStr := c.GetString("id")
	id, err := strconv.Atoi(idStr)

	if err != nil {
		// 直接走
		logger.Info("获取排序失败", err.Error())
		c.Redirect("/menuSetting?page="+page, 302)
		return
	}

	visible, err := c.GetBool("status")
	if err != nil {
		// 直接走
		logger.Info("获取status失败", err.Error())
		c.Redirect("/menuSetting?page="+page, 302)
		return
	}

	err = servers.UpdateIssue(id, visible)

	if err != nil {
		// 直接走
		logger.Warn("数据修改失败" + err.Error())
		c.Redirect("/menuSetting?page="+page, 302)
		return
	}
	c.Redirect("/menuSetting?page="+page, 302)
}

// 软删除
func (c *MenuController) HandDelete() {
	// 获取参数
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("获取数据失败", err.Error())
		c.Error("获取数据失败")
		return
	}
	id, err := transform.InterToInt(msg["id"])
	if err != nil {
		logger.Info("获取数据失败" + err.Error())
		c.Error("获取数据失败")
		return
	}
	err = servers.DeleteMenu(id)
	if err != nil {
		logger.Warn("删除导航数据失败", err.Error())
		c.Error("删除导航数据失败")
		return
	}
	c.Success("删除成功")
}
