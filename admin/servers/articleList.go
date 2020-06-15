package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
)

func SelectArticlePageList(page, size int) ([]*models.Article, int64, error) {
	var articleList []*models.Article
	var total int64

	// 获取总条数
	err := db.DbConn.Model(&articleList).Count(&total).Error

	if err != nil {
		return nil, 0, err
	}
	
	err = db.DbConn.Limit(size).Offset((page - 1) *size).Order("sort desc").Find(&articleList).Error
	if err != nil {
		return nil, 0, err
	}

	return articleList, total, nil
}
