import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vant from 'vant';
import api from "./axios/api.js";//axios
import URL from "./axios/url.js";//接口地址
import '../static/iconfont/iconfont.css';
import 'vant/lib/vant-css/index.css';
import '../static/themes/theme.less';

require('./mock.js')

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$api = api; 
Vue.prototype.$URL = URL; 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
