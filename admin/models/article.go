package models

import (
	"database/sql"
	"time"
)

// 文章类型
type ArticleType struct {
	Id          int          `json:"id"`
	ArticleName string       `json:"article_name"`
	KeyWord     string       `json:"key_word"`
	MenuId      int          `json:"menu_id"`
	Visible     bool         `json:"visible;" gorm:"default:'0'"` // 0 默认下架
	Hot         bool         `json:"hot;"`                        // 热门
	Sort        int          `json:"sort; "gorm:"AUTO_INCREMENT"` // 排序
	State       bool         `json:"state;" gorm:"default:'0'"`   // 0 默认不删除 1 软删除
	CreatedTime time.Time    `json:"created_time"`
	UpdateTime  sql.NullTime `json:"update_time"`
}

// 文章
type Article struct {
	Id         int    `json:"id"`
	CategoryId int    `json:"category_id"` // 分类
	Cover      string `json:"cover"`       // 封面
	Title      string `json:"title;" gorm:"not null"`
	Author     string `json:"author"` // 作者
	Desc       string `json:"desc"`   // 封面描述
	Tags       string `json:"tags"`   // 标签
	View       int    `json:"view"`   // 阅读
	Url        string `json:"url"`    // 链接
	Content    string `json:"content;" gorm:"type:text"`
	Recommend  int    `json:"recommend"`                   // 推荐
	Praise     int    `json:"praise"`                      // 赞
	IsTop      int    `json:"is_top"`                      // 置顶
	Hot        bool   `json:"hot"`                         // 热门
	Sort       int    `json:"sort; "gorm:"AUTO_INCREMENT"` // 排序
	State      bool   `json:"state"`                       // 软删除

	CreatedTime time.Time    `json:"created_time"`
	UpdateTime  sql.NullTime `json:"update_time"`
}
