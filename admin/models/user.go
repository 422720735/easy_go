package models

import (
	"database/sql"
	"time"
)

type User struct {
	Id               int          `json:"id"`
	UserName         string       `json:"user_name"`
	PassWord         string       `json:"pass_word"`
	Role             int          `json:"role"`               // 用户角色，暂时这个字段没有用。
	LoginIp          string       `json:"login_ip"`           // 用户登陆的ip
	CurrentLoginTime sql.NullTime `json:"current_login_time"` // 登陆时间
	CreatedTime      time.Time    `json:"created_time"`       // 创建时间
	UpdateTime       sql.NullTime `json:"update_time"`      // 更新时间
	AuthToken        string       `json:"auth_token"`         // token
}
