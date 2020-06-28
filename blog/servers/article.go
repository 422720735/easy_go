package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
	"github.com/jinzhu/gorm"
)

func SelectFilterLimit() ([]*models.Article, error) {
	var m []*models.Article
	//err := db.DbConn.Raw("SELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.top_id  ORDER BY systems.created_time desc,articles.hot desc").Find(&m).Error
	err := db.DbConn.Raw("SELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.top_id  ORDER BY systems.created_time desc,articles.hot desc").Limit(2).Offset((2 - 1) * 2).Find(&m).Error
	if err != nil {
		logger.Info("按条件查询失败", err.Error())
		return nil, err
	}

	return m, err
}

func SelectArticleFilterLimit(menuId, articleTypeId int, title string, page, size int) ([]*models.Article, int64, error) {
	var m []*models.Article
	var a []*models.Article

	var articleWhere = gorm.Expr("1")
	var err error

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
	total := article.Scan(&a).RowsAffected

	// 排序按照置顶 之后热门
	article = article.Order("systems.created_time desc,articles.hot desc, articles.recommend desc")
	err = article.Limit(size).Offset((page - 1) * size).Find(&m).Error

	if err != nil {
		logger.Info(err.Error())
		return nil, 0, err
	}
	return m, total, err
}
