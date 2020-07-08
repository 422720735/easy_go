package main

import (
	"fmt"
	"net/http"
)

// 协程
func main() {
	link := []string{
		"https://www.bilibili.com",
		"https://www.baidu.com",
		"https://www.qq.com",
		"https://www.360.com",
		"https://mail.qq.com",
		"http://www.sketchcn.com",
		"https://cn.bing.com",
		"https://www.antdv.com/docs/vue/introduce-cn",
		"https://studygolang.com/pkgdoc",
		"https://element.eleme.cn/2.0/#/zh-CN/component/installation",
		"https://blog.csdn.net/asing1elife/article/details/82820611",
		"https://juejin.im/post/5bd68fd0e51d45654c47a2df",
		"http://fanyi.youdao.com",
	}

	c := make(chan string)

	for _, v := range link {
		go checkList(v, c)
	}

	for i := 0; i < len(link); i++ {
		fmt.Println(<-c)
	}
}

func checkList(link string, c chan string) {
	_, err := http.Get(link)
	if err != nil {
		fmt.Println(link, "没有连接上")
		c <- "没有连接上"
		return
	}
	c <- "连接上"
}
