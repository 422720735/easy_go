gulp 自动化构建工具

全局安装 gulp
npm install --g gulp

安装依赖
npm install

开发环境
npm run dev

生产环境
npm run build

``` 
.
├── README.md
├── gulpfile.js             // gulp 操控插件
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── assets              // 第三方插件
    ├── css                 // 通过sass编译过来css存放位置
    ├── fonts               // 当前使用iconfont，可用于导航菜单管理。
    ├── images              // 图片存放位置。
    ├── js                  // 项目使用到到js
    └── sass                // 通过sass预编译转css
```

开发中，如果修改了 assets、images、fonts文件夹内容，修改后请```npm run build```一次，当前只监控了sass和js文件变化。
最终都会把各种资源输出到/blog/static/，html模版都存放在/blog/template/，生产环境我们会：压缩页面JS、压缩页面CSS，删除空格属性值等，模版最终输出到views下。