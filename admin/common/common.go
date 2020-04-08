package common

import (
	"easy_go/admin/models"
	myjwt "easy_go/middleware"
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
		return nil, err
	}
	return msg, nil
}

// 生成token
func NewCurrentCookie(user models.User, ip string) (string, error) {
	//CreateToken
	j := &myjwt.JWT{
		[]byte("newtrekWang"),
	}
	claims := myjwt.CustomClaims{
		ID:       user.Id,
		Username: user.UserName,
		LoginIp: ip,
		Password: user.PassWord,
	}
	claims.IssuedAt = time.Now().Unix()
	claims.ExpiresAt = time.Now().Add(time.Second * time.Duration(ExpireTime)).Unix()
	token, err := j.CreateToken(claims)

	if err != nil {
		return "", err
	}

	return token, nil
}
