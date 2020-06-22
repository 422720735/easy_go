package system

import (
	"easy_go/admin/common"
	"easy_go/admin/logger"
	"easy_go/admin/servers"
	"easy_go/admin/transform"
)

type CoverControllers struct {
	common.BaseController
}

func (c *CoverControllers) Get() {
	c.Layout = "layout/mainLayout.html"
	c.TplName = "pages/system/cover.html"
	c.LayoutSections = make(map[string]string)
	// menu
	c.LayoutSections["LeftMenu"] = "layout/leftSideMenuLayout.html"
	// header
	c.LayoutSections["HeaderLayout"] = "layout/headerLayout.html"
	// footer
	c.LayoutSections["FooterLayout"] = "layout/footerLayout.html"
	// css
	c.LayoutSections["BaseStyle"] = "style/baseStyle.html"
	// js
	c.LayoutSections["BaseScript"] = "script/baseScript.html"

	c.LayoutSections["Style"] = "style/cover.html"
	c.LayoutSections["Script"] = "script/cover.html"
	c.LayoutSections["ScriptMessage"] = "script/message.html"
}

func (c *CoverControllers) CoverInfo() {
	cover, err := servers.SelectCover()
	if err != nil {
		logger.Error("图片封面获取失败", err.Error())
	}
	c.Success(*&cover.Cover)
}

func (c *CoverControllers) HandleCoverAlter() {
	msg, err := common.Unmarshal(&c.Controller)
	if err != nil {
		logger.Info("图片封面参数不合法", err.Error())
		c.Error("图片封面参数不合法")
		return
	}

	cover, err := transform.InterToString(msg["cover"])
	if err != nil {
		logger.Info("获取封面图片数据失败", err.Error())
		c.Error("获取封面图片数据失败")
		return
	}

	if cover == "" {
		c.Error("图片封面不能为空")
		return
	}

	err = servers.UpdateCover(cover)
	if err != nil {
		logger.Info("图片封面编辑失败", err.Error())
		c.Error("图片封面编辑失败")
		return
	}

	c.Success("图片封面修改成功")

}
