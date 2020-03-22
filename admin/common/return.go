package common

const (
	//成功返回
	G_Success = 1
	//参数错误
	G_ParamErr = 0
	//无权限访问
	G_Restrict = 3
	// 未知异常
	G_UNKNOWERR = 4
)

var recodeText = map[int]string{
	G_Success:   "操作成功",
	G_ParamErr:  "操作失败",
	G_Restrict:  "无权限访问",
	G_UNKNOWERR: "未知异常",
}

func ReturnMessage(code int) string {
	str, ok := recodeText[code]
	if ok {
		return str
	}
	return ReturnMessage(G_UNKNOWERR)
}