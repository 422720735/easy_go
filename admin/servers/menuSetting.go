package servers

import (
	"easy_go/admin/logger"
	"easy_go/db"
	"easy_go/models"
	"errors"
	"time"
)

func SelectMenuPage(page, size int) (*[]models.MenuSetting, int64, error) {
	// 根据分页数据请求
	var menuList []models.MenuSetting
	var total int64

	// 获取总条数
	err := db.DbConn.Model(&menuList).Count(&total).Error
	if err != nil {
		logger.Info(err.Error())
		return &menuList, total, err
	}

	// 获取取指page，指定pagesize的记录
	err = db.DbConn.Limit(size).Offset((page - 1) * size).Order("sort asc").Find(&menuList).Error
	if err != nil {
		logger.Warn(err.Error())
		return &menuList, total, err
	}
	return &menuList, total, nil
}

// 新增路由菜单数据
func InsertMenu(menuName, path, icon string, isChildSwitch bool) error {
	var m models.MenuSetting
	m.MenuName = menuName
	m.Path = path
	m.Icon = icon
	m.ChildStatus = isChildSwitch
	m.CreatedTime = time.Now()
	var count int
	err := db.DbConn.Select([]string{"id"}).Model(&models.MenuSetting{}).Count(&count).Error
	if err == nil {
		m.Sort = count + 1
	}
	err = db.DbConn.Create(&m).Error
	if err != nil {
		logger.Warn(err.Error())
		return err
	}
	return nil
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
		logger.Info(err.Error())
		return err
	}
	if str == "top" {
		err = db.DbConn.Model(&models.MenuSetting{}).Where("sort = ?", sort-1).Find(&prev_next).Error
		sortNext = sort - 1
		if err != nil {
			logger.Info(err.Error())
			return err
		}
	} else {
		err = db.DbConn.Model(&models.MenuSetting{}).Where("sort = ?", sort+1).Find(&prev_next).Error
		sortNext = sort + 1
		if err != nil {
			logger.Info(err.Error())
			return err
		}
	}
	// 开始事务
	tx := db.DbConn.Begin()
	// 修改数据
	err = tx.Model(&current).Updates(map[string]interface{}{"sort": sortNext, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		tx.Rollback()
	}
	err = tx.Model(&prev_next).Updates(map[string]interface{}{"sort": sort, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		tx.Rollback()
	}
	tx.Commit()
	return nil
}

// 修改状态
func UpdateChild(id int, status bool) (int, error) {
	var showCount int
	var err error

	if status == false {
		// 用户上架需要查看当前已经上架了多少
		err = db.DbConn.Select([]string{"id", "visible"}).Model(&models.MenuSetting{}).Where("visible = ?", true).Count(&showCount).Error
		if err != nil {
			return 0, err
		}

		if showCount == 15 {
			return showCount, errors.New("当前上架已到最大限！")
		}
	}

	err = db.DbConn.Model(&models.MenuSetting{}).Where("id = ?", id).Updates(map[string]interface{}{"child_status": !status, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		return 0, err
	}
	return 0, nil
}

// 修改状态
func UpdateIssue(id int, status bool) error {
	err := db.DbConn.Model(&models.MenuSetting{}).Where("id = ?", id).Updates(map[string]interface{}{"visible": !status, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		return err
	}
	return nil
}

// 软删除
func DeleteMenu(id int) error {
	err := db.DbConn.Model(&models.MenuSetting{}).Where("id = ?", id).Updates(map[string]interface{}{"state": true, "update_time": time.Now()}).Error
	if err != nil {
		logger.Warn(err.Error())
		return err
	}
	return nil
}

// 查询所有的路由数据
func SelectMenuAll() (*[]models.MenuSetting, error) {
	var menuList []models.MenuSetting
	err := db.DbConn.Select([]string{"id", "menu_name"}).Where("child_status = ?", true).Find(&menuList).Error
	if err != nil {
		logger.Info(err.Error())
		return nil, err
	}
	return &menuList, nil
}