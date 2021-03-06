package servers

import (
	"easy_go/admin/logger"
	"easy_go/db"
	"easy_go/models"
	"strings"
	"time"
)

func SelectArticlePageList(title, tag, visible string, page, size int) ([]*models.Article, int64, error) {
	var articleList []*models.Article
	var total int64
	article := db.DbConn.Model(&articleList)

	tags := strings.Split(tag, ",")
	if len(tags) == 1 && tags[0] != "" {
		article = article.Where("menu_id = ?", tags[0])
	} else if len(tags) == 2 {
		article = article.Where("category_id = ?", tags[1])
	}

	if visible == "1" {
		article = article.Where("visible = ?", true)
	} else if visible == "2" {
		article = article.Where("visible = ?", false)
	}

	if title != "" {
		article = article.Where("title LIKE ?", "%"+title+"%")
	}
	// 获取总条数
	err := article.Count(&total).Error

	if err != nil {
		logger.Info(err.Error())
		return nil, 0, err
	}

	err = article.Limit(size).Offset((page - 1) * size).Order("sort desc").Find(&articleList).Error
	if err != nil {
		logger.Error(err.Error())
		return nil, 0, err
	}

	return articleList, total, nil
}

func SelectArticleIsTopId() (models.System, int, error) {
	var top models.System
	var count int
	err := db.DbConn.Select([]string{"id", "top_id"}).Model(&models.System{}).Count(&count).Find(&top).Error
	if err != nil {
		logger.Info(err.Error())
		return top, count, err
	}
	return top, count, nil
}

// 上移下移
func ArticleUpdateUpDown(sort int, str string) error {
	// 上移动, 需要修改前一条
	var err error
	var current models.Article
	var prev_next models.Article
	var sortNext int
	// 查询当前数据
	err = db.DbConn.Model(&models.Article{}).Where("sort = ?", sort).Find(&current).Error
	if err != nil {
		logger.Info(err.Error())
		return err
	}
	if str == "top" {
		err = db.DbConn.Model(&models.Article{}).Where("sort = ?", sort-1).Find(&prev_next).Error
		sortNext = sort - 1
		if err != nil {
			logger.Info(err.Error())
			return err
		}
	} else {
		err = db.DbConn.Model(&models.Article{}).Where("sort = ?", sort+1).Find(&prev_next).Error
		sortNext = sort + 1
		if err != nil {
			logger.Info(err.Error())
			return err
		}
	}
	// 开始事务
	tx := db.DbConn.Begin()
	// 修改数据
	err = tx.Model(&current).Updates(map[string]interface{}{"sort": sortNext, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		tx.Rollback()
	}
	err = tx.Model(&prev_next).Updates(map[string]interface{}{"sort": sort, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		tx.Rollback()
	}
	tx.Commit()
	return nil
}

func ArticleUpdateIssue(id int, status bool) error {
	err := db.DbConn.Model(&models.Article{}).Where("id = ?", id).Updates(map[string]interface{}{"visible": !status, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		return err
	}
	return nil
}

func ArticleDeleteMenu(id int) error {
	err := db.DbConn.Model(&models.Article{}).Where("id = ?", id).Updates(map[string]interface{}{"state": true, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		return err
	}
	return nil
}

func SelectArticleCount() (int, error) {
	var count int
	err := db.DbConn.Select("id").Where("visible = ? and state = ?", true, false).Model(&models.Article{}).Count(&count).Error

	if err != nil && count > 0 {
		return 0, err
	}
	return count, nil
}
