package servers

import (
	"easy_go/blog/db"
	"easy_go/blog/logger"
	"easy_go/models"
	"easy_go/transform"
	"time"
)

func Login_github(user map[string]interface{}, ip, token string) (*models.Role, error) {
	var r models.Role

	uid, _ := transform.InterToInt(user["id"])

	name, _ := transform.InterToString(user["name"])

	login, _ := transform.InterToString(user["login"])

	location, _ := transform.InterToString(user["location"])

	avatar_url, _ := transform.InterToString(user["avatar_url"])

	r.UId = uid
	r.UType = 1
	if name == "" {
		r.Name = login
	} else {
		r.Name = name
	}
	r.ULogin = login
	if location != "" {
		r.Location = &location
	}
	r.AvatarUrl = avatar_url
	r.LoginIp = ip
	r.AuthToken = token
	r.CurrentLoginTime.Scan(time.Now())

	var count int
	role := db.DbConn.Model(&models.Role{}).Where("uid = ? and u_type = ?", r.UId, r.UType)
	err := role.Select([]string{"uid", "u_type"}).Count(&count).Error

	if err != nil {
		logger.Info("查询第三方登录数据失败", err.Error())
		return nil, err
	}

	if count > 0 {
		err = role.Updates(map[string]interface{}{
			"uid":                r.UId,
			"u_type":             r.UType,
			"name":               r.Name,
			"u_login":            r.ULogin,
			"location":           r.Location,
			"avatar_url":         r.AvatarUrl,
			"login_ip":           r.LoginIp,
			"auth_token":         r.AuthToken,
			"current_login_time": time.Now(),
			"update_time":        time.Now(),
		}).Error

		if err != nil {
			logger.Info("修改github第三方登录角色失败", err.Error())
			return nil, err
		}
	} else {
		r.CreatedTime = time.Now()
		err = role.Create(&r).Error
		if err != nil {
			logger.Info("新增github第三方登录角色失败", err.Error())
			return nil, err
		}
	}

	return &r, nil
}
