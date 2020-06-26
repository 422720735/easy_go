package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
)

// 查询可看的文章列表(过滤 隐藏、软删除)
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


func SelectArticleIsTopId() (*models.System, int, error) {
	var top models.System
	var count int
	err := db.DbConn.Select([]string{"id", "top_id", "cover"}).Model(&models.System{}).Count(&count).Find(&top).Error
	if err != nil {
		logger.Info(err.Error())
		return &top, count, err
	}
	return &top, count, nil
}
