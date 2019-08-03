import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import store from './store/store.js'//引入store
import axios from './common/js/axios.js'//引入axios
import 'vant/lib/index.css';
import './common/css/globle.less';//全局样式
import './common/css/globleIconfont.less';//自定义图标
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

//组件传值
import VueBus from 'vue-bus';
Vue.use(VueBus);

//移动端调试插件
// import Vconsole from 'vconsole';
// const vConsole = new Vconsole();
// export default vConsole;

//全局组件
import { Toast } from "vant";
Vue.prototype.$Toast = Toast;
Toast.setDefaultOptions({position:'bottom'})

//全局过滤器
import * as custom from './common/js/utils.js'
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
