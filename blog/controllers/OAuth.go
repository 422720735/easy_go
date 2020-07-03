package controllers

import (
	"easy_go/blog/logger"
	"easy_go/blog/servers"
	"easy_go/common"
	"easy_go/lib"
	"easy_go/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type OAuthControllers struct {
	common.BaseController
}

type Token struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"` // 这个字段没用到
	Scope       string `json:"scope"`      // 这个字段也没用到
}

func (c *OAuthControllers) Get() {
	codeStr := c.GetString("code")
	tokenAuthUrl := GetTokenAuthUrl(codeStr)
	var token *Token
	var err error
	if token, err = GetToken(tokenAuthUrl); err != nil {
		logger.Error("获取github用户token失败", err.Error())
		c.History("第三方登陆失败", "/")
		return
	}

	// 通过token，获取用户信息
	var userInfo map[string]interface{}
	if userInfo, err = GetUserInfo(token); err != nil {
		logger.Error("获取github用户信息失败", err.Error())
		c.History("第三方登陆失败", "/")
		return
	}

	// 我们把token也记录起来
	userInfo["access_token"] = token.AccessToken

	role, err := servers.Login_github(userInfo, c.Ctx.Request.RemoteAddr, token.AccessToken)
	if err != nil {
		c.History("第三方登陆失败", "/")
	}

	var u models.User
	u.Id = role.UId
	u.UserName = role.Name
	u.LoginIp = role.LoginIp
	tokenString, err := common.NewCurrentCookie(u)
	if err == nil {
		c.Ctx.SetCookie("auth", tokenString, time.Second*60*60)
	}

	c.SetSession("u_id", role.UId)
	c.SetSession("u_name", role.Name)
	c.SetSession("u_avatar_url", role.AvatarUrl)
	c.SetSession("u_auth_token", role.AuthToken)
	c.History("", "/")
}

func GetTokenAuthUrl(code string) string {
	return fmt.Sprintf(
		"https://github.com/login/oauth/access_token?client_id=%s&client_secret=%s&code=%s",
		lib.Conf.Read("github", "ClientId"), lib.Conf.Read("github", "ClientSecret"), code,
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

// 获取用户信息
func GetUserInfo(token *Token) (map[string]interface{}, error) {
	// 形成请求
	var userInfoUrl = "https://api.github.com/user" // github用户信息获取接口
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
