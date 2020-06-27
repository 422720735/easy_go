package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
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
