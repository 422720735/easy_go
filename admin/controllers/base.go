package controllers
//
//import (
//	"github.com/astaxie/beego"
//	"strings"
//)
//
//
//// 获取用户IP地址
//func GetClientIp(c *beego.Controller) string {
//	s := c.Ctx.Request.Header.Get("X-Real-IP")
//	if s == "" {
//		forwarded := c.Ctx.Request.Header.Get("X-Forwarded-For")
//		if forwarded != "" {
//			list := strings.Split(forwarded, ":")
//			if len(list) > 0 {
//				s = list[0]
//			}
//		} else {
//			s = strings.Split(c.Ctx.Request.RemoteAddr, ":")[0]
//		}
//	}
//	return s
//}
