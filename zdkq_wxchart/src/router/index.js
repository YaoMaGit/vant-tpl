import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import testMenu from '@/views/login/testMenu'//测试页面

import login from '@/views/login/login'//登录注册等等 other
import forgetPasswordCode from '@/views/login/forgetPasswordCode'
import forgetPassword from '@/views/login/forgetPassword'
import register from '@/views/login/register'
import registerSetPassword from '@/views/login/registerSetPassword'
import xieyi from '@/views/login/xieyi'
import noSmsCode from '@/views/login/noSmsCode'
import error from '@/views/login/404'//路由404
import zOther from '@/views/zOther/index'//路由404

import netMap from './netMap.js' //网点预约
import freeApply from './freeApply.js'//免费初审

import toothTest from './toothTest.js'//牙齿自测
import vipCenter from './vipCenter.js'//个人中心
export default new Router({
  routes: [
    ...netMap, ...freeApply, ...toothTest, ...vipCenter,
    {
      path: '/testMenu',
      name: 'testMenu',
      component: testMenu
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forgetPasswordCode',
      name: 'forgetPasswordCode',
      component: forgetPasswordCode
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/registerSetPassword',
      name: 'registerSetPassword',
      component: registerSetPassword
    },
    {
      path: '/xieyi',
      name: 'xieyi',
      component: xieyi
    }, {
      path: '/noSmsCode',
      name: 'noSmsCode',
      component: noSmsCode
    },
    {
      path: '/zOther',
      name: 'zOther',
      component: zOther
    },
    {
      path: '*',
      component: error
    },
  ]
})
