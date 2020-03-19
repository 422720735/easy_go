package db

import (
	"database/sql"
	"easy_go/admin/lib"
	"runtime"

	_ "github.com/go-sql-driver/mysql"
)

var (
	DbConns *sql.DB
	err     error
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
	DbConns, err = sql.Open("mysql", dns)
	if err != nil {
		panic(err)
	}
	DbConns.SetConnMaxLifetime(20)
	DbConns.SetMaxIdleConns(20)
}
