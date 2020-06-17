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

	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort desc").Find(&articleList).Error
	if err != nil {
		return nil, 0, err
	}

	return articleList, total, nil
}

func SelectArticleIsTopId() (models.Special, int, error) {
	var top models.Special
	var count int
	err := db.DbConn.Select([]string{"id", "top_id"}).Model(&models.Special{}).Count(&count).Find(&top).Error
	if err != nil {
		return top, count, err
	}
	return top, count, nil
}

//func SelectArticleIsTopId() (models.Special, int, error) {
//	var count int
//	err := db.DbConn.Model(&models.Special{}).Count(&count).Error
//	if err != nil {
//		return models.Special{}, 0, err
//	} else if count == 0{
//		return models.Special{}, 0, nil
//	}
//	return models.Special{}, 1, nil
//}
