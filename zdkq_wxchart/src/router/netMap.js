import netWorkMap from '@/views/netMap/index'
import listDetail from '@/views/netMap/listDetail'
import doctorDetail from '@/views/netMap/doctorDetail'
import appointment from '@/views/netMap/appointment'
import appointSuccess from '@/views/netMap/appointSuccess'

export default [
    {
        path: '/netWorkMap',
        name: 'netWorkMap',
        component: netWorkMap
    },
    {
        path: '/listDetail',
        name: 'listDetail',
        component: listDetail
    },
    {
        path: '/doctorDetail',
        name: 'doctorDetail',
        component: doctorDetail
    },
    {
        path: '/appointment',
        name: 'appointment',
        component: appointment
    },
    {
        path: '/appointSuccess',
        name: 'appointSuccess',
        component: appointSuccess
    },
]