# xx

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#目录结构
  
├─build
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      
├─config
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│      
├─src
│  │  App.vue
│  │  main.js
│  │  
│  ├─assets
│  │      logo.png
│  │      
│  ├─common
│  │  ├─css
│  │  │      globle.less  全局css
│  │  │      
│  │  └─js
│  │          axios.js  封装axios
│  │          url.js  接口地址
│  │          TMap.js 
│  │          utils.js  全局过滤器 方法等等
│  │          
│  ├─components  封装组件
│  │      header.vue
│  │      
│  ├─router
│  │      index.js  路由模块化
│  │      
│  ├─store
│  │      store.js 状态管理
│  │      
│  └─views
│      ├─caseCenter 病例中心
│      │      index.vue
│      │ 
│      ├─freeApply 免费初审
│      │      index.vue
│      │      
│      ├─login  登录
│      │      login.vue
│      │      register.vue
│      │      
│      ├─netMap 网点
│      │      index.vue
│      │      
│      ├─toothTest 牙齿测试
│      │      index.vue
│      │      
│      ├─vipCenter  vip个人中心
│      │      index.vue
│      │      
│      └─zOther  
│              index.vue
│  .babelrc
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .postcssrc.js
│  index.html
│  list.txt
│  package-lock.json
│  package.json
│  README.md