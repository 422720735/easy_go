package models


type MenuSetting struct {
	Id int 	`json:"id"`
	MenuName string `json:"menu_name"`
	Path string `json:"path"`
	Icon string `json:"icon"`
	ChildStatus int `json:"child_status"`
	Sort int `json:"sort"`
	CreatedTime 
}
