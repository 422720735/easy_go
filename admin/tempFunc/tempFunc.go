package tempFunc

import (
	"easy_go/models"
	"github.com/astaxie/beego"
)

func Init() {
	beego.AddFuncMap("IsArticleTypeName", IsArticleTypeName)
	beego.AddFuncMap("ShowTotal", ShowTotal)
	beego.AddFuncMap("IsTotal", IsTotal)
}

func IsArticleTypeName(id *int, typeId int) bool {
	if *id == typeId {
		return true
	}
	return false
}

func ShowTotal(all []*models.ArticleType) int {
	if all != nil {
		return len(all)
	}
	return 0
}

func IsTotal(all []*models.ArticleType) bool  {
	if all != nil && len(all) > 0 {
		return true
	}
	return false
}