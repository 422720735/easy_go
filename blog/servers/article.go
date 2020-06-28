package servers

import (
	"easy_go/admin/models"
	"easy_go/blog/db"
	"easy_go/blog/logger"
)

type ArticleAll struct {
	models.Article
	Url     *string `json:"url"`
	Content *string `json:"content"`
}

func SelectArticleDetails(id int) (*ArticleAll, error) {
	var a models.Article
	var c models.ArticleContent
	var all ArticleAll
	err := db.DbConn.Model(&models.Article{}).Where("id = ? and visible = 1 and state = 0", id).Find(&a).Error
	if err != nil {
		logger.Info("查询文章详情失败", err.Error())
		return nil, err
	}
	err = db.DbConn.Model(&models.ArticleContent{}).Where("article_id = ?", a.Id).Find(&c).Error
	if err != nil {
		logger.Info("查询文章详情失败", err.Error())
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
