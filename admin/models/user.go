package models

import (
	"database/sql"
	"time"
)

type User struct {
	Id               int          `json:"id"`
	UserName         string       `json:"user_name"`
	PassWord         string       `json:"pass_word"`
	Role             int          `json:"role"`
	CurrentLoginTime sql.NullTime `json:"current_login_time"`
	CreatedTime      time.Time    `json:"created_time"`
	UpdateTime       sql.NullTime `json:update_time`
	AuthToken        sql.NullString `json:"auth_token"`
}
