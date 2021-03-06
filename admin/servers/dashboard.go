package servers

import (
	"easy_go/admin/logger"
	"easy_go/db"
	"easy_go/models"
)

/*查询最后更新的数据*/
func SelectLastArticle() *models.Article {
	var article models.Article
	err := db.DbConn.Model(&models.Article{}).Order("update_time desc").First(&article).Error
	if err != nil {
		logger.Info(err.Error())
	}

	if &article == nil {
		err = db.DbConn.Model(&models.Article{}).Order("created_time desc").First(&article).Error
	}

	if err != nil {
		logger.Info(err.Error())
	}

	return &article
}

// 最近5条评论数据
func SelectLatelyFiveComment() ([]*models.LatelyFiveComment, error) {
	rows, err := db.DbConn.Raw(`
	SELECT
		a.id,
		c.content,
		a.title,
		o. NAME,
		o.avatar_url
	FROM
		comments c
	LEFT JOIN articles a ON a.id = c.article_id
	LEFT JOIN oauth_users o ON c.from_uid = o.id
	ORDER BY
		c.created_time DESC
	LIMIT 5
	`).Rows()
	if err != nil {
		logger.Info("查询最近评论数据失败", err.Error())
		return nil, err
	}

	var c []*models.LatelyFiveComment
	for rows.Next() {
		var reslut models.LatelyFiveComment
		if err := rows.Scan(&reslut.ArticleId, &reslut.Content, &reslut.Title, &reslut.Name, &reslut.AvatarUrl); err != nil {
			logger.Info("查询最近评论数据失败", err.Error())
			return nil, err
		}

		item := &models.LatelyFiveComment{
			ArticleId: reslut.ArticleId,
			Title:     reslut.Title,
			Content:   reslut.Content,
			Name:      reslut.Name,
			AvatarUrl: reslut.AvatarUrl,
		}
		c = append(c, item)
	}
	return c, nil
}

func SelectCountComment() (*models.DayAndTotal, error) {
	var res models.DayAndTotal
	err := db.DbConn.Raw(`
	SELECT
		( SELECT count( c.id ) FROM comments c WHERE DATE_SUB( CURDATE( ), INTERVAL 7 DAY ) <= date( c.created_time ) ) day7,
		COUNT( id ) total
	FROM
		comments
	`).Scan(&res).Error
	if err != nil {
		logger.Info("查询总评论数和最近7天评论数失败失败", err.Error())
		return &res, err
	}
	return &res, nil
}
