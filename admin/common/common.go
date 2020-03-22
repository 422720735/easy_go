package common

import (
	"encoding/json"
	"github.com/astaxie/beego"
)

//获取body
func Unmarshal(c *beego.Controller) (map[string]interface{}, error) {
	msg := make(map[string]interface{})
	err := json.Unmarshal(c.Ctx.Input.RequestBody, &msg)
	if err != nil {
		return nil, err
	}
	return msg, nil
}