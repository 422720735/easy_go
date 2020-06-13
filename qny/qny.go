package qny

import (
	"beego/github.com/astaxie/beego"
	"github.com/api.v7/storage"
)

func UpLoadQiNiu(c *beego.Controller)  {
	storage.PutPolicy{
		Scope: ""
	}
}
