package db

import (
	"easy_go/lib"
	"github.com/jinzhu/gorm"
	"runtime"
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
}

