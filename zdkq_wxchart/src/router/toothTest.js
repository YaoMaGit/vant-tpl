import toothTest from '@/views/toothTest/index'
// const page1 = () => import( '@/views/toothTest/page1')
// const page3 = () => import( '@/views/toothTest/page3')
// const page2 = () => import( '@/views/toothTest/page2')
// const page4 = () => import( '@/views/toothTest/page4')
// const page5 = () => import( '@/views/toothTest/page5')
// const page6 = () => import( '@/views/toothTest/page6')
// const page7 = () => import( '@/views/toothTest/page7')
import page1 from '@/views/toothTest/page1'
import page2 from '@/views/toothTest/page2'
import page3 from '@/views/toothTest/page3'
import page4 from '@/views/toothTest/page4'
import page5 from '@/views/toothTest/page5'
import page6 from '@/views/toothTest/page6'
import page7 from '@/views/toothTest/page7'
import page8 from '@/views/toothTest/page8'
import page9 from '@/views/toothTest/page9'
import page10 from '@/views/toothTest/page10'
import page11 from '@/views/toothTest/page11'
import page12 from '@/views/toothTest/page12'
import page13 from '@/views/toothTest/page13'
import page14 from '@/views/toothTest/page14'
import page15 from '@/views/toothTest/page15'
import page16 from '@/views/toothTest/page16'
import submitPages from '@/views/toothTest/submitPages'
import getProject from '@/views/toothTest/getProject'
export default [
    {
        path: '/toothTest',
        name: 'toothTest',
        component: toothTest
    },
    { path: '/page1', name: 'page1', meta: { keepAlive: false }, component: page1 },
    { path: '/page2', name: 'page2', meta: { keepAlive: false }, component: page2 },
    { path: '/page3', name: 'page3', meta: { keepAlive: false }, component: page3 },
    { path: '/page4', name: 'page4', meta: { keepAlive: false }, component: page4 },
    { path: '/page5', name: 'page5', meta: { keepAlive: false }, component: page5 },
    { path: '/page6', name: 'page6', meta: { keepAlive: false }, component: page6 },
    { path: '/page7', name: 'page7', meta: { keepAlive: false }, component: page7 },
    { path: '/page8', name: 'page8', meta: { keepAlive: false }, component: page8 },
    { path: '/page9', name: 'page9', meta: { keepAlive: false }, component: page9 },
    { path: '/page10', name: 'page10', meta: { keepAlive: false }, component: page10 },
    { path: '/page11', name: 'page11', meta: { keepAlive: false }, component: page11 },
    { path: '/page12', name: 'page12', meta: { keepAlive: false }, component: page12 },
    { path: '/page13', name: 'page13', meta: { keepAlive: false }, component: page13 },
    { path: '/page14', name: 'page14', meta: { keepAlive: false }, component: page14 },
    { path: '/page15', name: 'page15', meta: { keepAlive: false }, component: page15 },
    { path: '/page16', name: 'page16', meta: { keepAlive: false }, component: page16 },
    {
        path: '/submitPages',
        name: 'submitPages',
        component: submitPages
    },
    {
        path: '/getProject',
        name: 'getProject',
        component: getProject
    },
]