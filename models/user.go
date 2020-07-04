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
	UpdateTime       sql.NullTime `json:"update_time"`        // 更新时间
	AuthToken        string       `json:"auth_token"`         // token
}

type RoleTypeEle int8

const (
	GITHUB_ ReplyTypeEle = 1
	QQ_     ReplyTypeEle = 2
)

// 第三方登录角色
type Role struct {
	Id               int          `json:"id"`
	UId              int          `json:"u_id"`               // 用户id
	UType            RoleTypeEle  `json:"u_type"`             // 用户类型 1：github 2：qq
	Name             string       `json:"name"`               // 用户名
	ULogin           string       `json:"u_login"`            // 用户登陆
	Location         *string      `json:"location"`           // 位置
	AvatarUrl        string       `json:"avatar_url"`         // 头像url
	LoginIp          string       `json:"login_ip"`           // 用户登陆的ip
	AuthToken        string       `json:"auth_token"`         // 登录token
	AccessToken      string       `json:"access_token"`       // 用户token
	CurrentLoginTime sql.NullTime `json:"current_login_time"` // 登陆时间
	CreatedTime      time.Time    `json:"created_time"`       // 创建时间
	UpdateTime       sql.NullTime `json:"update_time"`        // 更新时间
}
