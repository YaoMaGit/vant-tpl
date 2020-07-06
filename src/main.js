import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'lib-flexible';
import 'vant/lib/index.css';
import 'reset-css';
import './lbScss/lb.scss';
import router from './router'
import store from './store'
import {
  get,
  post,
  del
} from './api/axios'
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$del = del
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')