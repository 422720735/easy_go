package servers

import (
	"database/sql"
	"easy_go/admin/db"
	"easy_go/admin/models"
	"github.com/astaxie/beego"
)

func ArticleDetails(title, content, cover, desc, keyword string, menuId, categoryId int, isTop, hot, recommend, prod bool, id ...int) error {
	c := &models.ArticleContent{
		Content: content,
	}

	// 0 草稿箱 1发布 2垃圾箱
	var save int

	if prod {
		save = 1
	} else {
		save = 0
	}

	a := &models.Article{
		Title:      title,
		Cover:      cover,
		Desc:       desc,
		MenuId:     menuId,
		Keyword:    sql.NullString{String: keyword, Valid: false},
		CategoryId: sql.NullInt64{Int64: int64(categoryId), Valid: false},
		IsTop:      isTop,
		Hot:        hot,
		Recommend:  recommend,
		Type:       save,
	}


	// 开始事务
	tx := db.DbConn.Begin()

	// 如果需要置顶，新增文章 内部 最后根据返回的id 修改置顶id
	err := db.DbConn.Create(&a).Error

	if err != nil {
		beego.Info(err, "1")
		tx.Rollback()
	}

	err = db.DbConn.Create(&c).Error
	if err != nil {
		beego.Info(err, "2")
		tx.Rollback()
	}

	var count int
	s := &models.Special{
		HotId: sql.NullInt64{Int64: int64(a.Id), Valid: false},
	}
	err = db.DbConn.Model(&models.Special{}).Count(&count).Error
	if err != nil {
		beego.Info(err, "3")
		tx.Rollback()
	}
	if count == 0 {
		err = db.DbConn.Create(&s).Error
	} else {
		err = tx.Model(&s).Update("hot_id", &s.HotId).Error
	}
	if err != nil {
		beego.Info(err, "4")
		tx.Rollback()
	}
	tx.Commit()
	return nil
}
