package servers

import (
	"easy_go/blog/logger"
	"easy_go/db"
	"easy_go/models"
	"time"
)

// 新增评论
func AddComment(role *models.OauthUser, articleId int, content string) error {
	c := models.Comment{
		ArticleId:    articleId,
		Content:      content,
		FromUid:      role.Id,
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

// 新增回复
func AddReply(content string, userId, commentId, replyId int, replyType models.ReplyTypeEle) error {
	var r models.Reply
	r.CommentId = commentId
	r.Content = content
	r.FromUid = userId
	r.ReplyType = replyType
	r.ReplyId = replyId
	r.CreatedTime = time.Now()
	err := db.DbConn.Model(&models.OauthUser{}).Create(&r).Error
	if err != nil {
		logger.Error("新增回复数据失败", err.Error())
		return err
	}
	return nil
}

func IsHaveUser(id int) (*models.Comment, error) {
	var c models.Comment
	err := db.DbConn.Select([]string{"id", "from_uid"}).Model(&models.Comment{}).Where("id = ?", id).Find(&c).Error
	if err != nil {
		logger.Info("查收评论用户失败", err.Error())
		return nil, err
	}

	return &c, nil
}

/**
1.分页查询评论信息，每条评论id是唯一的，而这个id会去关联回复表中评论id，
2.我们可以根据上面的逻辑拿到每条评论下的所有回复信息。回复信息本来就不多，所以不需要分页，直接查询全部。
3.拿到了评论表、回复表两个表的数据，我们下一步进行组装数据。
*/
func SelectCommentList(article_id, size, page int) ([]map[string]interface{}, int64, error) {
	var commentRes []*models.ReplyBody
	var replyRes []*models.ReplyBody
	rows, err := db.DbConn.Raw(`SELECT
		c.id,
		o.avatar_url,
		o.NAME reply_name,
		c.content,
		c.created_time,
		o.location address
		FROM
			comments c
		LEFT JOIN oauth_users o ON c.from_uid = o.id
		WHERE
		c.article_id = ?
		ORDER BY
			c.created_time DESC
		LIMIT ?,?
	`, article_id, (page-1)*size, size).Rows()
	if err != nil {
		logger.Info("数据评论查询失败", err.Error())
		return nil, 0, err
	}

	for rows.Next() {
		body := new(models.ReplyBody)
		if err := rows.Scan(&body.Id, &body.Img, &body.ReplyName, &body.Content, &body.Time, &body.Addres); err != nil {
			logger.Info("数据评论查询失败", err.Error())
			return nil, 0, err
		}

		r := &models.ReplyBody{
			Id:        body.Id,
			Img:       body.Img,
			ReplyName: body.ReplyName,
			Content:   body.Content,
			Time:      body.Time,
			Addres:    body.Addres,
		}
		commentRes = append(commentRes, r)
	}

	// 去重
	if len(commentRes) == 0 {
		return nil, 0, nil
	}

	var comment_id []int
	for _, value := range commentRes {
		comment_id = append(comment_id, value.Id)
	}

	// 现在我们查询到了与之对应到回复，我们对这个数据进行遍历，我们把这个数据装到对应的评论下。
	rows, err = db.DbConn.Raw(`SELECT 
		r.id,
		r.comment_id,
		o.avatar_url,
		o.name reply_name, 
		r.content,
		r.created_time,
		o.location address,
		r.reply_type,
		r.reply_id

		from replies r 
		LEFT JOIN oauth_users o ON r.from_uid = o.id
		WHERE r.comment_id in (?)
		ORDER BY
			r.created_time DESC
		`, comment_id).Rows()
	if err != nil {
		logger.Info("数据查询失败", err.Error())
		return nil, 0, err
	}

	for rows.Next() {
		body := new(models.ReplyBody)

		if err := rows.Scan(
			&body.Id,
			&body.CommentId,
			&body.Img,
			&body.ReplyName,
			&body.Content,
			&body.Time,
			&body.Addres,
			&body.ReplyType,
			&body.ReplyId); err != nil {
			logger.Info("数据查询失败", err.Error())
			return nil, 0, err
		}

		r := &models.ReplyBody{
			Id:        body.Id,
			CommentId: body.CommentId,
			Img:       body.Img,
			ReplyName: body.ReplyName,
			ReplyType: body.ReplyType,
			ReplyId:   body.ReplyId,
			Content:   body.Content,
			Time:      body.Time,
			Addres:    body.Addres,
		}
		replyRes = append(replyRes, r)
	}

	defer rows.Close()

	for i := 0; i < len(replyRes); i++ {
		if replyRes[i].ReplyType == 2 {
			for j := 0; j < len(replyRes); j++ {
				if replyRes[i].ReplyId == replyRes[j].Id {
					replyRes[i].BeReplyName = replyRes[j].ReplyName
					break
				}
			}
		}
	}

	var count int
	err = db.DbConn.Model(&models.Comment{}).Select("comments.id").Joins("LEFT JOIN oauth_users ON comments.from_uid = oauth_users.id").Where("comments.article_id = ?", article_id).Count(&count).Error
	if err != nil {
		logger.Info("查询count失败", err.Error())
	}

	return concat(commentRes, replyRes), int64(count), nil
}

func concat(c []*models.ReplyBody, r []*models.ReplyBody) []map[string]interface{} {
	var results []map[string]interface{}
	for _, data := range c {
		c_item := make(map[string]interface{})
		c_item["id"] = data.Id
		c_item["comment_id"] = data.Id
		c_item["img"] = data.Img
		c_item["replyName"] = data.ReplyName
		c_item["beReplyName"] = ""
		c_item["content"] = data.Content
		c_item["time"] = data.Time.Format("2006-01-02 15:04:05")
		c_item["address"] = data.Addres
		c_item["osname"] = ""
		c_item["browse"] = ""
		var replyBody []map[string]interface{}
		for _, v := range r {
			if v.CommentId != nil && data.Id == *v.CommentId {
				v_item := make(map[string]interface{})
				v_item["id"] = v.Id
				v_item["replyName"] = v.ReplyName
				v_item["beReplyName"] = v.BeReplyName
				v_item["content"] = v.Content
				v_item["reply_id"] = v.ReplyId
				v_item["time"] = v.Time.Format("2006-01-02 15:04:05")
				v_item["address"] = v.Addres
				v_item["osname"] = ""
				v_item["browse"] = "谷歌"
				replyBody = append(replyBody, v_item)
			}
		}
		c_item["replyBody"] = replyBody
		results = append(results, c_item)
	}
	return results
}

func SelectLatelyFiveComment() ([]*models.LatelyFiveComment, error) {
	rows, err := db.DbConn.Raw(`
	SELECT
		c.content,
		a.title,
		o.name,
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
		if err := rows.Scan(&reslut.Content, &reslut.Title, &reslut.Name, &reslut.AvatarUrl); err != nil {
			logger.Info("查询最近评论数据失败", err.Error())
			return nil, err
		}

		item := &models.LatelyFiveComment{
			Title:     reslut.Title,
			Content:   reslut.Content,
			Name:      reslut.Name,
			AvatarUrl: reslut.AvatarUrl,
		}
		c = append(c, item)
	}
	return c, nil
}
