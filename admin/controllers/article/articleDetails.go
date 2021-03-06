package article

import (
	"easy_go/admin/controllers"
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	"easy_go/common"
	"easy_go/transform"
	"strconv"
	"time"
)

type ArticleDetails struct {
	common.BaseController
}

// add + update
func (c *ArticleDetails) ArticleDetails() {
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
	c.Data["metaTitle"] = "文章详情"
	c.LayoutSections["Style"] = "style/articleDetails.html"
	c.LayoutSections["Script"] = "script/articleDetails.html"
	list, _ := servers.SelectArticleTypeMenuName(false)

	c.Data["title"] = title
	c.Data["id"] = id
	c.Data["list"] = list

	if id == "" {
		// 返回文章的时间戳
		c.Data["CreatedTime"] = time.Now()
		c.Data["UpdateTime"] = nil
	}

	c.Data["articleCount"] = controllers.SelectCount()
}

func (c *ArticleDetails) ArticleDetailsMarkdown() {
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
	c.Data["metaTitle"] = "文章详情"
	list, _ := servers.SelectArticleTypeMenuName(false)

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
		logger.Info("获取文章详情数据失败", err.Error())
		c.Error("获取文章详情数据失败")
		return
	}

	title, err := transform.InterToString(msg["title"])
	if err != nil || title == "" {
		logger.Info("获取文章标题失败")
		c.Error("获取文章标题失败")
		return
	}

	menuId, err := transform.InterToInt(msg["menuId"])
	if err != nil {
		logger.Info("获取文章menu失败", err.Error())
		c.Error("获取文章menu失败")
		return
	}

	categoryId, err := transform.InterToInt(msg["categoryId"])
	if err != nil {
		logger.Info("获取文章类型失败", err.Error())
		c.Error("获取文章类型失败")
		return
	}

	content, err := transform.InterToString(msg["content"])
	if err != nil || content == "" {
		logger.Info("获取文章内容失败")
		c.Error("获取文章内容失败")
		return
	}

	cover, _ := transform.InterToString(msg["cover"])

	desc, err := transform.InterToString(msg["desc"])
	if err != nil {
		logger.Info("获取文章描述失败", err.Error())
		c.Error("获取文章描述失败")
		return
	}

	tags, _ := transform.InterToString(msg["tags"])

	keyword, err := transform.InterToString(msg["keyword"])
	if err != nil {
		logger.Info("获取文章关键字失败", err.Error())
		c.Error("获取文章关键字失败")
		return
	}

	isTop, err := transform.InterToBool(msg["isTop"])
	if err != nil {
		logger.Info("获取文章置顶失败", err.Error())
		c.Error("获取文章置顶失败")
		return
	}

	hot, err := transform.InterToBool(msg["hot"])
	if err != nil {
		logger.Info("获取文章热门失败", err.Error())
		c.Error("获取文章热门失败")
		return
	}

	recommend, err := transform.InterToBool(msg["recommend"])
	if err != nil {
		logger.Info("获取文章推荐失败", err.Error())
		c.Error("获取文章推荐失败")
		return
	}

	prod, err := transform.InterToBool(msg["prod"])
	if err != nil {
		logger.Info("参数不正确", err.Error())
		c.Error("参数不正确")
		return
	}

	markdown, err := transform.InterToBool(msg["markdown"])
	if err != nil {
		logger.Info("文章内容类型不正确", err.Error())
		c.Error("文章内容类型不正确")
		return
	}

	err = servers.IsArticleTake(title)
	if err != nil {
		logger.Debug("", err.Error())
		c.Error("已经存在相同的文章")
		return
	}

	err = servers.InsertArticleDetails(title, content, cover, desc, tags, keyword, menuId, categoryId, isTop, hot, recommend, prod, markdown)
	if err != nil {
		logger.Info("保存数据失败", err.Error())
		c.Error("保存数据失败")
		return
	}

	controllers.ArticleCount = -1
	c.Success("新增文章成功")
}

func (c *ArticleDetails) HandArticleDetailsUpdate() {
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("获取文章详情数据失败", err.Error())
		c.Error("获取文章详情数据失败")
		return
	}

	id, err := transform.InterToInt(msg["id"])
	if err != nil {
		logger.Info("获取文章id失败", err.Error())
		c.Error("获取文章id失败")
		return
	}

	title, err := transform.InterToString(msg["title"])
	if err != nil || title == "" {
		logger.Info("获取文章标题失败")
		c.Error("获取文章标题失败")
		return
	}

	menuId, err := transform.InterToInt(msg["menuId"])
	if err != nil {
		logger.Info("获取文章menu失败", err.Error())
		c.Error("获取文章menu失败")
		return
	}

	categoryId, err := transform.InterToInt(msg["categoryId"])
	if err != nil {
		logger.Info("获取文章类型失败", err.Error())
		c.Error("获取文章类型失败")
		return
	}

	content, err := transform.InterToString(msg["content"])
	if err != nil || content == "" {
		logger.Info("获取文章内容失败")
		c.Error("获取文章内容失败")
		return
	}

	cover, _ := transform.InterToString(msg["cover"])

	desc, err := transform.InterToString(msg["desc"])
	if err != nil {
		logger.Info("获取文章描述失败", err.Error())
		c.Error("获取文章描述失败")
		return
	}

	tags, _ := transform.InterToString(msg["tags"])

	keyword, err := transform.InterToString(msg["keyword"])
	if err != nil {
		logger.Info("获取文章关键字失败", err.Error())
		c.Error("获取文章关键字失败")
		return
	}

	isTop, err := transform.InterToBool(msg["isTop"])
	if err != nil {
		logger.Info("获取文章置顶失败", err.Error())
		c.Error("获取文章置顶失败")
		return
	}

	hot, err := transform.InterToBool(msg["hot"])
	if err != nil {
		logger.Info("获取文章热门失败", err.Error())
		c.Error("获取文章热门失败")
		return
	}

	recommend, err := transform.InterToBool(msg["recommend"])
	if err != nil {
		logger.Info("获取文章推荐失败", err.Error())
		c.Error("获取文章推荐失败")
		return
	}

	prod, err := transform.InterToBool(msg["prod"])
	if err != nil {
		logger.Info("参数不正确", err.Error())
		c.Error("参数不正确")
		return
	}

	markdown, err := transform.InterToBool(msg["markdown"])
	if err != nil {
		logger.Info("文章内容类型不正确", err.Error())
		c.Error("文章内容类型不正确")
		return
	}

	err = servers.UpdateArticleDetails(title, content, cover, desc, tags, keyword, menuId, categoryId, isTop, hot, recommend, prod, markdown, id)

	if err != nil {
		logger.Warn("文章编辑失败", err.Error())
		c.Error("文章编辑失败")
		return
	}

	controllers.ArticleCount = -1
	c.Success("文章编辑成功")
}

func (c *ArticleDetails) ArticleAll() {
	idStr := c.GetString("id")
	var id int
	id, err := strconv.Atoi(idStr)

	if err != nil {
		// 如果有值才去查询
		logger.Info("获取数据失败", err.Error())
		c.Error("获取数据失败")
		return
	}
	res, err := servers.SelectArticleDetails(id)
	if err != nil {
		logger.Info("查询失败", err.Error())
		c.Error("查询失败")
	}
	c.Success(res)
}
