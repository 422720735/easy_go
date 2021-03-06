package article

import (
	"easy_go/admin/controllers"
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	"easy_go/common"
	"easy_go/transform"
	"strconv"
	"strings"
)

type ArticleList struct {
	common.BaseController
}

func (c *ArticleList) Get() {
	c.Layout = "layout/mainLayout.html"
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
	c.LayoutSections["Script"] = "script/articleList.html"
	c.Data["metaTitle"] = "文章列表"
	// req
	pageStr := c.GetString("page")
	var page int
	page, err := strconv.Atoi(pageStr)
	if err != nil {
		page = 1
	}

	title := c.GetString("title")
	tag := c.GetString("tag")
	visible := c.GetString("visible")

	// 类型分类
	articleTypeList, _ := servers.SelectArticleTypeMenuName(true)
	// 文章list分页查询
	data, total, _ := servers.SelectArticlePageList(title, tag, visible, page, common.PAGE_SIZE)

	articleList := common.Paginator(page, common.PAGE_SIZE, total, data)

	// res
	c.Data["articleTypeList"] = articleTypeList

	res, count, err := servers.SelectArticleIsTopId()
	var top_id int
	if count == 1 && err == nil && res.TopId.Valid {
		top_id = int(res.TopId.Int64)
	}

	if visible == "" {
		visible = "0"
	}
	c.Data["top_id"] = top_id
	c.Data["visible_id"] = visible
	c.Data["articleList"] = articleList

	c.Data["articleCount"] = controllers.SelectCount()
}

// 上移和下移
func (c *ArticleList) HandMove_up_down() {
	// 修改的数据
	u := c.Ctx.Request.RequestURI

	// 获取当前sort数值
	sortStr := c.GetString("sort")
	var sort int
	atoi, err := strconv.Atoi(sortStr)

	// 获取当前sort数值
	page := c.GetString("page")
	if page == "" {
		page = "1"
	}

	if err != nil {
		// 直接走
		c.Redirect("/article/list?page="+page, 302)
		return
	}
	sort = atoi
	if strings.Index(u, "up") > -1 {
		// 上移动
		err = servers.ArticleUpdateUpDown(sort, "top")
	} else {
		// 下移动
		err = servers.ArticleUpdateUpDown(sort, "bottom")
	}

	if err != nil {
		logger.Info("上移下移失败", err.Error())
		c.Redirect("/article/list?page="+page, 302)
		return
	}

	c.Redirect("/article/list?page="+page, 302)
}

// 上下架
func (c *ArticleList) HandUpdateIssue() {
	page := c.GetString("page")
	if page == "" {
		page = "1"
	}
	idStr := c.GetString("id")
	id, err := strconv.Atoi(idStr)

	if err != nil {
		// 直接走
		c.Redirect("/article/list?page="+page, 302)
		return
	}

	visible, err := c.GetBool("status")
	if err != nil {
		// 直接走
		c.Redirect("/article/list?page="+page, 302)
		return
	}

	err = servers.ArticleUpdateIssue(id, visible)
	if err != nil {
		// 直接走
		logger.Warn("数据修改失败" + err.Error())
		c.Redirect("/article/list?page="+page, 302)
		return
	}

	controllers.ArticleCount = -1
	c.Redirect("/article/list?page="+page, 302)
}

// 软删除
func (c *ArticleList) HandDelete() {
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
	err = servers.ArticleDeleteMenu(id)
	if err != nil {
		logger.Warn("删除文章数据失败", err.Error())
		c.Error("删除文章数据失败")
		return
	}

	controllers.ArticleCount = -1
	c.Success("删除成功")
}
