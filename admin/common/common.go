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
	ExpireTime = 30
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

// 解析token
func ParseToken(tokenStr string) (*myjwt.CustomClaims, error) {
	j := myjwt.NewJWT()
	claims, err := j.ParseToken(tokenStr)
	var overdue = 1
	if err != nil {
		if err == myjwt.TokenExpired {
			// token过期
			overdue = 0
		}
	}
	/* 如果token过期就去重新请求一次，并解析一次
	*/
	if overdue == 0 {
		tokenS, err := j.RefreshToken(tokenStr)
		if err == nil {
			// 重新请求成功
			ParseToken(tokenS)
		} else {
			return nil, nil
		}
	}
	return claims, nil
}

// token过期，重新请求token

// 解析token, 先解密一次aes
func ParseTokenUser(userCook string) (string, error) {
	// 解析aes得到加密后的token
	decryptToken, err := ParseAes(userCook)
	if err != nil {
		logs.Error("解析用户aes错误" + err.Error())
		return "", err
	}
	claims, err := ParseToken(decryptToken)
	if err != nil {
		logs.Error("解析用户toekn错误" + err.Error())
		return "", err
	}
	if claims == nil {
		// 从新刷新token
		return "", nil
	} else {
		// 数据库比对
		var u models.User
		u.Id = claims.ID
		u.UserName = claims.Username
		u.LoginIp = claims.LoginIp
		u.AuthToken = decryptToken
		// 去数据库查询
		int, err := servers.LoginInfoParse(&u)
		if err != nil {
			logs.Warning("解析token数据跟数据库比对失败" + err.Error())
			return "", err
		}
		if int == 1 {
			return u.UserName, nil
		}
		return "", nil
	}
}
