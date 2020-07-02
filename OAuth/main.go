package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Conf struct {
	ClientId     string // 对应: Client ID
	ClientSecret string // 对应: Client Secret
	RedirectUrl  string // 对应: Authorization callback URL
}

var conf = Conf{
	ClientId: "Iv1.c51ab327e2334526",
	ClientSecret: "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
	RedirectUrl:"http://localhost:8055/oauth/redirect",
}

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Gin 测试模板",
			"ClientId": "Iv1.c51ab327e2334526",
			"ClientSecret": "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
		})
	})
	r.Run(":8055")
}
