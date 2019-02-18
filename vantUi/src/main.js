import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import Vant from 'vant';
import axios from 'axios';
import apiConfig from "./axios/apiConfig.js";//axios
import URL from "./axios/url.js";//接口地址
import '../static/iconfont/iconfont.css';
import 'vant/lib/index.css';
 
Vue.use(Vant)
axios.interceptors.request.use(config => {
  if (store.state.token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    config.headers.Authorization = store.state.token;
  }
  return config
})
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../static/images/loader_img.gif'),
  loading: require('../static/images/loader_img.gif'),
  attempt: 1
})

Vue.config.productionTip = false
Vue.prototype.$api = apiConfig; 
Vue.prototype.$URL = URL; 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
