[文档说明](http://192.168.125.12:20027/)

```
├── README.md
├── babel.config.js
├── config
├── dist
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
│   ├── api
│   ├── assets
│   ├── components                   // 公共组件
│   ├── config
│   ├── layouts                      // 布局组件
│   ├── packDeploy.json
│   ├── project                      // 所有项目入口文件
│   ├── registerServiceWorker.ts
│   ├── router                       // 路由数组件。
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── slots                        // 插槽组件
│   ├── store                        // vuex
│   └── utils                        // 工具组件(axios、判断设备)
├── tsconfig.json
└── vue.config.js
```

# 运行命令

```
npm run dev

npm run dist (打包部署)

npm run build XXX(项目单独打包,只打包一个项目)

```

# dist 文件说明 (可继续叠加)

```
├── bank       // 银行
├── company    // 企业
├── index      // 前台
└── index.html // 项目入口文件。
```

### 多项目对应打包 dist

```
[
    {
        "projectName": "index",
        "title": "主项目",
        "isPack": true,
        "isDev": true
    },
    {
        "projectName": "bank",
        "title": "金融机构",
        "isPack": true,
        "isDev": true
    },
    {
        "projectName": "company",
        "title": "申贷企业",
        "isPack": true,
        "isDev": true
    }
]
```

### packDeploy.json

```
{
    "projectName": "index",   // 项目名称（需要与src/project下面创建的文件夹名字相同）
    "title": "主项目",        // html的title
    "isPack": true,          // 是否需要打包，执行npm run test时回去判断当前是否需要打包
    "isDev": true            // 是否需要执行npm run dev 时可以访问该项目
}
```

> packDeploy.json、src/project 想对应。需要添加新项目角色需要在这两个文件都添加相关配置。

## 说明

> 使用 vue-cli4 搭建项目，通过 fs + webpack 多项目结构，引入 typescript + eslint，
>
> 项目布局是以[ant-design-vue-pro](https://pro.loacg.com/)，ui 是以 element-ui 为主全局引入，ant-design 手动引入。
>
> 状态机全局使用 vuex，布局某个页面或者某个组件使用可用 mobx
>
> 页面布局参考 ant-design-vue-pro 模版 \
>
> 项目使用到了 prettier 格式化工具，搭配 eslint, 加上 webStorm | vscode 相关配置可每次编辑器保存代码自动核实后代码

# 项目环境

-   typescript
-   vuex
-   mobx
-   element-ui
-   ant-design

## http 封装使用

```
所有的接口请求都在 utils/http包，response的返回格式接口已经定义好，可以直接使用
import HOST from '@/utils/http/HOST'            浏览器url前缀
import http from '@/utils/http'                 ajax方法
import { each } from '@/utils/http/interface'   接口断言
```

## icon 图标

> 图标(icon) 基于 ant-design Icon 组件拓展。字体库使用 iconfont,先以封装字体图库库

```
import IconFont from '@/components/iconfont/iconfont.vue'
```

###API  
参数 说明 类型 默认值 \
type class 名 string -

## 功能一览

-   [√][element-ui](https://element.eleme.cn/#/zh-CN/guide/design)
-   [√][enquire.js-响应css媒体查询的轻量级javascript库](https://www.npmjs.com/package/enquire-js)
-   [√][一个简单的js库,监测是否是移动端设备](https://www.npmjs.com/package/ismobilejs)
-   [√][使用eslint+prettier来统一前端代码风格](https://segmentfault.com/a/1190000015315545?utm_source=tag-newest)
-   [√] mobx + vuex + ts

```
@/project/company/frontElements/

```

###

[prettier 配置文件](https://segmentfault.com/a/1190000012909159)

### prettier

> 使用前需要全局安装该插件。

```
npm install --global prettier
```

[在 webstorm 下使用 prettier](https://blog.csdn.net/weixin_30371875/article/details/96462358)
[webstorm 配置 Prettier](https://blog.csdn.net/ttxxsir/article/details/82802171)
[Prettier 简明介绍](https://www.jianshu.com/p/65b76413c9b1)
[使用 ESLint+Prettier 来统一前端代码风格](https://www.cnblogs.com/jiaoshou/p/11271719.html)

```
 className: string = 'back_card_btn'
mounted() {
    // 获取是前台还是后台
    const App = document.querySelectorAll('#app.back')[0]
    if (App) {
        this.className = 'back_card_btn'
    } else {
        this.className = 'front_card_btn'
    }
}
```
