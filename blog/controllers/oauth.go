package controllers

import (
	"easy_go/blog/logger"
	"easy_go/common"
	"easy_go/lib"
	"encoding/json"
	"gitee.com/zchunshan/d3auth"
)

type OAuthControllers struct {
	common.BaseController
}

type Auth_conf struct {
	Appid  string
	Appkey string
	Rurl   string
}

func (c *OAuthControllers) Github() {
	codeStr := c.GetString("code")
	user, err := _github(codeStr)
	if err != nil {
		c.History("第三方登陆失败", "/")
		return
	}

	setUser(user, 2, c)
}

func _github(codeStr string) (map[string]interface{}, error) {
	github_conf := &d3auth.Auth_conf{
		Appid: lib.Conf.Read("github", "ClientId"),
		Appkey: lib.Conf.Read("github", "ClientSecret"),
	}
	githubAuth := d3auth.NewAuth_github(github_conf)
	token, err := githubAuth.Get_Token(codeStr)

	if err != nil {
		logger.Info("获取github登录token失败", err.Error())
		return nil, err
	}

	msg, err := githubAuth.Get_User_Info(token)
	if err != nil {
		logger.Info("获取github用户信息失败", err.Error())
		return nil, err
	}

	var userInfo map[string]interface{}

	if err := json.Unmarshal([]byte(msg), &userInfo); err != nil {
		logger.Info("github登录用户信息转json失败", err.Error())
		return nil, err
	}

	// 生产一个本地登录token
	userInfo["access_token"] = token
	return userInfo, nil
}

func (c *OAuthControllers) Gitee() {
	codeStr := c.GetString("code")
	user, err := _gitee(codeStr)
	if err != nil {
		c.History("第三方登陆失败", "/")
	}

	setUser(user, 1, c)
}

func _gitee(codeStr string) (map[string]interface{}, error) {
	giteeconf := &d3auth.Auth_conf{Appid: lib.Conf.Read("gitee", "ClientId"), Appkey: lib.Conf.Read("gitee", "ClientSecret"), Rurl: lib.Conf.Read("gitee", "RedirectUrl")}
	giteeAuth := d3auth.NewAuth_gitee(giteeconf)
	token, err := giteeAuth.Get_Token(codeStr) //回调页收的code 获取token
	if err != nil {
		logger.Info("获取gitee登录token失败", err.Error())
		return nil, err
	}

	msg, _ := giteeAuth.Get_User_Info(token.Access_Token)

	if err != nil {
		logger.Info("获取gitee用户信息失败", err.Error())
		return nil, err
	}

	var userInfo map[string]interface{}

	if err := json.Unmarshal([]byte(msg), &userInfo); err != nil {
		logger.Info("gitee登录用户信息转json失败", err.Error())
		return nil, err
	}

	// 生产一个本地登录token
	userInfo["access_token"] = token.Access_Token
	return userInfo, nil

}

// 4 '防守反击' 2  2