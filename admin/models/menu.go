package models

import "time"

type MenuSetting struct {
	Id          int       `json:"id"`
	MenuName    string    `json:"menu_name" gorm:"size:128"`
	Path        string    `json:"path" gorm:"size: 128"`
	Icon        string    `json:"icon" gorm:"size: 64"`
	ChildStatus int       `json:"child_status"`
	Sort        int       `json:"sort" gorm:"size 48"`
	CreatedTime time.Time `json:"created_time"`
	UpdateTime  time.Time `json:"update_time"`
}
