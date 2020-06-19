package article

import (
	"easy_go/admin/common"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"github.com/astaxie/beego/logs"
	"strconv"
	"strings"
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
	c.LayoutSections["Script"] = "script/articleType/articleTypeList.html"
	c.LayoutSections["ScriptMessage"] = "script/message.html"

	// req
	tag := c.GetString("tag")

	// 类型分类
	menAll, _ := servers.SelectArticleMenu("") // 传""不筛选
	typeLimit, _ := servers.SelectArticleTypeList(tag)

	// res
	c.Data["menu_all"] = menAll
	c.Data["article_type_limit"] = typeLimit
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

// 上下架
func (c *ArticleControllerType) HandArticleTypeUpdateIssue() {
	idStr := c.GetString("id")
	id, err := strconv.Atoi(idStr)

	if err != nil {
		// 直接走
		c.Redirect("/article/type", 302)
		return
	}

	visible, err := c.GetBool("status")
	if err != nil {
		// 直接走
		c.Redirect("/article/type", 302)
		return
	}

	err = servers.ArticleTypeUpdateIssue(id, visible)
	if err != nil {
		// 直接走
		logs.Warn("数据修改失败" + err.Error())
		c.Redirect("/article/type", 302)
		return
	}

	c.Redirect("/article/type", 302)
}

// 文章类型软删除
func (c *ArticleControllerType) HandArticleTypeDelete() {
	// 获取参数
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logs.Alert("获取数据失败", err.Error())
		c.Error("获取数据失败")
		return
	}
	id, err := transform.InterToInt(msg["id"])
	if err != nil {
		logs.Alert("获取数据失败" + err.Error())
		c.Error("获取数据失败")
		return
	}
	err = servers.ArticleTypeDeleteMenu(id)
	if err != nil {
		logs.Alert("删除文章类型数据失败", err.Error())
		c.Error("删除文章类型数据失败")
		return
	}
	c.Success("删除成功")
}

// 上移和下移
func (c *ArticleControllerType) HandArticleType_up_down() {
	// 修改的数据
	u := c.Ctx.Request.RequestURI

	// 获取当前sort数值
	sortStr := c.GetString("sort")
	var sort int
	atoi, err := strconv.Atoi(sortStr)

	sort = atoi
	if strings.Index(u, "up") > -1 {
		// 上移动
		err = servers.ArticleTypeUpdateUpDown(sort, "top")
	} else {
		// 下移动
		err = servers.ArticleTypeUpdateUpDown(sort, "bottom")
	}

	if err != nil {
		logs.Critical("上移下移失败", err.Error())
		c.Redirect("/article/type", 302)
	}

	c.Redirect("/article/type", 302)
}