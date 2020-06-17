package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"github.com/astaxie/beego/logs"
	"time"
)

func SelectArticlePageList(page, size int) ([]*models.Article, int64, error) {
	var articleList []*models.Article
	var total int64

	// 获取总条数
	err := db.DbConn.Model(&articleList).Count(&total).Error

	if err != nil {
		logs.Critical(err.Error())
		return nil, 0, err
	}

	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort desc").Find(&articleList).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, 0, err
	}

	return articleList, total, nil
}

func SelectArticleIsTopId() (models.Special, int, error) {
	var top models.Special
	var count int
	err := db.DbConn.Select([]string{"id", "top_id"}).Model(&models.Special{}).Count(&count).Find(&top).Error
	if err != nil {
		logs.Critical(err.Error())
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
		logs.Critical(err.Error())
		return err
	}
	if str == "top" {
		err = db.DbConn.Model(&models.Article{}).Where("sort = ?", sort-1).Find(&prev_next).Error
		sortNext = sort - 1
		if err != nil {
			logs.Critical(err.Error())
			return err
		}
	} else {
		err = db.DbConn.Model(&models.Article{}).Where("sort = ?", sort+1).Find(&prev_next).Error
		sortNext = sort + 1
		if err != nil {
			logs.Critical(err.Error())
			return err
		}
	}
	// 开始事务
	tx := db.DbConn.Begin()
	// 修改数据
	err = tx.Model(&current).Updates(map[string]interface{}{"sort": sortNext, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		tx.Rollback()
	}
	err = tx.Model(&prev_next).Updates(map[string]interface{}{"sort": sort, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		tx.Rollback()
	}
	tx.Commit()
	return nil
}

func ArticleUpdateIssue(id int, status bool) error {
	err := db.DbConn.Model(&models.Article{}).Where("id = ?", id).Updates(map[string]interface{}{"visible": !status, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		return err
	}
	return nil
}

func ArticleDeleteMenu(id int) error {
	err := db.DbConn.Model(&models.Article{}).Where("id = ?", id).Updates(map[string]interface{}{"state": true, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		return err
	}
	return nil
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
