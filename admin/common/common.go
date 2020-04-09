package common

import (
	"easy_go/admin/models"
	"easy_go/aes"
	myjwt "easy_go/middleware"
	"encoding/base64"
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
		return "", err
	}

	return token, nil
}

// 解析token, 先解密一次aes
func ParseTokenUser(cookstr string) error{

	// 走记住密码的程序，先比对。
	goaes := aes.NewGoAES([]byte(SECRET_AES_KEY))
	bytesPass, err := base64.StdEncoding.DecodeString(cookstr)
	if err != nil {

	}
	token, err := goaes.Decrypt(bytesPass)
	if err != nil {

	}
	tokenStr:= string(token[:])
	j:=myjwt.NewJWT()
	claims, err := j.ParseToken(tokenStr)
	if err != nil {
		return err
	} else {
		beego.Info(claims)
		// var user models.User
		// user.Id = claims.ID
		// user.UserName = claims.Username
		// user.LoginIp= claims.LoginIp
	}
}
