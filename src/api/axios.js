/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
// import config from '../../config.js'
import {
    Toast
} from 'vant';
import store from '../store'
import router from '../router'
// 环境的切换


axios.defaults.baseURL = process.env.VUE_APP_URL //config.baseUrl;

console.log(axios.defaults.baseURL);
axios.defaults.withCredentials = true;  // 跨域请求要想带上cookie设置

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// put请求头
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.user.token;
        // // token && (config.headers.Authorization = token);
        // token && (config.headers.token = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.status === 200 && response.data.errCode == null) {
//             return Promise.resolve(response);
//         } else {
//             Toast({
//                 message: response.data.errMsg || response.data.data.fileList,
//                 duration: 2500,
//                 forbidClick: true
//             });
//             return Promise.reject(response);
//         }
//     },
//     // 服务器状态码不是200的情况 
//     error => {
//         if (error.response.status) {
//             switch (error.response.status) {
//                 // 401: 未登录    
//                 // 未登录则跳转登录页面，并携带当前页面的路径    
//                 // 在登录成功后返回当前页面，这一步需要在登录页操作。    
//                 case 401:
//                     break;
//                 // 403 token过期    
//                 // 登录过期对用户进行提示    
//                 // 清除本地token和清空vuex中token对象    
//                 // 跳转登录页面    
//                 case 403:
//                     // Toast({
//                     // 	message: '登录过期，请重新登录',
//                     // 	duration: 2000,
//                     // 	forbidClick: true
//                     // });
//                     // 清除token
//                     store.commit('user/LOGOUT', null);
//                     setTimeout(() => {
//                         router.go(0)
//                     }, 1000);
//                     break;
//                 // 404请求不存在    
//                 case 404:
//                     Toast({
//                         message: '网络请求不存在',
//                         duration: 1500,
//                         forbidClick: true
//                     });
//                     break;
//                 case 410:
//                     Toast('你的账号暂未审核');

//                     store.commit('changePermission', false)
//                     break;
//                 // 其他错误，直接抛出错误提示    
//                 default:
//                     Toast({
//                         message: error.response.statusText + "(" + error.response.status + ')',
//                         duration: 1500,
//                         forbidClick: true
//                     });
//             }
//             return Promise.reject(error.response);
//         }
//     }
// );
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    console.log(url,params)
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * del方法，对应 DELETE 请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function del(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        }, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}



export function put(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.put(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export function patch(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.patch(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}



export function upload(url, data) {
    return new Promise((resolve, reject) => {
        let formdata = new FormData()
        for (let key in data) {
            if (key == 'imageFiles') {
                data[key].forEach(item => {
                    formdata.append(key, item)
                })
            } else {
                formdata.append(key, data[key])
            }
        }
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post(url, formdata, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}


export function download(url, filename) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            responseType: 'blob'
        })
            .then(function (response) {
                var blob = new Blob([response.data])
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
                downloadElement.href = href;
                downloadElement.download = filename; //下载后文件名
                document.body.appendChild(downloadElement);
                downloadElement.click(); //点击下载
                document.body.removeChild(downloadElement); //下载完成移除元素
                window.URL.revokeObjectURL(href); //释放掉blob对象
                resolve('success')

            })
            .catch(function (error) {
                reject(error)

            });
    })
}
