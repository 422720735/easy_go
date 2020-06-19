package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"errors"
	"github.com/astaxie/beego/logs"
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

// 查询所有的类型及与之相对应的父级menu
func SelectArticleTypeMenuName() ([]interface{}, error) {
	// 路由
	var menuList []*models.MenuSetting
	menu := db.DbConn.Select([]string{"id", "menu_name", "child_status", "visible"}).Model(&menuList)

	// 文章类型 要过滤下架和软删除的
	var articleList []*models.ArticleType
	article := db.DbConn.Select([]string{"id", "article_name", "menu_id"}).Model(&articleList).Where("visible = ? and state = ?", true, false)

	err := menu.Find(&menuList).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}

	err = article.Find(&articleList).Error
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
			for i := 0; i < len(articleList); i++ {
				item := make(map[string]interface{})
				if articleList[i].MenuId == *&menuList[j].Id {
					// 只装载上架的数据
					if *&menuList[j].ChildStatus {
						item["id"] = *&articleList[i].Id
						item["name"] = *&articleList[i].ArticleName
						item["menu_id"] = *&articleList[i].MenuId
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

// 根据条件筛选或不筛选menu路由菜单
func SelectArticleMenu(tag string) ([]*models.MenuSetting, error) {
	// 路由
	var menuList []*models.MenuSetting
	menu := db.DbConn.Select([]string{"id", "menu_name", "child_status", "visible"}).Model(&menuList).Where("visible = ? and state = ?", true, false)
	if tag != "" {
		menu = menu.Where("id = ?", tag)
	}

	err := menu.Find(&menuList).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}

	return menuList, err
}

// 文章类型的分页数据,后期需要调整这个接口，需要连表查询-文章量-父级
func SelectArticleTypeList(menuId string) ([]*models.ArticleType, error) {
	// 文章类型 要过滤下架和软删除的
	var articleList []*models.ArticleType
	articleType := db.DbConn.Model(&articleList)
	if menuId != "" {
		articleType = articleType.Where("menu_id =?", menuId)
	}

	err := articleType.Find(&articleList).Error
	if err != nil {
		return nil, err
	}
	return articleList, nil
}

// 文章类型上下架
func ArticleTypeUpdateIssue(id int, status bool) error {
	err := db.DbConn.Model(&models.ArticleType{}).Where("id = ?", id).Updates(map[string]interface{}{"visible": !status, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		return err
	}
	return nil
}

// 文章类型软删除
func ArticleTypeDeleteMenu(id int) error {
	err := db.DbConn.Model(&models.ArticleType{}).Where("id = ?", id).Updates(map[string]interface{}{"state": true, "update_time": time.Now()}).Error
	if err != nil {
		logs.Critical(err.Error())
		return err
	}
	return nil
}