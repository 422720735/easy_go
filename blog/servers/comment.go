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

/**
1.分页查询评论信息，每条评论id是唯一的，而这个id会去关联回复表中评论id，
2.我们可以根据上面的逻辑拿到每条评论下的所有回复信息。回复信息本来就不多，所以不需要分页，直接查询全部。
3.拿到了评论表、回复表两个表的数据，我们下一步进行组装数据。
*/
func SelectCommentList(article_id, size, page int) error {
	var commentList []*models.Comment
	var reply []*models.Reply

	commentSql := db.DbConn.Model(&models.Comment{}).Where("article_id = ?", article_id)
	err := commentSql.Error
	if err != nil {
		logger.Info("查询评论数据失败")
		return err
	}

	commentSql = commentSql.Limit(size).Offset((page - 1) * size).Order("created_time desc").Find(&commentList)
	err = commentSql.Error

	if err != nil {
		logger.Info("查询评论数据失败")
		return err
	}

	// 去重
	var user_array_old []int
	var comment_id []int
	for _, value := range commentList {
		// SELECT * from replies WHERE user_id = 1 and comment_id in (4,3,2,1)
		// SELECT * from replies WHERE user_id in (4,2,1,3) and comment_id in (4,3,2,1)
		//db.DbConn.Model(&models.Reply{}).Where("user_id = ? and comment_id = ?", value.UserId, value.Id)

		//
		beego.Info(value.Id, value.UserId)
		user_array_old = append(user_array_old, value.UserId)
		// 把与之相对应的10条分页评论id装到切片里，我们根据评论的id去查询相对应的回复。
		comment_id = append(comment_id, value.Id)
	}

	// 现在我们查询到了与之对应到回复，我们对这个数据进行遍历，我们把这个数据装到对应的评论下。
	err = db.DbConn.Model(&models.Reply{}).Where("comment_id in (?)", comment_id).Find(&reply).Error
	if err != nil {
		logger.Info(err.Error())
	}

	if len(reply) > 0 {
		// 去查询相关评论数据的用户

		for _, v := range reply {
			// 需要连表查询查询想与之想对应的数据。
			beego.Info(v)
		}
	}

	// 调用去重方法
	//user_array_now := myjwt.RemoveRepByMapInt(user_array_old)

	return nil
}

/*
var arr = [
        {
            id: 1,
            img: "/static/images/img.jpg",
            replyName: "帅大叔",
            beReplyName: "匿名",
            content: "同学聚会，看到当年追我的屌丝开着宝马车带着他老婆来了，他老婆是我隔壁宿舍的同班同学，心里后悔极了。",
            time: "2017-10-17 11:42:53",
            address: "深圳",
            osname: "",
            browse: "谷歌",
            replyBody: []
        },
        {
            id: 2,
            img: "/static/images/img.jpg",
            replyName: "匿名",
            beReplyName: "",
            content: "到菜市场买菜，看到一个孩子在看摊，我问：“一只鸡多少钱？” 那孩子回答：“23。” 我又问：“两只鸡多少钱？” 孩子愣了一下，一时间没算过来，急中生智大吼一声：“一次只能买一只！”",
            time: "2017-10-17 11:42:53",
            address: "深圳",
            osname: "",
            browse: "谷歌",
            replyBody: [{
                id: 3,
                img: "",
                replyName: "帅大叔",
                beReplyName: "匿名",
                content: "来啊，我们一起吃鸡",
                time: "2017-10-17 11:42:53",
                address: "",
                osname: "",
                browse: "谷歌"
            }]
        },
        {
            id: 3,
            img: "/static/images/img.jpg",
            replyName: "帅大叔",
            beReplyName: "匿名",
            content: "同学聚会，看到当年追我的屌丝开着宝马车带着他老婆来了，他老婆是我隔壁宿舍的同班同学，心里后悔极了。",
            time: "2017-10-17 11:42:53",
            address: "深圳",
            osname: "win10",
            browse: "谷歌",
            replyBody: []
        }
    ];
*/
