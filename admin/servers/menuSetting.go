package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/models"
	"time"
)

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
