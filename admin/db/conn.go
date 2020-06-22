package db

import (
	"easy_go/admin/models"
	"easy_go/lib"
	"runtime"

	_ "github.com/go-sql-driver/mysql"

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
	DbConn, err = gorm.Open("mysql", dns)
	if err != nil {
		panic(err)
	}
	DbConn.DB().SetMaxIdleConns(10)
	DbConn.DB().SetMaxOpenConns(10)

	CreatedTable()
}

func CreatedTable() {
	DbConn.AutoMigrate(
		&models.MenuSetting{},
		&models.User{},
		&models.ArticleType{},
		&models.Article{},
		&models.ArticleContent{},
		&models.System{},
	)
}