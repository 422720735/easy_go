package db

import (
	"easy_go/admin/lib"
	"easy_go/admin/models"
	_ "github.com/go-sql-driver/mysql"
	"github.com/astaxie/beego"
	"runtime"

	"github.com/jinzhu/gorm"
)

var (
	DbConn *gorm.DB
	err    error
)

func Init() {
	goos := runtime.GOOS
	mysql := ""
	if goos == "linux" {
		mysql = "mysql_prod"
	} else {
		mysql = "mysql_dev"
	}
	username := lib.Conf.Read(mysql, "username")
	password := lib.Conf.Read(mysql, "password")
	dataname := lib.Conf.Read(mysql, "dataname")
	port := lib.Conf.Read(mysql, "port")
	host := lib.Conf.Read(mysql, "host")
	dns := username + ":" + password + "@tcp(" + host + ":" + port + ")/" + dataname + "?charset=utf8&parseTime=True&loc=Local"
	beego.Info(dns)
	DbConn, err = gorm.Open("mysql", dns)
	if err != nil {
		beego.Info(err,"e")
		panic(err)
	}
	DbConn.DB().SetMaxIdleConns(10)
	DbConn.DB().SetMaxOpenConns(10)

	CreatedTable()
}

func CreatedTable() {
	DbConn.AutoMigrate(&models.MenuSetting{})
}
