package models

import (
	"database/sql"
	"time"
)

// 文章类型
type ArticleType struct {
	Id          int           `json:"id"`
	ArticleName string        `json:"article_name"`
	KeyWord     string        `json:"key_word"`
	MenuId      int           `json:"menu_id"`
	Visible     bool          `json:"visible" gorm:"default:'0'"` // 0 默认下架
	Sort        int           `json:"sort" gorm:"AUTO_INCREMENT"` // 排序
	State       bool          `json:"state" gorm:"default:'0'"`   // 0 默认不删除 1 软删除
	CreatedTime time.Time     `json:"created_time"`
	UpdateTime  *sql.NullTime `json:"update_time"`
}

// 文章
type Article struct {
	Id              int     `json:"id"`
	MenuId          int     `json:"menu_id"`                    // 导航id
	CategoryId      *int    `json:"category_id"`                // 分类
	Cover           *string `json:"cover"`                      // 封面
	Title           string  `json:"title";gorm:"not null"`      // 标题
	Author          *string `json:"author"`                     // 作者
	Desc            string  `json:"desc"`                       // 封面描述
	Keyword         *string `json:"keyword"`                    // 关键字
	Tags            *string `json:"tags"`                       // 标签
	View            int     `json:"view"`                       // 阅读量
	Markdown        bool    `json:"markdown"`                   // 是否是markdown格式 默认否
	Visible         bool    `json:"visible";gorm:"default:'0'"` // 0 默认下架
	Type            int     `json:"type";gorm:"size:8"`         // 0 草稿箱 1发布 2垃圾箱
	Praise          int     `json:"praise"`                     // 赞
	Recommend       bool    `json:"recommend"`                  // 推荐
	Hot             bool    `json:"hot"`                        // 热门
	Sort            int     `json:"sort";gorm:"AUTO_INCREMENT"` // 排序
	State           bool    `json:"state"`                      // 0 默认不删除 1 软删除
	CommentReadonly bool    `json:"comment_readonly"`           // 评论状态(默认：评论公共) 审核后公开
	//IsTop      bool    `json:"is_top"`                     // 当前文章是不是在置顶状态
	CreatedTime time.Time     `json:"created_time"`
	UpdateTime  *sql.NullTime `json:"update_time"`
}

// 文章内容 1对1
type ArticleContent struct {
	Id        int     `json:"id"`
	ArticleId int     `json:"article_id"`               // 文章映射id
	Url       *string `json:"url"`                      // 链接
	Content   *string `json:"content" gorm:"type:text"` // 内容
}

type System struct {
	Id          int           `json:"id"`
	TopId       sql.NullInt64 `json:"top_id"` // 记录置顶id
	Cover       string        `json:"cover"`  // 封面图片
	CreatedTime time.Time     `json:"created_time"`
	UpdateTime  *sql.NullTime `json:"update_time"`
}
