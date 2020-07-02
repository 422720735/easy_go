package common

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"time"
)

//发送GET请求
//url:请求地址
//response:请求返回的内容
func HttpGet(url string) (response string, err error) {
	client := http.Client{Timeout: 5 * time.Second}
	resp, err := client.Get(url)
	defer resp.Body.Close()
	if err != nil {
		return "", err
	}
	var buffer [512]byte
	result := bytes.NewBuffer(nil)
	for {
		n, err := resp.Body.Read(buffer[0:])
		result.Write(buffer[0:n])
		if err != nil && err == io.EOF {
			break
		} else if err != nil {
			return "", err
		}
	}
	response = result.String()
	return response, nil
}

//发送POST请求
//url:请求地址		data:POST请求提交的数据		contentType:请求体格式，如：application/json
//content:请求返回的内容
func HttpPost(url string, data interface{}, contentType string) (content string) {
	jsonStr, _ := json.Marshal(data)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
	req.Header.Add("content-type", contentType)
	if err != nil {
		panic(err)
	}
	defer req.Body.Close()
	client := &http.Client{Timeout: 5 * time.Second}
	resp, error := client.Do(req)
	if error != nil {
		panic(error)
	}
	defer resp.Body.Close()
	result, _ := ioutil.ReadAll(resp.Body)
	content = string(result)
	return
}
