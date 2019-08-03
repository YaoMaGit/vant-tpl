import freeApply from '@/views/freeApply/index'
import basicInfor1 from '@/views/freeApply/basicInfor1'
import basicInfor2 from '@/views/freeApply/basicInfor2'
import basicInfor3 from '@/views/freeApply/basicInfor3'
import basicInforDetail from '@/views/freeApply/basicInforDetail'
import subNewUploud from '@/views/freeApply/subNewUploud'
export default [
  {
    path: '/freeApply',
    name: 'freeApply',
    component: freeApply
  },
  {
    path: '/basicInfor1',
    name: 'basicInfor1',
    component: basicInfor1
  },
  {
    path: '/basicInfor2',
    name: 'basicInfor2',
    component: basicInfor2
  },
  {
    path: '/basicInfor3',
    name: 'basicInfor3',
    component: basicInfor3
  },
  {
    path: '/basicInforDetail',
    name: 'basicInforDetail',
    component: basicInforDetail
  },
  {
    path: '/subNewUploud',
    name: 'subNewUploud',
    component: subNewUploud
  }
]