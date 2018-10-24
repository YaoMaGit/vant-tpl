import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Class',
      name: 'Class',
      component: () => import('./views/Class.vue')
    },
    {
      path: '/Pop',
      name: 'Pop',
      component: () => import('./views/Pop.vue')
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: () => import('./views/Mine.vue')
    }
  ]
})