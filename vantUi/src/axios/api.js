import axios from 'axios'

// axios.defaults.baseURL = 'https://api.dhcc.wang'
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// 配置请求拦截
var _this = this
axios.interceptors.request.use(config => {
  if (this.$store.state.token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    config.headers.Authorization = _this.$store.state.token;
  }
  return config
})

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