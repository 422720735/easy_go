package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"errors"
	"github.com/astaxie/beego/logs"
	"strings"
	"time"
)

func IsArticleTypeTake(name, keyword string) error {
	// 新增先查询数据是不是有该条数据
	var count int
	err := db.DbConn.Select([]string{"article_name"}).Model(&models.ArticleType{}).Where("article_name = ?", name).Or("key_word = ?", keyword).Count(&count).Error
	if err != nil {
		logs.Critical(err.Error())
		return err
	}
	if count != 0 {
		return errors.New("已经存在相同的文章类型或关键字")
	}
	return nil
}

// 新增路由菜单数据
func InsertArticleType(articleName, KeyWord string, menuId int) error {
	var a models.ArticleType
	a.ArticleName = articleName
	a.KeyWord = KeyWord
	a.MenuId = menuId
	a.CreatedTime = time.Now()
	var count int
	err := db.DbConn.Select([]string{"id"}).Model(&models.ArticleType{}).Count(&count).Error
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
func SelectArticleTypeList(tag string, page, size int) ([]*models.ArticleType, int64, error) {
	var articleTypeList []*models.ArticleType
	var total int64
	// 开始查询
	//err := db.DbConn.Model(&articleTypeList).Count(&total).Error
	typeList := db.DbConn.Model(&articleTypeList)

	tags := strings.Split(tag, ",")
	if len(tags) == 1 && tags[0] != "" {
		typeList = typeList.Where("menu_id = ?", tags[0])
	} else if len(tags) == 2 {
		typeList = typeList.Where("id = ?", tags[1])
	}

	err := typeList.Count(&total).Error

	if err != nil {
		logs.Critical(err.Error())
		return articleTypeList, total, err
	}

	// 查询分页数据
	//err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort asc").Find(&articleTypeList).Error
	err = typeList.Limit(size).Offset((page - 1) * size).Order("sort asc").Find(&articleTypeList).Error
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
			for i := 0; i < len(articleType); i++ {
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
