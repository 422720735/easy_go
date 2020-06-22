package servers

import (
	"easy_go/admin/db"
	"easy_go/admin/logger"
	"easy_go/admin/models"
	"time"
)

func SelectCover() (*models.System, error) {
	var c models.System
	err:=db.DbConn.Select([]string{"cover"}).Model(&models.System{}).Where("id = ?", 1).Find(&c).Error
	if err != nil {
		logger.Info(err.Error())
		return &c, err
	}

	return &c, nil
}

func UpdateCover(cover string) error {
	var count int
	err := db.DbConn.Select([]string{"id"}).Model(&models.System{}).Count(&count).Error
	if err != nil {
		logger.Info(err.Error())
		return err
	}
	if count == 0 {
		s := models.System{
			Cover: cover,
			CreatedTime: time.Now(),
		}
		err = db.DbConn.Create(&s).Error
	} else {
		err = db.DbConn.Model(&models.System{}).Where("id = ?", 1).Updates(map[string]interface{}{"cover": cover, "update_time": time.Now()}).Error
	}
	if err != nil {
		logger.Info(err.Error())
		return err
	}
	return nil
}

