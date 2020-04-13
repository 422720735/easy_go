package models

import (
	"database/sql"
	"time"
)

type MenuSetting struct {
	Id          int          `json:"id"`
	MenuName    string       `json:"menu_name";gorm:"size:128"`
	Path        string       `json:"path";gorm:"size: 128"`
	Icon        string       `json:"icon";gorm:"size: 64"`
	Visible     bool         `json:"visible";gorm:"default:'0'"`
	Sort        int          `json:"sort";gorm:"AUTO_INCREMENT"` // 排序
	ChildStatus bool         `json:"child_status"`
	Hot         bool         `json:"hot";gorm:"size 48"`
	CreatedTime time.Time    `json:"created_time"`
	UpdateTime  sql.NullTime `json:"update_time"`
}
