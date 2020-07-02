package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)
/*
https://blog.csdn.net/qq_19018277/article/details/104935403?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159367877219195264534761%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=159367877219195264534761&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v3~pc_rank_v3-1-104935403.first_rank_ecpm_v3_pc_rank_v3&utm_term=go+github+%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%BD%95
https://blog.csdn.net/qq_38280150/article/details/102841773
*/

type Conf struct {
	ClientId     string // 对应: Client ID
	ClientSecret string // 对应: Client Secret
	RedirectUrl  string // 对应: Authorization callback URL
}

var conf = Conf{
	ClientId:     "Iv1.c51ab327e2334526",
	ClientSecret: "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
	RedirectUrl:  "http://localhost:8055/oauth/redirect",
}

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title":        "Gin 测试模板",
			"ClientId":     "Iv1.c51ab327e2334526",
			"ClientSecret": "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
		})
	})

	r.GET("/code", func(c *gin.Context) {
		var err error
		url := c.Query("code")
		code := GetTokenAuthUrl(url)
		// 获取 token
		var tokenAuthUrl = GetTokenAuthUrl(code)
		var token *Token
		if token, err = GetToken(tokenAuthUrl); err != nil {
			fmt.Println(err)
			c.HTML(http.StatusOK, "index.html", gin.H{
				"title":        code,
				"ClientId":     "Iv1.c51ab327e2334526",
				"ClientSecret": "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
			})
			return
		}
		fmt.Printf("%+v",token)


		// 通过token，获取用户信息
		var userInfo map[string]interface{}
		if userInfo, err = GetUserInfo(token); err != nil {
			fmt.Println("获取用户信息失败，错误信息为:", err)
			c.HTML(http.StatusOK, "index.html", gin.H{
				"title":        code,
				"ClientId":     "Iv1.c51ab327e2334526",
				"ClientSecret": "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"title":        userInfo,
			"ClientId":     "Iv1.c51ab327e2334526",
			"ClientSecret": "b58488662f95b6b4a86a8edc7441d62bcafa78fc",
		})
	})

	r.Run(":8055")
}

// 通过code获取token认证url
func GetTokenAuthUrl(code string) string {
	return fmt.Sprintf(
		"https://github.com/login/oauth/access_token?client_id=%s&client_secret=%s&code=%s",
		conf.ClientId, conf.ClientSecret, code,
	)
}

// 获取 token
func GetToken(url string) (*Token, error) {
	// 形成请求
	var req *http.Request
	var err error
	if req, err = http.NewRequest(http.MethodGet, url, nil); err != nil {
		return nil, err
	}
	req.Header.Set("accept", "application/json")

	// 发送请求并获得响应
	var httpClient = http.Client{}
	var res *http.Response
	if res, err = httpClient.Do(req); err != nil {
		return nil, err
	}

	// 将响应体解析为 token，并返回
	var token Token
	if err = json.NewDecoder(res.Body).Decode(&token); err != nil {
		return nil, err
	}
	return &token, nil
}

type Token struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"` // 这个字段没用到
	Scope       string `json:"scope"`      // 这个字段也没用到
}

// 获取用户信息
func GetUserInfo(token *Token) (map[string]interface{}, error) {

	// 形成请求
	var userInfoUrl = "https://api.github.com/user"	// github用户信息获取接口
	var req *http.Request
	var err error
	if req, err = http.NewRequest(http.MethodGet, userInfoUrl, nil); err != nil {
		return nil, err
	}
	req.Header.Set("accept", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("token %s", token.AccessToken))

	// 发送请求并获取响应
	var client = http.Client{}
	var res *http.Response
	if res, err = client.Do(req); err != nil {
		return nil, err
	}

	// 将响应的数据写入 userInfo 中，并返回
	var userInfo = make(map[string]interface{})
	if err = json.NewDecoder(res.Body).Decode(&userInfo); err != nil {
		return nil, err
	}
	return userInfo, nil
}
