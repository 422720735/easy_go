package common

const (
	//成功返回
	G_Success = 1
	//参数错误
	G_ParamErr = 2
	//无权限访问
	G_Restrict = 3

	G_UNKNOWERR = 0
)

var recodeText = map[int]string{
	G_Success:   "操作成功",
	G_ParamErr:  "操作失败",
	G_Restrict:  "无权限访问",
	G_UNKNOWERR: "未知错误",
}

func ReturnMessage(code int) string {
	str, ok := recodeText[code]
	if ok {
		return str
	}
	return ReturnMessage(G_UNKNOWERR)
}
