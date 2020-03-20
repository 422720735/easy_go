package models

import "time"

type User struct {
	UserName         string    `json:"user_name"`
	PassWord         string    `json:"pass_word"`
	Role             int       `json:"role"`
	CurrentLoginTime time.Time `json:"current_login_time"`
	CreatedTime      time.Time `json:"created_time"`
	UpdateTime       time.Time `json:update_time`
}
