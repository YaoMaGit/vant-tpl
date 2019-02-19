import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// 配置请求拦截
var _this = this


// 请求拦截器
axios.interceptors.request.use(function (config) {
  console.log(config)
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
})

// 封装axios的get请求
export function APIGET(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
// 封装axios的post请求
export function APIPOST(url, params) {
  console.log(url)
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  APIGET, APIPOST
}