package servers

import (
	"database/sql"
	models2 "easy_go-github/admin/models"
	"easy_go/admin/db"
	"easy_go/admin/models"
	"errors"
	"github.com/astaxie/beego/logs"
	"github.com/jinzhu/gorm"
	"time"
)

// 查看数据库是不是有相同的文章
func IsArticleTake(title string) error {
	// 新增先查询数据是不是有该条数据
	var count int
	err := db.DbConn.Select([]string{"title"}).Model(&models.Article{}).Where("title = ?", title).Count(&count).Error
	if err != nil {
		logs.Critical(err.Error())
		return err
	}
	if count != 0 {
		return errors.New("已经存在相同的文章")
	}
	return nil
}

func InsertArticleDetails(title, content, cover, desc, tags, keyword string, menuId, categoryId int, isTop, hot, recommend, prod, markdown bool) error {
	// 0 草稿箱 1发布 2垃圾箱
	var save int

	if prod {
		save = 1
	} else {
		save = 0
	}

	a := &models.Article{
		Title:       title,
		Cover:       &cover,
		Desc:        desc,
		MenuId:      menuId,
		IsTop:       isTop,
		Hot:         hot,
		Recommend:   recommend,
		Markdown:    markdown,
		Type:        save,
		CreatedTime: time.Now(),
	}

	if tags != "" {
		a.Tags = &tags
	}

	if categoryId != -1 {
		a.CategoryId = &categoryId
	}

	if keyword != "" {
		a.Keyword = &keyword
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
		logs.Critical(err.Error())
		tx.Rollback()
		return err
	}

	c := &models.ArticleContent{
		Content:   &content,
		ArticleId: a.Id,
	}

	err = tx.Create(&c).Error
	if err != nil {
		logs.Critical(err.Error())
		tx.Rollback()
		return err
	}

	// 新增文章类型中的文章量
	if categoryId != -1 {
		err = tx.Model(&models2.ArticleType{}).Where("id = ?", categoryId).Update("sum", gorm.Expr("sum + ?", 1)).Error
		if err != nil {
			logs.Critical(err.Error())
			tx.Rollback()
			return err
		}
	}

	if isTop {
		var count int
		s := models.Special{
			TopId: sql.NullInt64{
				Int64: int64(a.Id),
				Valid: true,
			},
			CreatedTime: time.Now(),
		}
		err = tx.Select([]string{"id"}).Model(&models.Special{}).Count(&count).Error
		if err != nil {
			logs.Critical(err.Error())
			tx.Rollback()
			return err
		}
		if count == 0 {
			err = db.DbConn.Create(&s).Error
		} else {
			err = tx.Model(&s).Updates(map[string]interface{}{"top_id": a.Id, "update_time": time.Now()}).Error
		}

		if err != nil {
			logs.Critical(err.Error())
			tx.Rollback()
			return err
		}
	}

	return nil
}

func UpdateArticleDetails(title, content, cover, desc, tags, keyword string, menuId, categoryId int, isTop, hot, recommend, prod, markdown bool, id int) error {
	// 0 草稿箱 1发布 2垃圾箱
	var save int

	if prod {
		save = 1
	} else {
		save = 0
	}

	a := &models.Article{Id: id}

	if tags != "" {
		a.Tags = &tags
	}

	if categoryId != -1 {
		a.CategoryId = &categoryId
	}

	if keyword != "" {
		a.Keyword = &keyword
	}

	// 开始事务
	tx := db.DbConn.Begin()
	defer tx.Commit()

	var err error

	// 编辑数据前需要吸纳查询原来的数据,如果原来的数据，文章类型发生改变我们总数量想对应的+1 -1
	// 需要对比两个字段menu_id category_id
	if categoryId != -1 {

		var isChange models.Article
		err = tx.Select([]string{"menu_id", "category_id"}).Where("id = ?", id).First(&isChange).Error
		if err != nil {
			logs.Critical(err.Error())
			tx.Rollback()
			return err
		}

		if menuId != isChange.MenuId || categoryId != *isChange.CategoryId {
			// 去修改哪条数据,如果没有穿categoryId就去修改menu_id
			sum := tx.Model(&models2.ArticleType{})
			if categoryId == -1 {
				if err != nil {
					logs.Critical(err.Error())
					tx.Rollback()
					return err
				}
				err = sum.Where("menu_id = ?", isChange.MenuId).Update("sum", gorm.Expr("sum - ?", 1)).Error
			} else {
				if err != nil {
					logs.Critical(err.Error())
					tx.Rollback()
					return err
				}
				err = sum.Where("id = ?", *isChange.CategoryId).Update("sum", gorm.Expr("sum - ?", 1)).Error
			}

			err = sum.Where("id = ?", categoryId).Update("sum", gorm.Expr("sum + ?", 1)).Error
			if err != nil {
				logs.Critical(err.Error())
				tx.Rollback()
				return err
			}

		}
	}

	err = tx.Model(&a).Updates(map[string]interface{}{"title": title, "cover": cover, "desc": desc, "menu_id": menuId, "is_top": isTop, "hot": hot, "recommend": recommend, "markdown": markdown, "type": save, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		tx.Rollback()
		return err
	}

	c := &models.ArticleContent{
		//Content:   content,
		ArticleId: id,
	}

	err = tx.Model(&c).Updates(map[string]interface{}{"content": content, "article_id": id}).Error
	if err != nil {
		logs.Critical(err.Error())
		tx.Rollback()
		return err
	}

	if isTop {
		var count int
		s := models.Special{
			TopId:       sql.NullInt64{Int64: int64(id), Valid: true},
			CreatedTime: time.Now(),
		}
		err = tx.Select([]string{"id"}).Model(&models.Special{}).Count(&count).Error
		if err != nil {
			logs.Critical(err.Error())
			tx.Rollback()
			return err
		}
		if count == 0 {
			err = db.DbConn.Create(&s).Error
		} else {
			err = tx.Model(&s).Updates(map[string]interface{}{"top_id": id, "update_time": time.Now()}).Error
		}

		if err != nil {
			logs.Critical(err.Error())
			tx.Rollback()
			return err
		}
	}

	return nil
}

type ArticleAll struct {
	models.Article
	Url     *string `json:"url"`
	Content *string `json:"content"`
}

func SelectArticleDetails(id int) (*ArticleAll, error) {
	var a models.Article
	var c models.ArticleContent
	var all ArticleAll
	err := db.DbConn.Where(&models.Article{Id: id}).Find(&a).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}
	err = db.DbConn.Where(&models.ArticleContent{ArticleId: a.Id}).Find(&c).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}

	all.Id = a.Id
	all.MenuId = a.MenuId
	all.CategoryId = a.CategoryId
	all.Cover = a.Cover
	all.Title = a.Title
	all.Author = a.Author
	all.Desc = a.Desc
	all.Keyword = a.Keyword
	all.Tags = a.Tags
	all.View = a.View
	all.Markdown = a.Markdown
	all.Type = a.Type
	all.Praise = a.Praise
	all.IsTop = a.IsTop
	all.Recommend = a.Recommend
	all.Hot = a.Hot
	all.Sort = a.Sort
	all.State = a.State
	all.CreatedTime = a.CreatedTime
	all.UpdateTime = a.UpdateTime
	all.Url = c.Url
	all.Content = c.Content

	return &all, nil
}
