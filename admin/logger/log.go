package logger

import (
	"encoding/json"

	"github.com/astaxie/beego/logs"
)

type LoggerConfig struct {
	FileName            string `json:"filename"`
	Level               int    `json:"level"`    // 日志保存的时候的级别，默认是 Trace 级别
	Maxlines            int    `json:"maxlines"` // 每个文件保存的最大行数，默认值 1000000
	Maxsize             int    `json:"maxsize"`  // 每个文件保存的最大尺寸，默认值是 1 << 28, //256 MB
	Daily               bool   `json:"daily"`    // 是否按照每天 logrotate，默认是 true
	Maxdays             int    `json:"maxdays"`  // 文件最多保存多少天，默认保存 7 天
	Rotate              bool   `json:"rotate"`   // 是否开启 logrotate，默认是 true
	Perm                string `json:"perm"`     // 日志文件权限
	RotatePerm          string `json:"rotateperm"`
	EnableFuncCallDepth bool   `json:"-"` // 输出文件名和行号
	LogFuncCallDepth    int    `json:"-"` // 函数调用层级
}

func Init() {
	var logCfg = LoggerConfig{
		FileName:            "./logger/log/error.log",
		Level:               7,
		EnableFuncCallDepth: true,
		LogFuncCallDepth:    3,
		RotatePerm:          "777",
		Perm:                "777",
	}

	// 设置beego log库的配置
	b, _ := json.Marshal(&logCfg)
	logs.SetLogger(logs.AdapterFile, string(b))
	logs.EnableFuncCallDepth(logCfg.EnableFuncCallDepth)
	logs.SetLogFuncCall(true)
	logs.SetLogFuncCallDepth(logCfg.LogFuncCallDepth)

}
