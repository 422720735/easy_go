package md5

import (
	"crypto/md5"
	"encoding/hex"
)

/*
*MD5生生密码
 */
func Md5(password, salt string) string {
	m := md5.New()
	m.Write([]byte(password))
	cipherStr := m.Sum(nil)
	str := hex.EncodeToString(cipherStr)
	m.Write([]byte("-rytid^&^57fnvi2e---%#$fwef"+ str + salt + "1sfl,;'f'ewji23"))
	pwd := m.Sum(nil)
	return hex.EncodeToString(pwd)

}
