package common

import (
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	myjwt "easy_go/middleware"
	"easy_go/models"
	"encoding/json"
	"github.com/astaxie/beego"
	"time"
)

const (
	ExpireTime = 3600
)

//获取body
func Unmarshal(c *beego.Controller) (map[string]interface{}, error) {
	msg := make(map[string]interface{})
	err := json.Unmarshal(c.Ctx.Input.RequestBody, &msg)
	if err != nil {
		logger.Info(err.Error())
		return nil, err
	}
	return msg, nil
}

// 生成token
func NewCurrentCookie(user models.User) (string, error) {
	//CreateToken
	j := &myjwt.JWT{
		[]byte(SECRET_TOKEN_KEY),
	}
	claims := myjwt.CustomClaims{
		ID:       user.Id,
		Username: user.UserName,
		LoginIp:  user.LoginIp,
	}
	claims.IssuedAt = time.Now().Unix()
	claims.ExpiresAt = time.Now().Add(time.Second * time.Duration(ExpireTime)).Unix()
	token, err := j.CreateToken(claims)

	if err != nil {
		logger.Error(err.Error())
		return "", err
	}

	return token, nil
}

// 解析token
func ParseTokenUser(userCook string) *myjwt.CustomClaims {
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(userCook)
	if err != nil {
		logger.Info("解析token信息失败", err.Error())
		return nil
	}
	// 数据库比对
	var u models.User
	u.Id = claims.ID
	u.UserName = claims.Username
	u.LoginIp = claims.LoginIp
	u.AuthToken = userCook
	// 去数据库查询
	intCount, err := servers.LoginInfoParse(u)
	if intCount == 1 && err == nil {
		return claims
	}
	return nil
}
