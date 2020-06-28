package tempFunc

import "github.com/astaxie/beego"

func Init()  {
	beego.AddFuncMap("IsArticleTypeName", IsArticleTypeName)
	beego.AddFuncMap("IsArticleCover", IsArticleCover)
}

func IsArticleCover(cover *string) bool {
	return *cover != ""
}

func IsArticleTypeName(id *int, typeId int) bool {
	if *id == typeId {
		return true
	}
	return false
}