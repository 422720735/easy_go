## admin/template/base 暂时废弃



# 使用beego重构博客（目的最简单的部署方式，最优美的界面展示）

吴先生的博客[http://www.woann.cn](http://www.woann.cn)


仿简述版本[仿简述版本](http://vue.jackhu.top/)
###
[参考1](http://www.54tianzhisheng.cn/)
###
[参考2](https://lin-xin.gitee.io/open/)

### 侧边栏
[jQuery响应式隐藏滑动侧边栏插件效果演示](http://www.htmleaf.com/Demo/201507012144.html)


置顶 热门 标签
[jQuery分页插件适配PC端移动端](http://www.jq22.com/demo/jquerypagination201811080936/)


[Google Code Prettify，代码高亮的JS库](https://blog.csdn.net/u011127019/article/details/77165062)

[代码高亮](http://www.bootstrapmb.com/search?keyword=%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE)

[登陆注册忘记密码模版](http://www.jq22.com/demo/jQueryZcMoban201709140221/)

[css小三角](https://www.jianshu.com/p/9a463d50e441)


[后台模版](http://v.bootstrapmb.com/2019/11/gdgux6705/)

[创意bootstrap模版](http://www.bootstrapmb.com/item/6705)

[用beego开发服务端应用](https://www.cnblogs.com/zhangboyu/p/7760693.html)

[开源在线 Markdown 编辑器](http://editor.md.ipandao.com/)

[原生js的图片上传插件cupload](http://www.jq22.com/jquery-info22747)

[jQuery图片预览插件](http://www.jq22.com/jquery-info19658)

[wangEditor-轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器](https://www.kancloud.cn/wangfupeng/wangeditor3/332599)

[仿微信公众平台文章发布](http://www.jq22.com/yanshi22827)

[jQuery标签插件Tag-it](http://www.jq22.com/jquery-info19168)

[评论参考](http://www.bootstrapmb.com/item/5089)

[Swiper.js响应式单排图片滚动jQuery代码](http://www.bootstrapmb.com/item/3968/preview)

[js图片编辑器插件Filerobot](http://www.bootstrapmb.com/item/5226/preview)
```   
// 查询所有的类型及与之相对应的父级menu
func SelectArticleTypeMenuName(tag string) ([]interface{}, error) {
	// 路由
	var menuList []*models.MenuSetting
	menu := db.DbConn.Model(&menuList)

	// 文章类型 要过滤下架和软删除的
	var articleList []*models.ArticleType
	articleType := db.DbConn.Model(&articleList).Where("visible = ? and state = ?", true, false)

	var err error
	tags := strings.Split(tag, ",")
	if len(tags) == 1 && tags[0] != "" {
		// 过滤menu 表
		menu = menu.Where("menu_id = ?", tags[0])
	} else if len(tags) == 2 {
		// 过滤menu 和 article-type
		menu = menu.Where("menu_id = ?", tags[0])
		articleType.Where("id = ?", tags[1])
	}

	err = _menu.Find(&menuList).Error_
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}
	err =articleType.Find(&articleType).Error
	if err != nil {
		logs.Critical(err.Error())
		return nil, err
	}

	var result []interface{}
	for j := 0; j < len(menuList); j++ {
		// 只装载上架的数据
		if menuList[j].Visible {
			menuItem := make(map[string]interface{})
			menuItem["name"] = *&menuList[j].MenuName
			menuItem["id"] = *&menuList[j].Id
			menuItem["child_status"] = *&menuList[j].ChildStatus
			var arr []interface{}
			for i := 0; i < len(articleList); i++ {
				item := make(map[string]interface{})
				if articleList[i].MenuId == *&menuList[j].Id {
					// 只装载上架的数据
					if *&menuList[j].ChildStatus {
						item["id"] = *&articleList[i].Id
						item["name"] = *&articleList[i].ArticleName
						item["menu_id"] = *&articleList[i].MenuId
						arr = append(arr, item)
						menuItem["child"] = arr
					}
				}
			}
			result = append(result, menuItem)
		}
	}

	return result, nil
}


```