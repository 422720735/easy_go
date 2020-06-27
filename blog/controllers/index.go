package controllers

import (
	"easy_go/admin/models"
	"easy_go/blog/servers"
	"easy_go/common"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

type IndexController struct {
	common.BaseController
}

func (c *IndexController) Index() {
	c.Layout = "base/layout.html"
	c.TplName = "pages/article-list.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["menuUl"] = "base/menu.html"
	c.LayoutSections["welcome"] = "base/welcome.html"
	c.LayoutSections["spin"] = "transition/Spin.html"
	c.LayoutSections["style"] = "style/indexStyle.html"
	c.LayoutSections["script"] = "script/indexScript.html"

	// svg init加载动画
	c.LayoutSections["FirstScreen"] = "style/TweenMaxCss.html"
	c.LayoutSections["Loading"] = "transition/TweenMax.html"
	c.LayoutSections["TweenMaxJs"] = "script/TweenMaxJs.html"
	// canvas背景
	c.LayoutSections["canvasNest"] = "script/canvasNest.html"

	menu, _ := servers.SelectArticleTypeMenuName()

	param1 := c.Ctx.Input.Param(":menu_id")
	param2 := c.Ctx.Input.Param(":category_id")

	title := c.GetString("title")
	pageStr := c.GetString("page")
	var page int
	_int, err := strconv.ParseInt(pageStr, 10, 64)
	if err != nil {
		page = 1
	}
	page = int(_int)

	var data []*models.Article
	var total int64
	var menuId int
	var articleTypeId int

	if param1 == "" && param2 == "" {
		// 查询全部
		data, total, _ = servers.SelectArticlePageList(0, 0, title, page, common.PAGE_SIZE)
	} else if param1 == "" && param2 != "" {
		// 查询 menuId
		id1, err := strconv.Atoi(param2)
		if err == nil {
			menuId = id1
		}

		data, total, _ = servers.SelectArticlePageList(menuId, 0, title, page, common.PAGE_SIZE)
	} else if param1 != "" && param2 != "" {
		// 查询 menuId + articleId
		id1, err := strconv.Atoi(param1)
		if err == nil {
			menuId = id1
		}

		id2, err := strconv.Atoi(param2)
		if err == nil {
			articleTypeId = id2
		}

		data, total, _ = servers.SelectArticlePageList(menuId, articleTypeId, title, page, common.PAGE_SIZE)
	}

	articleList := common.Paginator(page, common.PAGE_SIZE, total, data)

	system, count, err := servers.SelectArticleIsTopId()
	var top_id int
	if count == 1 && err == nil && system.TopId.Valid {
		top_id = int(system.TopId.Int64)
	}

	// 0612_1592817870091_9,0612_1592817870092_1
	var cover string
	coverLen := strings.Split(*&system.Cover, ",")
	rand.Seed(time.Now().UnixNano())
	cover = coverLen[rand.Intn(len(coverLen))]

	if len(coverLen) == 1 && coverLen[0] == "" {
		cover = "/static/images/bg.jpg"
	} else {
		cover = "http://qbv39uqsg.bkt.clouddn.com/" + coverLen[rand.Intn(len(coverLen))]
	}

	c.Data["top_id"] = top_id
	c.Data["menu"] = menu
	c.Data["cover"] = cover
	c.Data["articleList"] = articleList
}
