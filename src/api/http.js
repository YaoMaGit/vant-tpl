// 封装axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
// import {Toast} from 'vant';//提示组件

import {
    getSessionStore,
    getCookie
} from './sessionStore'
import router, {
    Router
} from '../router'
import Vue from 'vue'


axios.defaults.timeout = 10000; //设置请求超时
axios.defaults.headers.common['userId'] = getCookie('id');
axios.defaults.headers.common['userToken'] = getCookie('usertoken');
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
import store from '../store.js';
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * axios.get()
 */
console.log('getCookie-------请求cookie----------->', getCookie('userId'))

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(Vue.prototype.BASE_URLS+url, {
                headers: {
                    'userToken': getCookie('usertoken'),
                    'userId': getCookie('userId')
                },
                params: params
            })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 * axios.post()
 */

export function post(url, params) {
    params.operId = getCookie('userId')
    return new Promise((resolve, reject) => {
        axios.post(Vue.prototype.BASE_URLS+url, params, {
                headers: {
                    'userToken': getCookie('usertoken'),
                    'userId': getCookie('userId')
                }
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

// 请求拦截器
// axios.interceptors.request.use(
//     config => {
//         // 每次发送请求之前判断vuex中是否存在token 
//         // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//         // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//         const token = store.state.token;
//         token && (config.headers.Authorization = token);
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     }
// );

//请求拦截器
// axios.interceptors.request.use(
//     config => {
//         let token = window.sessionStorage.getItem('userToken');
//         if (!!token) {
//             config.headers['userToken'] = window.sessionStorage.getItem('userToken');
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据 
        if (response.data.status === 200) { 
            return Promise.resolve(response);
        } else if (response.data.status === 501) {
            console.log('501返回值res',response.data.data)
            window.location.href = response.data.data
        }else{
            return Promise.resolve(response);
        }
    });


// 响应拦截器
// axios.interceptors.response.use(
//     response => {
//         switch (response.data.status) {
//             case 200:
//                 Message.error(response.data.msg);
//                 return Promise.reject(response);
//                 // 未登录
//             case 501:
//                 window.sessionStorage.clear();
//                 // 重新返回登录界面登录
//                 if (Router.currentRoute.name === 'login') return Promise.reject(response);
//                 Message.error(response.data.msg);
//                 Router.replace({
//                     name: 'login',
//                     query: {
//                         redirect: Router.currentRoute.name
//                     } //登录成功后跳入浏览的当前页面
//                 })
//                 return Promise.reject(response);
//                 return response;
//             default:
//                 return response;
//                 // Message.error(response.data.msg);
//                 // return Promise.reject(response);
//         }
//         // return response;
//     },
//     error => {
//         if (error.code === 'ECONNABORTED') {
//             Message.error('请求超时');
//             return Promise.reject(error);
//         }
//         if (error.response) {
//             switch (error.response.status) {
//                 case 405:
//                     Message.error('405请求方法错误');
//                     // 这里写清除token的代码
//                     // router.replace({
//                     //     path: 'login',
//                     //     query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
//                     // })
//                     break;
//                 case 404:
//                     Message.error('404!!!!!');
//                     break;
//                 case 500:
//                     Message.error('500服务器内部错误');
//                     break;
//                 case 502:
//                     Message.error('502服务器无响应');
//                     break;
//             }
//         }
//         return Promise.reject(error);
//     });