package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
	"errors"
)

// 查询可看的文章列表(过滤 隐藏、软删除)
func SelectArticlePageListOld(menuId, articleTypeId int, title string, page, size int) ([]*models.Article, int64, error) {
	// 如果page第一页侧第一条显示置顶信息
	//
	var articleId int
	if page == 1 {
		system, err := SelectTop()
		if err == nil || system == nil {
			articleTypeId = int(system.TopId.Int64)
		}
	}

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

	if articleId != 0 {
		// 优先置顶查询
		// article.Order("id = ?", articleId)
	}

	if menuId != 0 {
		article = article.Where("menu_id = ?", menuId)
	}

	if articleTypeId != 0 {
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


	/******************************************************************************************************************/
	// 如果page第一页侧第一条显示置顶信息
	var articleTopId int
	system, _ := SelectTop()
	if system == nil {
		articleTopId = int(system.TopId.Int64)
	}



	article := db.DbConn.Model(&articleList).Where("state = ?", false).Where("visible = ? and state = ?", true, false)


	if menuId != 0 {
		article = article.Where("menu_id = ?", menuId)
	}

	if articleTypeId != 0 {
		article = article.Where("category_id = ?", articleTypeId)
	}

	if title != "" {
		article = article.Where("title LIKE ?", "%"+title+"%")
	}

	if articleTopId != 0 {
		// 优先置顶查询
		// article.Order("id = ?", articleId)
		article.Where("id", articleTopId).Raw("is null order by case when id = ?", articleTopId)
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


func SelectTop() (*models.System, error) {
	var s models.System
	err := db.DbConn.Select([]string{"id", "top_id", "cover"}).Model(&models.System{}).Find(&s).Error
	if err != nil {
		logger.Info(err.Error())
		return nil, err
	}

	if s.TopId.Valid == false {
		logger.Info("查询置顶失败，当前暂无置顶数据")
		return nil, errors.New("查询置顶失败，当前暂无置顶数据")
	}

	return &s, nil
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
