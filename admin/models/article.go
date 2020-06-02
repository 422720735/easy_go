package models

import (
	"database/sql"
	"time"
)

type ArticleType struct {
	Id          int          `json:"id"`
	ArticleName string       `json:"article_name"`
	KeyWord     string       `json:"key_word"`
	MenuId      int          `json:"menu_id"`
	Visible     bool         `json:"visible";gorm:"default:'0'"` // 0 默认下架
	Delete      bool         `json:"delete";gorm:"default:'0'"`  // 0 默认不删除 1 软删除
	Sort        int          `json:"sort";gorm:"AUTO_INCREMENT"` // 排序
	Hot         bool         `json:"hot";gorm:"size 20"`         // 热门
	CreatedTime time.Time    `json:"created_time"`
	UpdateTime  sql.NullTime `json:"update_time"`
}
