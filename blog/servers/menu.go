package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
)

// 查询所有不是软删除跟隐藏的 导航数据及文章类型数据
func SelectArticleTypeMenuName() ([]interface{}, error) {
	var menuList []*models.MenuSetting
	menu := db.DbConn.Select([]string{"id", "menu_name", "icon", "child_status", "visible"}).Model(&menuList)

	// 文章类型 要过滤下架和软删除的
	var articleList []*models.ArticleType
	article := db.DbConn.Select([]string{"id", "article_name", "menu_id"}).Model(&articleList).Where("visible = ? and state = ?", true, false)

	err := menu.Find(&menuList).Error
	if err != nil {
		logger.Info(err.Error())
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
