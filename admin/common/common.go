package common

import (
	"easy_go/admin/models"
	"easy_go/admin/servers"
	"easy_go/aes"
	myjwt "easy_go/middleware"
	"encoding/base64"
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
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

// 解析aes
func ParseAes(aesStr string) (string, error) {
	goaes := aes.NewGoAES([]byte(SECRET_AES_KEY))
	bytesPass, err := base64.StdEncoding.DecodeString(aesStr)
	if err != nil {
		return "", err
	}
	decrypt, err := goaes.Decrypt(bytesPass)
	if err != nil {

		return "", err
	}
	return string(decrypt[:]), nil
}

// 加密aes
func EncryptAes(tokenString string) (string, error) {
	aesKey := aes.NewGoAES([]byte(SECRET_AES_KEY))
	encrypt, err := aesKey.Encrypt([]byte(tokenString))
	if err != nil {
		return "", err
	}
	// 转存字符串
	aesS := base64.StdEncoding.EncodeToString(encrypt)
	return aesS, nil
}

// 解析token
func ParseTokenUser(userCook string) *myjwt.CustomClaims {
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(userCook)
	if err != nil {
		logs.Warn("解析token信息失败", err.Error())
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
