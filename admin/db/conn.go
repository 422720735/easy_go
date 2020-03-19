package db

import (
	"easy_go/admin/lib"
	"runtime"

	"github.com/jinzhu/gorm"
)

var (
	DbConn *gorm.DB
	err    error
)

func init() {
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
	dns := username + ":" + password + "@tcp(" + host + ":" + port + ")/" + dataname + "?parseTime=true&charset=utf8&loc=Local"
	DbConn, err := gorm.Open("mysql", dns)
	if err != nil {
		panic(err)
	}
	DbConn.DB().SetMaxIdleConns(10)
	DbConn.DB().SetMaxOpenConns(10)

	CreatedTable()
}

func CreatedTable() {

}
