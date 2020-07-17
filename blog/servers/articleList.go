package servers

import (
	"easy_go/blog/logger"
	"easy_go/db"
	"easy_go/models"
	"github.com/jinzhu/gorm"
)

func SelectArticleIsTopId() (*models.System, int, error) {
	var top models.System
	var count int
	err := db.DbConn.Select([]string{"id", "top_id", "cover"}).Model(&models.System{}).Count(&count).Find(&top).Error
	if err != nil {
		return &top, count, err
	}
	return &top, count, nil
}

func SelectArticleFilterLimit(menuId, articleTypeId int, title string, page, size int) ([]*models.Article, int64, error) {
	var m []*models.Article
	var articleWhere = gorm.Expr("1")

	if title != "" {
		articleWhere = gorm.Expr("articles.title like ?", "%"+title+"%")
	} else if menuId != 0 && articleTypeId != 0 {
		articleWhere = gorm.Expr("articles.menu_id = ? AND articles.category_id = ?", menuId, articleTypeId)
	} else if menuId != 0 && articleTypeId == 0 {
		articleWhere = gorm.Expr("articles.menu_id = ?", menuId)
	} else {
		articleWhere = gorm.Expr("1")
	}

	// 链表查询到所有数据
	article := db.DbConn.Raw("SELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.top_id where visible = 1 and state = 0 and ?", articleWhere)
	total := article.Scan(&m).RowsAffected

	// 排序按照置顶,之后热门、推荐、普通
	article = article.Order("systems.created_time desc,articles.hot desc, articles.recommend desc, articles.sort desc")
	err := article.Limit(size).Offset((page - 1) * size).Find(&m).Error

	if err != nil {
		logger.Info(err.Error())
		return nil, 0, err
	}
	return m, total, err
}



