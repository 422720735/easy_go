package main

import (
	"fmt"
)

type Person struct {
	Name   string  `json:"name"`
	Age       int	`json:"age"`
}

func SetValueToStruct(name string,age int) *Person {
	p := &Person{}
	v := reflect.ValueOf(p).Elem()
	v.FieldByName("Name").Set(reflect.ValueOf(name))
	v.FieldByName("Age").Set(reflect.ValueOf(age))
	return p
}


func main()  {
	p := SetValueToStruct("张三",18)
	fmt.Println(*p)
}
