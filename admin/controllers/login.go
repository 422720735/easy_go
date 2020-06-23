package controllers

import (
	"bytes"
	"easy_go/admin/common"
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
	"easy_go/md5"
	"easy_go/middleware"
	"fmt"
	"github.com/dchest/captcha"
	"net/http"
	"path"
	"strings"
	"time"
)

type LoginController struct {
	common.BaseController
}

func (c *LoginController) Get() {
	c.Layout = "layout/login-registerLayout.html"
	c.TplName = "pages/login.html"
	c.LayoutSections = make(map[string]string)
	c.LayoutSections["script"] = "script/login_register.html"
	captcha := middleware.NewCaptcha()
	c.SetSession("captchaId", captcha.CaptchaId)
	c.Data["code"] = captcha.ImageUrl
	// c.LayoutSections["style"] = "style/login_img.html"
	// c.LayoutSections["script"] = "script/login_img.html"
}


func (c *LoginController) HandleLogin() {
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("账号或密码不合法", err.Error())
		c.Error("登录失败")
		return
	}

	username, err := transform.InterToString(msg["username"])
	if err != nil {
		logger.Info("账号或密码不合法", err.Error())
		c.Error("账号或密码不合法")
		return
	}

	code, err := transform.InterToString(msg["code"])
	if err != nil {
		logger.Info("验证码不合法", err.Error())
		c.Error("验证码不合法")
		return
	}

	if len(code) != 6 {
		logger.Info("验证码长度不正确")
		c.Error("验证码长度不正确")
		return
	}

	captchaId, ok := c.GetSession("captchaId").(string)
	if !ok {
		c.Error("验证码验证失败12")
		return
	}

	_bool := middleware.VerifyCaptcha(captchaId, code)
	if !_bool {
		c.Error("验证码不合法")
		return
	} else {
		c.DelSession("captchaId")
	}

	password, err := transform.InterToString(msg["password"])
	if err != nil {
		logger.Info("账号或密码不合法", err.Error())
		c.Error("账号或密码不合法")
		return
	}

	if username == "" || len(username) < 6 || password == "" || len(password) < 6 {
		c.Error("账号或密码不合法")
		return
	}
	// 加密后的密码
	process, err := servers.SelectUserMd5Pwd(username, md5.Md5(password, common.SECRET_KEY))
	if err != nil {
		logger.Error("用户:"+username+"加密失败", err.Error())
		c.Error("账号或密码不合法")
		return
	}
	// 跟数据库的比对
	user, err := servers.SelectUserMd5Pwd(username, process.PassWord)
	if err != nil {
		logger.Warn("用户:"+username+"比对密码出错", err.Error())
		c.Error("账号或密码不合法")
		return
	}

	// 是否记住密码
	check, _ := transform.InterToBool(msg["checkbox"])

	if user.PassWord != "" {
		// 记住密码，aes加密
		if check {
			ip := c.Ctx.Request.RemoteAddr
			// 生成token
			user.LoginIp = ip
			tokenString, err := common.NewCurrentCookie(user)
			if err != nil {
				//logger.Warn("用户登录创建token失败", err.Error())
				c.Error("未知异常")
				return
			}
			// 把token 登录时间，登录ip，更新sql时间，更新到用户表里，走一次sql更新，sql成功后继续下面的操作。
			user.LoginIp = ip
			user.CurrentLoginTime.Scan(time.Now())
			user.UpdateTime.Scan(time.Now())
			user.AuthToken = tokenString
			err = servers.LoginRecord(user)
			if err != nil {
				logger.Info("用户记录登陆信息失败", err.Error())
				c.Error("未知异常")
				return
			}
			c.Ctx.SetCookie("auth", tokenString, time.Second*60*60)
		}
		// 存session
		c.SetSession("userId", user.Id)
		c.SetSession("userName", user.UserName)
		c.Success("登录成功")
	} else {
		c.Error("登录失败")
	}
}

func (c *LoginController) ShowCode() {
	ServeHTTP(c.Ctx.ResponseWriter, c.Ctx.Request)
}

func ServeHTTP(w http.ResponseWriter, r *http.Request) {
	dir, file := path.Split(r.URL.Path)
	ext := path.Ext(file)
	id := file[:len(file)-len(ext)]
	fmt.Println("file : " + file)
	fmt.Println("ext : " + ext)
	fmt.Println("id : " + id)
	if ext == "" || id == "" {
		http.NotFound(w, r)
		return
	}
	fmt.Println("reload : " + r.FormValue("reload"))
	if r.FormValue("reload") != "" {
		captcha.Reload(id)
	}
	lang := strings.ToLower(r.FormValue("lang"))
	download := path.Base(dir) == "download"
	if Serve(w, r, id, ext, lang, download, captcha.StdWidth, captcha.StdHeight) == captcha.ErrNotFound {
		http.NotFound(w, r)
	}
}

func Serve(w http.ResponseWriter, r *http.Request, id, ext, lang string, download bool, width, height int) error {
	w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
	w.Header().Set("Pragma", "no-cache")
	w.Header().Set("Expires", "0")

	var content bytes.Buffer
	switch ext {
	case ".png":
		w.Header().Set("Content-Type", "image/png")
		captcha.WriteImage(&content, id, width, height)
	case ".wav":
		w.Header().Set("Content-Type", "audio/x-wav")
		captcha.WriteAudio(&content, id, lang)
	default:
		return captcha.ErrNotFound
	}

	if download {
		w.Header().Set("Content-Type", "application/octet-stream")
	}
	http.ServeContent(w, r, id+ext, time.Time{}, bytes.NewReader(content.Bytes()))
	return nil
}
