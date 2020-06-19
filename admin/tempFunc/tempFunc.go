package tempFunc

import "github.com/astaxie/beego"

func Init() {
	beego.AddFuncMap("IsArticleTypeName", IsArticleTypeName)
}

func IsArticleTypeName(id *int, typeId int) bool {
	if *id == typeId {
		return true
	}
	return false
}
