package tempFunc

import "github.com/astaxie/beego"

func Init()  {
	beego.AddFuncMap("IsArticleCover", IsArticleCover)
}

func IsArticleCover(cover *string) bool {
	return *cover != ""
}
