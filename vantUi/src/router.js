import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'

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
      component: () => import('./views/Home.vue')
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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/login_tel',
      name: 'login_tel',
      component: () => import('./views/login/login_tel.vue')
    },
    {
      path: '/goods_detail',
      name: 'goods_detail',
      component: () => import('./components/goods_detail.vue'),
      beforeEnter: (to, from, next) => {
        console.log(store.state.token)
        if(store.state.token){
          next()
        }else{
          next({ path: '/login' })
        }
      }
    }
  ]
})