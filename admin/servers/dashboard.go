package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/logger"
	"easy_go/models"
)

/*查询最后更新的数据*/
func SelectLastArticle() *models.Article {
	var article models.Article
	err := db.DbConn.Model(&models.Article{}).Order("update_time desc").First(&article).Error
	if err != nil {
		logger.Info(err.Error())
	}

	if &article == nil{
		err = db.DbConn.Model(&models.Article{}).Order("created_time desc").First(&article).Error
	}

	if err != nil {
		logger.Info(err.Error())
	}

	return &article
}
