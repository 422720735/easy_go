package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"github.com/astaxie/beego/logs"
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
	err := db.DbConn.Select([]string{"id"}).Model(&models.MenuSetting{}).Count(&count).Error
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
func SelectArticleTypeList(page, size int) ([]*models.ArticleType, int64, error) {
	var articleTypeList []*models.ArticleType
	var total int64
	// 开始查询
	err := db.DbConn.Model(&articleTypeList).Count(&total).Error
	if err != nil {
		logs.Critical(err.Error())
		return articleTypeList, total, err
	}

	// 查询分页数据
	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort asc").Find(&articleTypeList).Error
	if err != nil {
		logs.Critical(err.Error())
		return articleTypeList, total, err
	}

	return articleTypeList, total, nil
}

// 查询所有的类型及与之相对应的父级menu
func SelectArticleTypeMenuName() ([]interface{}, error) {
	// 文章类型
	var articleType []*models.ArticleType
	// menu
	var menuList []*models.MenuSetting

	// menu
	err := db.DbConn.Select([]string{"id", "menu_name", "child_status", "visible"}).Find(&menuList).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}

	// articleType
	err = db.DbConn.Select([]string{"id", "article_name", "menu_id"}).Where("visible = ? and state = ?", true, false).Find(&articleType).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}

	var result []interface{}
	for j := 0; j < len(menuList); j++ {
		// 只装载上架的数据
		if menuList[j].Visible {
			menuItem := make(map[string]interface{})
			menuItem["name"] = *&menuList[j].MenuName
			menuItem["id"] = *&menuList[j].Id
			menuItem["child_status"] = *&menuList[j].ChildStatus
			var arr []interface{}
			for i := 1; i < len(articleType); i++ {
				item := make(map[string]interface{})
				if articleType[i].MenuId == *&menuList[j].Id {
					// 只装载上架的数据
					if *&menuList[j].ChildStatus {
						item["id"] = *&articleType[i].Id
						item["name"] = *&articleType[i].ArticleName
						item["menu_id"] = *&articleType[i].MenuId
						arr = append(arr, item)
						menuItem["child"] = arr
					}
				}
			}
			result = append(result, menuItem)
		}
	}

	return result, nil
}
