package main

import (
	"fmt"
	"github.com/astaxie/beego"
	"net/smtp"
	"strings"
)
// https://blog.csdn.net/subfate/article/details/86491032
// https://studygolang.com/articles/27802?fr=sidebar
const (
	// 邮件服务器地址
	SMTP_MAIL_HOST  = "smtp.qq.com"
	// 端口
	SMTP_MAIL_PORT  = "25"
	// 发送邮件用户账号
	SMTP_MAIL_USER  = "422720735@qq.com"
	// 授权密码
	SMTP_MAIL_PWD   = "qjgnkaetuwknbide"
)

/*
title 使用smtp发送邮件
@param string mailAddress 收件人邮箱，多个收件人使用英文逗号分开
@param string subject 邮件主题
@param string body 邮件内容
@return error
*/
func SendSMTPMail(mailAddress string, subject string, body string) error {
	// 通常身份应该是空字符串，填充用户名.
	auth := smtp.PlainAuth("", SMTP_MAIL_USER, SMTP_MAIL_PWD, SMTP_MAIL_HOST)
	// (text/plain)纯文本 , (text/html)html
	contentType := "Content-Type: text/html; charset=UTF-8"
	nickname := "SMTPMail"
	msg := []byte("To: " + mailAddress + "\r\nFrom: "+ nickname + "<" + SMTP_MAIL_USER + ">\r\nSubject: " + subject +
		"\r\n" + contentType + "\r\n\r\n" + body)
	sendTo := strings.Split(mailAddress, ",")
	err := smtp.SendMail(fmt.Sprintf("%s:%s", SMTP_MAIL_HOST, SMTP_MAIL_PORT), auth, SMTP_MAIL_USER, sendTo, msg)
	beego.Info(err)
	return err
}

func main() {
	SendSMTPMail("1792318005@qq.com",
		"hello，这是smtp测试邮件。", "这是golang-smtp的测试邮件")
}