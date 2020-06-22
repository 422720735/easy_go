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
func (c *BaseController) Success(msg interface{}) {
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
*@param:nums		总条数
*@param:data		返回内容
 */
func Paginator(page, pagesize int, nums int64, data interface{}) map[string]interface{} {

	var prepage int  //前一页地址
	var nextpage int //后一页地址
	//根据nums总数，和pagesize每页数量 生成分页总数
	totalpages := int(math.Ceil(float64(nums) / float64(pagesize))) //page总数
	if page > totalpages {
		page = totalpages
	}
	if page <= 0 {
		page = 1
	}
	var pages []int
	switch {
	case page >= totalpages-8 && totalpages > 8: //最后8页
		start := totalpages - 8 + 1
		prepage = page - 1
		nextpage = int(math.Min(float64(totalpages), float64(page+1)))
		pages = make([]int, 8)
		for i, _ := range pages {
			pages[i] = start + i
		}
	case page >= 5 && totalpages > 8:
		start := page - 5 + 1
		pages = make([]int, 8)
		prepage = page - 5
		for i, _ := range pages {
			pages[i] = start + i
		}
		prepage = page - 1
		nextpage = page + 1
	default:
		pages = make([]int, int(math.Min(8, float64(totalpages))))
		for i, _ := range pages {
			pages[i] = i + 1
		}
		prepage = int(math.Max(float64(1), float64(page-1)))
		nextpage = page + 1
	}
	paginatorMap := make(map[string]interface{})
	paginatorMap["pages"] = pages
	paginatorMap["total"] = nums
	paginatorMap["totalpages"] = totalpages
	paginatorMap["prepage"] = prepage
	paginatorMap["nextpage"] = nextpage
	paginatorMap["current"] = page
	paginatorMap["list"] = data
	return paginatorMap
}
