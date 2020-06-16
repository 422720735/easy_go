package servers

import (
	"database/sql"
	"easy_go/admin/db"
	"easy_go/admin/models"
	"errors"
	"time"
)

// 查看数据库是不是有相同的文章
func IsArticleTake(title string) error {
	// 新增先查询数据是不是有该条数据
	var count int
	err := db.DbConn.Select([]string{"title"}).Model(&models.Article{}).Where("title = ?", title).Count(&count).Error
	if err != nil {
		return err
	}
	if count != 0 {
		return errors.New("已经存在相同的文章")
	}
	return nil
}

func ArticleDetails(title, content, cover, desc, keyword string, menuId, categoryId int, isTop, hot, recommend, prod bool, id ...int) error {
	// 0 草稿箱 1发布 2垃圾箱
	var save int

	if prod {
		save = 1
	} else {
		save = 0
	}

	a := &models.Article{
		Title: title,
		Cover: sql.NullString{
			String: cover,
			Valid:  true,
		},
		Desc:        desc,
		MenuId:      menuId,
		IsTop:       isTop,
		Hot:         hot,
		Recommend:   recommend,
		Type:        save,
		CreatedTime: time.Now(),
	}

	if categoryId != -1 {
		a.CategoryId = sql.NullInt64{Int64: int64(categoryId), Valid: true}
	}

	if keyword != "" {
		a.Keyword = sql.NullString{String: keyword, Valid: true}
	}

	var count int
	err := db.DbConn.Select([]string{"id"}).Model(&models.Article{}).Count(&count).Error
	if err == nil {
		a.Sort = count + 1
	}

	// 开始事务
	tx := db.DbConn.Begin()
	defer tx.Commit()
	// 如果需要置顶，新增文章 内部 最后根据返回的id 修改置顶id
	err = tx.Create(&a).Error
	if err != nil {
		tx.Rollback()
		return err
	}

	c := &models.ArticleContent{
		Content: content,
		ArticleId: a.Id,
	}

	err = tx.Create(&c).Error
	if err != nil {
		tx.Rollback()
		return err
	}

	if isTop {
		var count int
		s := models.Special{
			TopId: sql.NullInt64{Int64: int64(a.Id), Valid: true},
			CreatedTime: time.Now(),
		}
		err = tx.Select([]string{"id"}).Model(&models.Special{}).Count(&count).Error
		if err != nil {
			tx.Rollback()
			return err
		}
		if count == 0 {
			err = db.DbConn.Create(&s).Error
		} else {
			s.UpdateTime = sql.NullTime{
				Time: time.Now(),
				Valid: true,
			}
			err = tx.Model(&s).Update("hot_id", a.Id).Error
		}

		if err != nil {
			tx.Rollback()
			return err
		}
	}

	return nil
}
