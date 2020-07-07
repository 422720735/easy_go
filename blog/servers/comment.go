package servers

import (
	"easy_go/blog/db"
	"easy_go/blog/logger"
	"easy_go/models"
	"github.com/astaxie/beego"
	"time"
)

func AddComment(role *models.Role, articleId int, message string) error {
	c := models.Comment{
		ArticleId:    articleId,
		Content:      message,
		UserId:       role.Id,
		CommentState: true,
		CreatedTime:  time.Now(),
	}

	err := db.DbConn.Model(&models.Comment{}).Create(&c).Error
	if err != nil {
		logger.Error("新增评论信息失败", err.Error())
		return err
	}

	return nil
}

/*
Id           int          `json:"id"`
	ArticleId    int          `json:"article_id"`    // 文章id
	Content      string       `json:"content"`       // 评论内容
	UserId       int          `json:"user_id"`       // 评论用户id
	CommentState bool         `json:"comment_state"` // 评论状态：默认显示全部，超级管理员可以删除评论
	CreatedTime  time.Time    `json:"created_time"`  // 创建时间
	UpdateTime   sql.NullTime `json:"update_time"`   // 更新时间
*/

func AddReply(content string, userId, commentId, replyId int, replyType models.ReplyTypeEle) error {
	var r models.Reply
	r.CommentId = commentId
	r.Content = content
	r.UserId = userId
	r.ReplyType = replyType
	r.ReplyId = replyId
	r.CreatedTime = time.Now()
	err := db.DbConn.Model(&models.Role{}).Create(&r).Error
	if err != nil {
		logger.Error("新增回复数据失败", err.Error())
		return err
	}
	return nil
}

func SelectCommentList(article_id, size, page int) error {
	var commentList []*models.Comment
	var reply []*models.Reply

	commentSql := db.DbConn.Model(&models.Comment{}).Where("article_id = ?", article_id)
	err := commentSql.Error
	if err != nil {
		logger.Info("查询评论数据失败")
		return err
	}

	commentSql = commentSql.Limit(size).Offset((page - 1)* size).Order("created_time desc").Find(&commentList)
	err = commentSql.Error

	if err != nil {
		logger.Info("查询评论数据失败")
		return err
	}

	for _, value := range commentList {
		beego.Info(value.UserId)
		// 1 2 3  4 5 6 7 8 9
		// SELECT * FROM replies WHERE user_id in (1, 3)
		// db.DbConn.Model(&models.Reply{}).Where()
		//db.DbConn.Raw("select * form")
	}

	return nil
}
