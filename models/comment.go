package models

import (
	"database/sql"
	"time"
)

/*评论*/
type Comment struct {
	Id           int          `json:"id" gorm:"size:10"`
	ArticleId    int          `json:"article_id" gorm:"size:10"`   // 文章id
	Content      string       `json:"content" gorm:"type:text"`    // 评论内容
	FromUid      int          `json:"from_uid" gorm:"size:10"`     // 评论用户id
	CommentState bool         `json:"comment_state" gorm:"size:2"` // 评论状态：默认显示全部，超级管理员可以删除评论
	CreatedTime  time.Time    `json:"created_time"`                // 创建时间
	UpdateTime   sql.NullTime `json:"update_time"`                 // 更新时间
}

type ReplyTypeEle int8

const (
	Comment_ ReplyTypeEle = 1
	Reply_   ReplyTypeEle = 2
)

// 回复表
type Reply struct {
	Id        int          `json:"id" gorm:"size:10"`
	CommentId int          `json:"comment_id" gorm:"size:10"` // 评论id
	ReplyId   int          `json:"reply_id" `                 // 回复目标id，reply_type为1时，是comment_id，reply_type为2时为回复表的id
	ReplyType ReplyTypeEle `json:"reply_type" gorm:"size:2"`  // 1为回复评论，2为回复别人的回复'
	Content   string       `json:"content"`                   // 回复内容
	FromUid   int          `json:"from_uid" gorm:"size:10"`   // 回复用户id
	//ToUid       int          `json:"to_uid" gorm:"size:10"`     // 回复目标id,这个字段暂时未用，发现ReplyId能完全解决指向父id
	CreatedTime time.Time    `json:"created_time"` // 创建时间
	UpdateTime  sql.NullTime `json:"update_time"`  // 更新时间
}

type ZanTypeEle int8

const (
	ArticleZan_ ZanTypeEle = 1
	CommentZan_ ZanTypeEle = 2
	ReplyZan_   ZanTypeEle = 3
)

// 点赞表
type Praise struct {
	Id     int        `json:"id"`
	TypeId int        `json:"type_id"` // 对应的作品或评论的id
	Type   ZanTypeEle `json:"type"`    // 点赞类型  1作品点赞  2 评论点赞 3  回复点赞
	UserId int        `json:"user_id"` // 用户id
	State  bool       `json:"state"`   // 点赞状态  0--取消赞   1--有效赞
}

type ReplyBody struct {
	Id          int          `json:"id"`
	CommentId   *int         `json:"comment_id"`               // 评论id
	Img         string       `json:"img"`                      // 头像
	ReplyName   string       `json:"reply_name"`               // 回复用户名
	BeReplyName string       `json:"be_reply_name"`            // 目标用户名
	ReplyType   ReplyTypeEle `json:"reply_type" gorm:"size:2"` // 1为回复评论，2为回复别人的回复'
	ReplyId     int          `json:"reply_id" `                // 回复目标id
	Content     string       `json:"content"`
	Time        time.Time    `json:"time"`
	Addres      *string      `json:"addres"`
	OsName      string       `json:"os_name"`
	Browse      string       `json:"browse"`
}

type LatelyFiveComment struct {
	ArticleId int    `json:"article_id"` // 文章id
	Title     string `json:"title"`      // 标题
	Content   string `json:"content"`    // 评论内容
	Name      string `json:"name"`       // 用户名
	AvatarUrl string `json:"avatar_url"` // 头像url
}

type DayAndTotal struct {
	Day7 int `json:"day_7"`
	Total int `json:"total"`
}
