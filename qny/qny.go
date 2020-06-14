package qny

import (
	"easy_go/lib"
	"github.com/qiniu/api.v7/auth/qbox"
	"github.com/qiniu/api.v7/storage"
)

func UpLoadQiNiuToken() string {
	AccessKey := lib.Conf.Read("qiniu", "AccessKey")
	SecretKey := lib.Conf.Read("qiniu", "SecretKey")
	bucket := lib.Conf.Read("qiniu", "Scope")
	// 上传凭证,关于凭证这块大家可以去看看官方文档
	putPolicy := storage.PutPolicy{
		Scope: bucket,
	}

	mac := qbox.NewMac(AccessKey, SecretKey)
	upToken := putPolicy.UploadToken(mac)
	return upToken
}
