#介绍
[easy_go](https://github.com/422720735/easy_go)
翻阅github很多go编写的博客，发觉大多对应前端程序员部署还是需要成本，而且博客页面不是那么优美，而我们前端程序员一般会使用
node编写，页面虽然好看些，但是node开发的在性能上有缺陷，加上node提供的模板引擎不友好，基本都用node提供api，前后端分离，这样对seo不友好。
本博客应该能很简单的跑起来，并部署，对前端友好。
## 功能预览
![首页白天模式.png](http://assets.cdbob.cn/%E9%A6%96%E9%A1%B5%E7%99%BD%E5%A4%A9%E6%A8%A1%E5%BC%8F.png)

![首页黑夜模式.png](http://assets.cdbob.cn/%E9%A6%96%E9%A1%B5%E9%BB%91%E5%A4%9C%E6%A8%A1%E5%BC%8F.png)

![后台登录.png](http://assets.cdbob.cn/%E5%90%8E%E5%8F%B0%E7%99%BB%E5%BD%95%E9%A1%B5.png)

![后台工作台.png](http://assets.cdbob.cn/%E5%90%8E%E5%8F%B0%E5%B7%A5%E4%BD%9C%E5%8F%B0.png)

## 开发博客历程：
- v.1 jquery + [Express](https://www.expressjs.com.cn/) + [mongodb](https://www.mongodb.org.cn/) 编写一个简易能发布文章，跟前台展示文章的简易版本
作为一个web程序员应该有自己的博客，当然可以用现成的，但是作为一个技术开发者，我还是选择了自己编写自己版本的博客，作为第一个版本，其实开发过程中，发觉有很多问题。

- v.2 [Vue](https://cn.vuejs.org/) + [Ant Design Pro](https://pro.ant.design/) + [Gin](https://github.com/gin-gonic/gin)
####
在我工作中有幸接触到go语言，发觉go语言运行简单，打包后就是一个二进制可执行程序，作为一名前端程序员，对docker等技术陌生，发觉go部署简单，我尝试用go来编写api，使用vue编写html，
经过上个版本我发觉mongodb存储数据会有很大性能问题，还是需要使用mysql，但是自己工作中使用到mysql地方其实并不多，我果断放弃任何orm，使用go提供的原生mysql包编写api，
前台页面在上个版本基础上，我进行了大量调整，作为一个web前端，页面写的漂亮是我们的基本功。后台我使用蚂蚁金服的ant-design-pro，这个是不对外开放，我只需要对博客进行管理。


- v.3 jquery + [Beego](https://beego.me/) + [Mysql](https://www.mysql.com/)
##
虽然现在前后端分离是主流，但是vue对应seo有缺陷，虽然node提供了相关解决方案，但是对于不熟悉的人还是要学习成本，我采用了最传统模板渲染方式。
虽然上个版本我用的是原生mysql，其实开发效率及性能上是有缺陷了，所以该版本采用gorm，加上go的部署简单，不用容器等技术也能，很快部署项目。

## 下载地址(任选其一)

```
git clone git@github.com:422720735/easy_go.git

git clone https://gitee.com/l422720735/easy_go.git
```

## 技术栈
- [x] beego
- [x] mysql
- [x] gorm
- [x] git第三方登录、码云第三方登录、(后续添加QQ第三方登录)
- [x] gorm
- [x] jwt-go 权限验证
- [x] 简单日志切割服务
- [x] node
- [x] jquery
- [x] bootstrap3
- [x] gulp
- [x] sass

> 前端使用自动构建工具[gulp](https://www.gulpjs.com.cn/)管理，查看gulp说明 /admin/gulp/、/blog/gulp

## 前端环境
``` 
进入admin和blog的/gulp，分别运行
npm install
npm run build && npm run dev
```

### [字体图标](https://www.iconfont.cn/)
> 字体图表可以选用以下两种方式：

```
<link rel="stylesheet" href="/static/fonts/iconfont.css">

<link rel="stylesheet" href="//at.alicdn.com/t/font_1521018_rlytcpm4z2b.css">
```

## 后端环境
关于golang和beego的开发环境在这里就不赘述了，请自行百度获取。

### 加入数据库
mysql 新建easy_go数据库、字符集utf8mb4，并把easy_go.sql 导入


#### 数据库、七牛云、图片验证码、token、第三方登陆
```
go get -u github.com/go-sql-driver/mysql
go get -u github.com/jinzhu/gorm

go get -u github.com/qiniu/api.v7

go get -u github.com/dchest/captcha

go get -u github.com/dgrijalva/jwt-go

go get github.com/zcshan/d3outh
```

#### 修改config/config.ini 配置
> [flag包添加环境](https://www.letianbiji.com/go/go-pkg-flag.html) 默认环境是dev，直接通过bee run直接运行，生产环境通过命令行添加 -env prod

### 运行
```
    cd 到 easy_go admin和blog目录 执行
    $ bee run
```

#### 浏览器演示

​	前台：http://localhost:80/

​	后台：http://localhost:8201/

### 1、Mac下编译Linux, Windows平台的64位可执行程序：
```
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```

### 2、Linux下编译Mac, Windows平台的64位可执行程序：
```
$ CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build
$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```
### 3、Windows下编译Mac, Linux平台的64位可执行程序：
```
$ SET CGO_ENABLED=0 SET GOOS=darwin3 SET GOARCH=amd64 go build
$ SET CGO_ENABLED=0 SET GOOS=linux SET GOARCH=amd64 go build
```

### 生产环境运行(linux/windows)
```
nohup ./blog -env prod &

admin.exe -env prod
```