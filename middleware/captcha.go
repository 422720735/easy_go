package middleware

import (
	"easy_go/admin/logger"
	"github.com/dchest/captcha"
)

type CaptchaResponse struct {
	CaptchaId string `json:"captchaId"` //验证码Id
	ImageUrl  string `json:"imageUrl"`  //验证码图片url
}

func NewCaptcha() *CaptchaResponse {
	length := captcha.DefaultLen
	captchaId := captcha.NewLen(length)
	var captcha CaptchaResponse
	captcha.CaptchaId = captchaId
	captcha.ImageUrl = "/captcha/" + captchaId + ".png"
	return &captcha
}

func VerifyCaptcha(captchaId, code string) bool {
	if code == "" || captchaId == "" {
		logger.Info("验证码解析失败")
		return false
	}

	if captcha.VerifyString(captchaId, code) {
		return true
	} else {
		logger.Info("验证失败")
		return false
	}
}