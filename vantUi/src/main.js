import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import Vant from 'vant';
import api from "./axios/api.js";//axios
import URL from "./axios/url.js";//接口地址
import '../static/iconfont/iconfont.css';
import 'vant/lib/vant-css/index.css';
 
Vue.use(Vant)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../static/images/loader_img.gif'),
  loading: require('../static/images/loader_img.gif'),
  attempt: 1
})
require('./mock.js')


Vue.config.productionTip = false
Vue.prototype.$api = api; 
Vue.prototype.$URL = URL; 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
