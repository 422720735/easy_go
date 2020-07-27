``` 
//指定是否控制台打印，默认为true
logger.SetConsole(true)
//指定日志文件备份方式为文件大小的方式
//第一个参数为日志文件存放目录
//第二个参数为日志文件命名
//第三个参数为备份文件最大数量
//第四个参数为备份文件大小
//第五个参数为文件大小的单位 KB，MB，GB TB
//logger.SetRollingFile("d:/logtest", "test.log", 10, 5, logger.KB)

//指定日志文件备份方式为日期的方式
//第一个参数为日志文件存放目录
//第二个参数为日志文件命名
logger.SetRollingDaily("d:/logtest", "test.log")

//指定日志级别  ALL，DEBUG，INFO，WARN，ERROR，FATAL，OFF 级别由低到高
//一般习惯是测试阶段为debug，生成环境为info以上
logger.SetLevel(logger.DEBUG)
```

[go-logger 是golang 的日志库 ，基于对golang内置log的封装。](https://github.com/donnie4w/go-logger)
