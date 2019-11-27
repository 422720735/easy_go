package main

import (
	_ "easy_go/routers"
	"github.com/astaxie/beego"
)

func main() {
    beego.BConfig.RunMode = "dev"
	beego.Run()
}

