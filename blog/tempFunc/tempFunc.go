package tempFunc

import (
	"easy_go/models"
	"github.com/astaxie/beego"
	"strconv"
	"strings"
)

func Init() {
	beego.AddFuncMap("IsArticleTypeName", IsArticleTypeName)
	beego.AddFuncMap("IsArticleCover", IsArticleCover)
	beego.AddFuncMap("IsSplit", IsSplit)
	beego.AddFuncMap("TagSplit", TagSplit)
	beego.AddFuncMap("ClassName", ClassName)
	beego.AddFuncMap("IsLength", IsLength)
}

func IsArticleCover(cover *string) bool {
	return *cover != ""
}

// 判断文章类型id == 传递的type，这个模板用于判断二级路由名
func IsArticleTypeName(id *int, typeId int) bool {
	if *id == typeId {
		return true
	}
	return false
}

func IsSplit(tags *string) bool {
	if tags == nil {
		return false
	} else if *tags == "" {
		return false
	}
	return true
}

// 把tags分割成数组
func TagSplit(tags *string) []string {
	return strings.Split(*tags, ",")
}

// 给当前tag标签返回一个class
func ClassName(index int) string {
	return "tag_" + strconv.Itoa(index%5+1)
}

func IsLength(array []*models.Article) bool {
	if len(array) > 0 {
		return true
	}
	return false
}
