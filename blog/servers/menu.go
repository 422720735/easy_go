package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
)

// 查询所有的类型及与之相对应的父级menu
func SelectArticleTypeMenuName() ([]interface{}, error) {
	var menuList []*models.MenuSetting
	menu := db.DbConn.Select([]string{"id", "menu_name", "icon", "child_status", "visible"}).Model(&menuList)

	// 文章类型 要过滤下架和软删除的
	var articleList []*models.ArticleType
	article := db.DbConn.Select([]string{"id", "article_name", "menu_id"}).Model(&articleList).Where("visible = ? and state = ?", true, false)

	err := menu.Find(&menuList).Error
	if err != nil {
		return nil, err
	}

	err = article.Find(&articleList).Error
	if err != nil {
		logger.Info(err.Error())
		return nil, err
	}

	var result []interface{}
	for j := 0; j < len(menuList); j++ {
		// 只装载上架的数据
		if menuList[j].Visible {
			menuItem := make(map[string]interface{})
			menuItem["id"] = *&menuList[j].Id
			menuItem["name"] = *&menuList[j].MenuName
			menuItem["icon"] = *&menuList[j].Icon
			menuItem["child_status"] = *&menuList[j].ChildStatus
			var arr []interface{}
			for i := 0; i < len(articleList); i++ {
				item := make(map[string]interface{})
				if articleList[i].MenuId == *&menuList[j].Id {
					// 只装载上架的数据
					if *&menuList[j].ChildStatus {
						item["id"] = articleList[i].Id
						item["name"] = articleList[i].ArticleName
						item["menu_id"] = articleList[i].MenuId
						arr = append(arr, item)
						menuItem["child"] = arr
					}
				}
			}
			result = append(result, menuItem)
		}
	}

	return result, nil
}

func SelectArticlePageList(menuId, articleTypeId int, title string, page, size int) ([]*models.Article, int64, error) {
	// 如果查询全部则不需要查询menu是不是显示隐藏
	var menu models.MenuSetting
	var articleList []*models.Article
	var total int64
	if menuId != 0 {
		err := db.DbConn.Select([]string{"id, visible", "state"}).Model(&models.MenuSetting{}).Where("id = ?", menuId).Find(&menu).Error
		if err != nil {
			logger.Info("查询文章列表失败", err.Error())
			return articleList, 0, err
		}

		// 如果当前menu隐藏或者或者软删除则不继续往下查询
		if menu.Visible == false || menu.State {
			return articleList, 0, err
		}
	}

	article := db.DbConn.Model(&articleList).Where("state = ?", false).Where("visible = ? and state = ?", true, false)

	if menuId != 0 {
		article = article.Where("menu_id = ?", menuId)
	}

	if articleTypeId !=0{
		article = article.Where("category_id = ?", articleTypeId)
	}

	if title != "" {
		article = article.Where("title LIKE ?", "%"+title+"%")
	}
	// 获取总条数
	err := article.Count(&total).Error

	if err != nil {
		logger.Info(err.Error())
		return articleList, 0, err
	}

	err = article.Limit(size).Offset((page - 1) * size).Order("sort desc").Find(&articleList).Error
	if err != nil {
		logger.Error(err.Error())
		return articleList, 0, err
	}

	return articleList, total, nil
}
