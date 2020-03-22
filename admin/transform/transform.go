package transform

//所有和转换相关的函数
import (
	"errors"
	"fmt"
	"strconv"
	"strings"
)

//interface 转换float64
func InterToFloat64(inter interface{}) (float64, error) {
	if inter == nil {
		return -1, errors.New("参数错误")
	}
	switch v := inter.(type) { //v表示b1 接口转换成Bag对象的值
	case []byte:
		return strconv.ParseFloat(string(v), 64)
	case int:
		return float64(v), nil
	case string:
		return strconv.ParseFloat(v, 64)
	case float64:
		return v, nil
	default:
		return -1, fmt.Errorf("type %T", v)
	}
}

//interface 转换int
func InterToInt(inter interface{}) (int, error) {
	if inter == nil {
		return -1, errors.New("参数错误")
	}
	switch v := inter.(type) { //v表示b1 接口转换成Bag对象的值
	case []byte:
		return strconv.Atoi(string(v))
	case int:
		return v, nil
	case string:
		return strconv.Atoi(v)
	case float64:
		return int(v), nil
	default:
		return -1, fmt.Errorf("type %T", v)
	}
}

//interface 转换string
func InterToString(inter interface{}) (string, error) {
	if inter == nil {
		return "", errors.New("参数错误")
	}
	switch v := inter.(type) { //v表示b1 接口转换成Bag对象的值
	case []byte:
		return string(v), nil
	case int:
		str := strconv.Itoa(v)
		return str, nil
	case string:
		return v, nil
	case float64:
		str := strconv.FormatFloat(v, 'f', -1, 64)
		return str, nil
	default:
		return "", fmt.Errorf("type %T", v)
	}
}

//10进制转16进制
func DecToHex(num string) (string, error) {
	if len(num) == 10 {
		n, err := strconv.ParseInt(num, 10, 64)
		if err != nil {
			return "", err
		} else {
			result := strings.ToUpper(strconv.FormatInt(n, 16))
			if len(result) != 8 {
				k := 8 - len(result)
				for i := 0; i < k; i++ {
					result = "0" + result
				}
			}
			return result, nil
		}
	}
	if len(num) == 20 {
		first := num[0:10]
		last := num[10:]
		firstN, err := strconv.ParseInt(first, 10, 64)
		if err != nil {
			return "", err
		}
		lastN, err := strconv.ParseInt(last, 10, 64)
		if err != nil {
			return "", err
		}
		// fmt.Println(strconv.FormatInt(firstN, 16))
		// fmt.Println(strconv.FormatInt(lastN, 16))
		resultF := strings.ToUpper(strconv.FormatInt(firstN, 16))
		resultL := strings.ToUpper(strconv.FormatInt(lastN, 16))
		if len(resultF)-8 != 0 {
			k := 8 - len(resultF)
			for i := 0; i < k; i++ {
				resultF = "0" + resultF
			}
		}
		if len(resultL)-8 != 0 {
			k := 8 - len(resultL)
			for i := 0; i < k; i++ {
				resultL = "0" + resultL
			}
		}
		return resultF + resultL, nil

	}
	return "", errors.New("input not a number")
}

//16进制转10进制
func HexToDec(num string) (string, error) {
	if len(num) == 8 {
		// fmt.Println("8")
		n, err := strconv.ParseInt(num, 16, 64)
		if err != nil {
			return "", err
		} else {
			result := strings.ToUpper(strconv.FormatInt(n, 10))
			if len(result) != 10 {
				k := 10 - len(result)
				for i := 0; i < k; i++ {
					result = "0" + result
				}
			}

			return result, nil
		}
	}
	if len(num) == 16 {
		// fmt.Println("16")
		first := num[0:8]
		last := num[8:]
		firstN, err := strconv.ParseInt(first, 16, 64)
		if err != nil {
			return "", err
		}
		lastN, err := strconv.ParseInt(last, 16, 64)
		if err != nil {
			return "", err
		}
		// fmt.Println(strconv.FormatInt(firstN, 10))
		// fmt.Println(strconv.FormatInt(lastN, 10))
		resultF := strings.ToUpper(strconv.FormatInt(firstN, 10))
		if len(resultF) != 10 {
			k := 10 - len(resultF)
			for i := 0; i < k; i++ {
				resultF = "0" + resultF
			}
		}
		resultL := strings.ToUpper(strconv.FormatInt(lastN, 10))
		if len(resultL) != 10 {
			k := 10 - len(resultL)
			for i := 0; i < k; i++ {
				resultL = "0" + resultL
			}
		}
		return resultF + resultL, nil

	}
	return "", errors.New("input not a number")
}

func InterToBool(inter interface{}) (bool, error) {
	if inter == nil {
		return false, errors.New("参数错误")
	}
	switch v := inter.(type) {
	case bool:
		return v, nil
	case string:
		if v == "false" {
			return false, nil
		}
		return true, nil
	default:
		return false, fmt.Errorf("type %T", v)
	}
}
