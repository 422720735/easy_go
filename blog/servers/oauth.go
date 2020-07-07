package servers

import (
	"easy_go/blog/db"
	"easy_go/blog/logger"
	"easy_go/models"
	"errors"
	"time"
)

/*第三方登录*/
func Login_github(uid int, utype models.RoleTypeEle, name, login, location, avatar_url, access_token, auth_token string, ip string) (*models.Role, error) {
	var r models.Role
	r.UId = uid
	r.UType = utype
	r.ULogin = login

	if location != "" {
		r.Location = &location
	}

	r.Name = name
	r.AvatarUrl = avatar_url
	r.LoginIp = ip
	r.AuthToken = auth_token
	r.AccessToken = access_token
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
			"access_token":       r.AccessToken,
			"auth_token":         r.AuthToken,
			"current_login_time": time.Now(),
			"update_time":        time.Now(),
		}).Error

		if err != nil {
			logger.Info("修改github第三方登录角色失败", err.Error())
			return nil, err
		}

		role.Find(&r)
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

/*去数据库查询*/
func Select_github(uid int, name, login_ip, auth_token string) (*models.Role, error) {
	var count int
	var r models.Role
	err := db.DbConn.Select([]string{"id", "uid", "name", "avatar_url", "auth_token"}).Model(&models.Role{}).Where("uid = ? and name = ? and login_ip = ? and auth_token = ?", uid, name, login_ip, auth_token).Find(&r).Count(&count).Error
	if err != nil {
		logger.Info("查询登录信息失败")
		return nil, err
	}
	if count == 0 {
		return nil, errors.New("没有查询相关到相关数据")
	}
	return &r, nil
}

