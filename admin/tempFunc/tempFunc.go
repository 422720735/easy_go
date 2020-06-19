package tempFunc

import (
	"easy_go/admin/models"
	"github.com/astaxie/beego"
)

func Init() {
	beego.AddFuncMap("IsArticleTypeName", IsArticleTypeName)
	beego.AddFuncMap("ShowTotal", ShowTotal)
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