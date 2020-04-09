package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"time"
)

// 查看用户名是不是被占用了
func IsUserTake(name string) int {
	var count int
	db.DbConn.Model(&models.User{}).Where("user_name = ?", name).Count(&count)
	return count
}

func InsertUser(user, pwd string, role int) error {
	d := models.User{
		UserName:    user,
		PassWord:    pwd,
		Role:        role,
		CreatedTime: time.Now(),
	}

	err := db.DbConn.Create(&d).Error
	if err != nil {
		return err
	}
	return nil
}

func SelectUserMd5Pwd(user, pwd string) (models.User, error) {
	var username models.User
	err := db.DbConn.Model(&models.User{}).Where("user_name =? AND pass_word = ?", user, pwd).Find(&username).Error
	if err != nil {
		return username, err
	}
	return username, nil
}

// 登录信息记录
func LoginRecord(user models.User) error {
	// 把token 登录时间，登录ip，更新sql时间，更新到用户表里，走一次sql更新，sql成功后继续下面的操作。
	err := db.DbConn.Model(&user).Updates(&user).Error
	if err != nil {
		return err
	}
	return nil
}
