package servers

import (
	"easy_go/blog/logger"
	"easy_go/db"
	"easy_go/models"

	"github.com/jinzhu/gorm"
)

// 文章上下关联
type Related struct {
	Id    int    `json:"id"`
	Title string `json:"title"`
}

type ArticleAll struct {
	models.Article
	Url     *string `json:"url"`
	Content *string `json:"content"`
	Prev    Related `json:"prev"`
	Next    Related `json:"next"`
}

func SelectArticleDetails(id int) (*ArticleAll, error) {
	var a models.Article
	var c models.ArticleContent
	var all ArticleAll
	ar := db.DbConn.Model(&models.Article{}).Where("id = ? and visible = 1 and state = 0", id)

	err := ar.UpdateColumn("view", gorm.Expr("view + ?", 1)).Error
	if err != nil {
		logger.Error("修改文章阅读量失败", err.Error())
		return nil, err
	}

	err = ar.Find(&a).Error
	if err != nil {
		logger.Info("查询文章详情失败", err.Error())
		return nil, err
	}

	err = db.DbConn.Model(&models.ArticleContent{}).Where("article_id = ?", a.Id).Find(&c).Error
	if err != nil {
		logger.Info("查询文章详情失败", err.Error())
		return nil, err
	}

	all.Article = a
	all.Url = c.Url
	all.Content = c.Content

	var p models.Article
	var n models.Article
	/*查询文章的上下*/
	if a.Sort > 1 {
		err = db.DbConn.Select([]string{"id", "title"}).Model(&models.Article{}).Where("sort < ? and visible = 1 and state = 0", a.Sort).Find(&p).Error
	}

	if p.Id > 0 && err != nil {
		logger.Info("查询上一篇文章数据失败")
	} else {
		all.Prev.Id = p.Id
		all.Prev.Title = p.Title
	}

	err = db.DbConn.Select([]string{"id", "title"}).Model(&models.Article{}).Where("sort > ? and visible = 1 and state = 0", a.Sort).Find(&n).Error

	if n.Id > 0 && err != nil {
		logger.Info("查询上一篇文章数据失败")
	} else {
		all.Next.Id = n.Id
		all.Next.Title = n.Title
	}

	return &all, nil

}

// 修改文章点赞
func UpdateArticlePraise(u_id, article_id int) (bool, error) {
	// 先查询用户是否有点赞信息，有就修改点赞信息
	var count int
	var err error
	var praise models.Praise
	u_p := db.DbConn.Select([]string{"id", "state"}).Model(&models.Praise{}).Where("type_id = ? and user_id = ?", article_id, u_id)

	u_p.Count(&count)
	if count == 0 {
		// 新增点赞
		praise.TypeId = article_id
		praise.Type = models.ZanTypeEle(1)
		praise.UserId = u_id
		praise.State = true
		err = db.DbConn.Create(&praise).Error
		if err != nil {
			logger.Info("点赞数据失败")
			return false, err
		}

	} else {
		u_p.Find(&praise)
		err = u_p.Updates(map[string]interface{}{"state": !praise.State}).Error
		if err != nil {
			logger.Info("点赞数据失败")
			return false, err
		}
		praise.State = !praise.State
	}

	return praise.State, nil
}

// 查询文章点赞情况
func SelectPraise(article_id int) int {
	var count int
	db.DbConn.Select("id").Model(&models.Praise{}).Where("type_id = ? and type = ? and state = ?", article_id, 1, true).Count(&count)
	return count
}

func SelectArticlePraise(u_id, article_id int) (bool, error) {
	// 先查询用户是否有点赞信息，有就修改点赞信息
	var count int
	var err error
	var praise models.Praise
	u_p := db.DbConn.Select([]string{"id", "state"}).Model(&models.Praise{}).Where("type_id = ? and user_id = ?", article_id, u_id).Find(&praise)
	err = u_p.Count(&count).Error
	if count > 0 && err != nil {
		logger.Info("点赞数据失败")
		return false, err
	}
	return praise.State, nil
}

// 热门文章
func RandRecommend(int int) ([]*models.Article, error) {
	var r []*models.Article
	ar := db.DbConn.Raw(`
	SELECT
		a.id,
		a.title,
		a.hot,
		a.recommend
	FROM
		articles a
	WHERE
		recommend = 1
	AND 
		a.id NOT IN (?)
	`, int)
	ar.Scan(&r)
	err := ar.Order("RAND()").Limit(5).Find(&r).Error
	if ar.Error != nil {
		logger.Info("查询热门文章失败", err.Error())
		return nil, err
	}
	return r, nil
}

// 精彩推荐
func RandHot(notHot []int) ([]*models.Article, error) {
	var h []*models.Article
	ah := db.DbConn.Raw(`
	SELECT
		a.id,
		a.title,
		a.hot,
		a.recommend
	FROM
		articles a
	WHERE
		hot = 1
	AND 
	a.id NOT IN (?)
	`, notHot)

	ah = ah.Scan(&h)
	err := ah.Order("RAND()").Limit(5).Find(&h).Error
	if ah.Error != nil {
		logger.Info("查询热门文章失败", err.Error())
		return nil, err
	}
	return h, nil
}
