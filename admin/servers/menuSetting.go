package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"time"
)

func SelectMenuPage(page, size int) (*[]models.MenuSetting, int64, error) {
	// 根据分页数据请求
	var menuList []models.MenuSetting
	var total int64

	// 获取总条数
	err := db.DbConn.Model(&menuList).Count(&total).Error
	if err != nil {
		return &menuList, total, nil
	}

	// 获取取指page，指定pagesize的记录
	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("created_time desc").Find(&menuList).Error
	if err != nil {
		return &menuList, total, nil
	}
	return &menuList, total, nil
}

// 新增路由菜单数据
func InsertMenu(menuName, path, icon string, isChildSwitch, isHotSwitch bool) error {
	var m models.MenuSetting
	m.MenuName = menuName
	m.Path = path
	m.Icon = icon
	m.ChildStatus = isChildSwitch
	m.Hot = isHotSwitch
	m.CreatedTime = time.Now()
	err := db.DbConn.Create(&m).Error
	return err
}
