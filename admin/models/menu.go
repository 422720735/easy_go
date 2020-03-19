package models

import "time"

type MenuSetting struct {
	Id          int       `json:"id"`
	MenuName    string    `json:"menu_name"`
	Path        string    `json:"path"`
	Icon        string    `json:"icon"`
	ChildStatus int       `json:"child_status"`
	Sort        int       `json:"sort"`
	CreatedTime time.Time `json:"created_time"`
	UpdateTime  time.Time `json:"update_time"`
}
