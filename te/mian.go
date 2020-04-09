package main

import (
	"encoding/base64"
	"fmt"
)

func main() {
	str:= []byte("我爱你蓝天")
	// 编码
	base64Str:= base64.StdEncoding.EncodeToString(str)
	fmt.Println("base64编码字符串:" ,base64Str)

	//解码
	data,error := base64.StdEncoding.DecodeString(base64Str)
	if error != nil {
		fmt.Println(error)
	}
	fmt.Println("解码base64:",string(data))
}
