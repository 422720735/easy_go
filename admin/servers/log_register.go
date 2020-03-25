package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"github.com/astaxie/beego"
	"time"
)

// 查看用户名是不是被占用了
func IsUserTake(name string) int {
	var count int
	db.DbConn.Model(&models.User{}).Where("user_name = ?", name).Count(&count)
	return count
}

func InsertUser(user, pwd string, role int) {
	beego.Info("22")
	//  Error 1292: Incorrect datetime value: '0000-00-00' for column 'current_login_time' at row 1
	d := models.User{
		UserName: user,
		PassWord: pwd,
		Role:     role,
		CreatedTime: time.Now(),
		CurrentLoginTime: nil,
		UpdateTime: nil,
	}

	db.DbConn.Create(&d)
}
