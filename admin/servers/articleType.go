package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"time"
)

// 新增路由菜单数据
func InsertArticleType(articleName, KeyWord string, menuId int, isHotSwitch bool) error {
	var a models.ArticleType
	a.ArticleName = articleName
	a.KeyWord = KeyWord
	a.MenuId = menuId
	a.Hot = isHotSwitch
	a.CreatedTime = time.Now()
	var count int
	err := db.DbConn.Model(&models.MenuSetting{}).Count(&count).Error
	if err == nil {
		a.Sort = count + 1
	}
	err = db.DbConn.Create(&a).Error
	return err
}