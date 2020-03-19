package models

import (
	"log"

	"github.com/xormplus/xorm"
)

var (
	DbConn *xorm.Engine
	err    error
)

func init() {
	DbConn, err = xorm.NewEngine("mysql", "root:123@/test?charset=utf8")
	if err != nil {
		log.Fatalf("db error: %#v\n", err.Error())
		panic(err)
	}
}
