package common

import (
	"math"
	"time"

	"github.com/astaxie/beego"
	// captcha2 "github.com/astaxie/beego/utils/captcha"
)

/*
// 全局验证码结构体
var captcha *captcha2.Captcha

// init函数初始化captcha
func init()  {
	// 验证码功能
	// 使用Beego缓存存储验证码数据
	store := captcha.NewMemoryCache()
	// 创建验证码
	captcha = captcha.NewWithFilter("/captcha", store)
	// 设置验证码长度
	captcha.ChallengeNums = 4
	// 设置验证码模板高度
	captcha.StdHeight = 50
	// 设置验证码模板宽度
	captcha.StdWidth = 120
}*/

type BaseController struct {
	beego.Controller
}

type Message interface {
	Success(msg, url string)
	Error(msg, url string)
}

func (c *BaseController) History(msg string, url string) {
	if url == "" {
		c.Ctx.WriteString("<script>alert('" + msg + "');window.history.go(-1);</script>")
		c.StopRun()
	} else {
		c.Redirect(url, 302)
	}
}
func (c *BaseController) Success(msg string) {
	c.Data["json"] = map[string]interface{}{
		"code":    G_Success,
		"message": ReturnMessage(G_Success),
		"data":    msg,
		"time":    time.Now().Unix(),
	}
	c.ServeJSON()
}

func (c *BaseController) Error(msg string) {
	c.Data["json"] = map[string]interface{}{
		"code":    G_ParamErr,
		"message": ReturnMessage(G_ParamErr),
		"data":    msg,
		"time":    time.Now().Unix(),
	}
	c.ServeJSON()
}

func Echo(c *BaseController, code int, body interface{}) {
	c.Data["json"] = map[string]interface{}{
		"code": code,
		"data": body,
		"time": time.Now().Unix(),
	}
	c.ServeJSON()
}

/*分页方法，根据传递过来的页数，每页数，总数，返回分页的内容 7个页数 前 1，2，3，4，5 后 的格式返回,小于5页返回具体页数
*组装page
*参数说明:
*@param:page	    当前页
*@param:prepage	    每页条数
*@param:page		请求的页数
*@param:count		请求的数量
*@param:inter		返回内容
 */
func Paginator(page, prepage int, nums int64, data interface{}) map[string]interface{} {

	var firstpage int //前一页地址
	var lastpage int  //后一页地址
	//根据nums总数，和prepage每页数量 生成分页总数
	totalpages := int(math.Ceil(float64(nums) / float64(prepage))) //page总数
	if page > totalpages {
		page = totalpages
	}
	if page <= 0 {
		page = 1
	}
	var pages []int
	switch {
	case page >= totalpages-5 && totalpages > 5: //最后5页
		start := totalpages - 5 + 1
		firstpage = page - 1
		lastpage = int(math.Min(float64(totalpages), float64(page+1)))
		pages = make([]int, 5)
		for i, _ := range pages {
			pages[i] = start + i
		}
	case page >= 3 && totalpages > 5:
		start := page - 3 + 1
		pages = make([]int, 5)
		firstpage = page - 3
		for i, _ := range pages {
			pages[i] = start + i
		}
		firstpage = page - 1
		lastpage = page + 1
	default:
		pages = make([]int, int(math.Min(5, float64(totalpages))))
		for i, _ := range pages {
			pages[i] = i + 1
		}
		firstpage = int(math.Max(float64(1), float64(page-1)))
		lastpage = page + 1
		//fmt.Println(pages)
	}
	paginatorMap := make(map[string]interface{})
	paginatorMap["pages"] = pages
	paginatorMap["total"] = nums
	paginatorMap["totalpages"] = totalpages
	paginatorMap["firstpage"] = firstpage
	paginatorMap["lastpage"] = lastpage
	paginatorMap["currpage"] = page
	paginatorMap["list"] = data
	return paginatorMap
}
