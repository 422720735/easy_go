/**********************************************
** @Des: 读取config 造个轮子吧
** @Author: haodaquan
** @Date:   2017-10-17 10:45:17
** @Last Modified by:   haodaquan
** @Last Modified time: 2017-10-18 09:40:00
***********************************************/

package lib

import (
	"bufio"
	"io"
	"log"
	"os"
	"path"
	"runtime"
	"strings"
)

type Configs struct {
	config map[string]string
	node   string
}

const MidStr = "-_-!"

var Conf *Configs
const configFile = "../../config/config.ini"

func init() {
	Conf = new(Configs)
	_, filename, _, _ := runtime.Caller(0)
	datapath := path.Join(path.Dir(filename), configFile)
	//Conf.LoadConfig("../config/config.ini")
	Conf.LoadConfig(datapath)
}

func (conf *Configs) LoadConfig(path string) {
	conf.config = make(map[string]string)
	file, err := os.Open(path)
	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()
	buf := bufio.NewReader(file)
	for {
		lines, _, err := buf.ReadLine()
		line := strings.TrimSpace(string(lines))
		if err != nil {
			//读完最后一行退出
			if err == io.EOF {
				break
			}
			log.Fatal(err)
		}
		// 处理注释
		if strings.Index(line, "#") == 0 {
			continue
		}
		//如果是[xxx]
		n := strings.Index(line, "[")
		nl := strings.LastIndex(line, "]")

		if n > -1 && nl > -1 && nl > n+1 {
			conf.node = strings.TrimSpace(line[n+1 : nl])
			continue
		}
		if len(conf.node) == 0 || len(line) == 0 {
			continue
		}
		arr := strings.Split(line, "=")
		key := strings.TrimSpace(arr[0])
		value := strings.TrimSpace(arr[1])
		newKey := conf.node + MidStr + key
		conf.config[newKey] = value
	}
}

func (conf *Configs) Read(node, key string) string {
	key = node + MidStr + key
	if v, ok := conf.config[key]; !ok {
		return ""
	} else {
		return v
	}
}
