package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
)

// 查看用户名是不是被占用了
func IsUserTake(name string) int {
	var count int
	db.DbConn.Model(&models.User{}).Where("user_name = ?", name).Count(&count)
	return count
}