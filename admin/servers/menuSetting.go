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
		return &menuList, total, err
	}

	// 获取取指page，指定pagesize的记录
	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort asc").Find(&menuList).Error
	if err != nil {
		return &menuList, total, err
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
	var count int
	err := db.DbConn.Model(&models.MenuSetting{}).Count(&count).Error
	if err == nil {
		m.Sort = count + 1
	}
	err = db.DbConn.Create(&m).Error
	return err
}

// 上移下移
func UpdateUpDown(sort int, str string) error {
	// 上移动, 需要修改前一条
	var err error
	var current models.MenuSetting
	var prev_next models.MenuSetting
	var sortNext int
	// 查询当前数据
	err = db.DbConn.Model(&models.MenuSetting{}).Where("sort = ?", sort).Find(&current).Error
	if err != nil {
		return err
	}
	if str == "top" {
		err = db.DbConn.Model(&models.MenuSetting{}).Where("sort = ?", sort-1).Find(&prev_next).Error
		sortNext = sort - 1
		if err != nil {
			return err
		}
	} else {
		err = db.DbConn.Model(&models.MenuSetting{}).Where("sort = ?", sort+1).Find(&prev_next).Error
		sortNext = sort + 1
		if err != nil {
			return err
		}
	}
	// 开始事务
	tx := db.DbConn.Begin()
	// 修改数据
	err = tx.Model(&current).Update("sort", sortNext).Error
	if err != nil {
		tx.Rollback()
	}
	err = tx.Model(&prev_next).Update("sort", sort).Error
	if err != nil {
		tx.Rollback()
	}
	tx.Commit()
	return nil
}

// 修改状态
func UpdateChild(id int, status bool) error {
	err := db.DbConn.Model(&models.MenuSetting{}).Where("id = ?", id).Update("child_status", !status).Error
	if err != nil {
		return err
	}
	return nil
}

// 修改状态
func UpdateIssue(id int, status bool) error {
	err := db.DbConn.Model(&models.MenuSetting{}).Where("id = ?", id).Update("visible", !status).Error
	if err != nil {
		return err
	}
	return nil
}

// 软删除
func DeleteMenu(id int) error {
	err := db.DbConn.Model(&models.MenuSetting{}).Where("id = ?", id).Update("state", true).Error
	if err != nil {
		return err
	}
	return nil
}

// 查询所有的路由数据
func SelectMenuAll() (*[]models.MenuSetting, error) {
	var menuList []models.MenuSetting

	err := db.DbConn.Select([]string{"id", "menu_name"}).Where("child_status = ?", true).Find(&menuList).Error
	return &menuList, err
}
