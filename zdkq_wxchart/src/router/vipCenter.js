import vipCenter from '@/views/vipCenter/index'
import question from '@/views/vipCenter/question'
import questionDetail from '@/views/vipCenter/questionDetail'
import customerService from '@/views/vipCenter/customerService'
import aboutWe from '@/views/vipCenter/aboutWe'

import myAppointment from '@/views/vipCenter/myAppointment/index'
import myAppointmentDetail from '@/views/vipCenter/myAppointment/detail'
import myAppointmentdirection from '@/views/vipCenter/myAppointment/direction'

import coupon from '@/views/vipCenter/coupon/index'
import couponDetail from '@/views/vipCenter/coupon/detail'
import couponDirection from '@/views/vipCenter/coupon/direction'

import myReward from '@/views/vipCenter/myReward/index'
import myRewardDetail from '@/views/vipCenter/myReward/detail'
import myRewardDirection from '@/views/vipCenter/myReward/direction'

import userSetting from '@/views/vipCenter/userSetting/index'
import setMobile from '@/views/vipCenter/userSetting/setMobile'
import setMobile2 from '@/views/vipCenter/userSetting/setMobile2'
import setPassword from '@/views/vipCenter/userSetting/setPassword'
import setSuccess from '@/views/vipCenter/userSetting/setSuccess'
import setUsername from '@/views/vipCenter/userSetting/setUsername'
export default [
  {
    path: '/vipCenter',
    name: 'vipCenter',
    component: vipCenter
  },
  {
    path: '/userSetting',
    name: 'userSetting',
    component: userSetting
  }, 
  {
    path: '/setMobile',
    name: 'setMobile',
    component: setMobile
  }, 
  {
    path: '/setMobile2',
    name: 'setMobile2',
    component: setMobile2
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: setPassword
  }, 
  {
    path: '/setSuccess',
    name: 'setSuccess',
    component: setSuccess
  }, 
  {
    path: '/setUsername',
    name: 'setUsername',
    component: setUsername
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: coupon
  },
  {
    path: '/couponDetail',
    name: 'couponDetail',
    component: couponDetail
  },
  {
    path: '/couponDirection',
    name: 'couponDirection',
    component: couponDirection
  },
  {
    path: '/myAppointment',
    name: 'myAppointment',
    component: myAppointment
  },
  {
    path: '/myAppointmentDetail',
    name: 'myAppointmentDetail',
    component: myAppointmentDetail
  },
  {
    path: '/myAppointmentdirection',
    name: 'myAppointmentdirection',
    component: myAppointmentdirection
  },
  {
    path: '/myReward',
    name: 'myReward',
    component: myReward
  }, {
    path: '/myRewardDetail',
    name: 'myRewardDetail',
    component: myRewardDetail
  }, {
    path: '/myRewardDirection',
    name: 'myRewardDirection',
    component: myRewardDirection
  },
  {
    path: '/question',
    name: 'question',
    component: question
  },
  {
    path: '/questionDetail',
    name: 'questionDetail',
    component: questionDetail
  },
  {
    path: '/customerService',
    name: 'customerService',
    component: customerService
  },
  {
    path: '/aboutWe',
    name: 'aboutWe',
    component: aboutWe
  }
]