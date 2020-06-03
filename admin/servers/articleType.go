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

// 文章类型的分页数据,后期需要调整这个接口，需要连表查询-文章量-父级
// ！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！
func SelectArticleTypeList(page, size int) (*[]models.ArticleType, int64, error) {
	var articleTypeList []models.ArticleType
	var total int64
	// 开始查询
	err := db.DbConn.Model(&articleTypeList).Count(&total).Error
	if err != nil {
		return &articleTypeList, total, err
	}

	// 查询分页数据
	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort asc").Find(&articleTypeList).Error
	if err != nil {
		return &articleTypeList, total, err
	}

	return &articleTypeList, total, nil
}
