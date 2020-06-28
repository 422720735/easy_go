package controllers

import "strconv"

func getHomeParams(param1, param2 string) (int, int) {
	if param1 == "" && param2 == "" {
		// 查询全部
		return 0, 0
	} else if param1 == "" && param2 != "" {
		id1, err := strconv.Atoi(param2)
		if err == nil {
			return id1, 0
		}
	} else if param1 != "" && param2 != "" {
		var a int
		var b int
		id1, err := strconv.Atoi(param1)
		if err == nil {
			a = id1
		}

		id2, err := strconv.Atoi(param2)
		if err == nil {
			b = id2
		}
		return a, b
	}
	return 0, 0
}
