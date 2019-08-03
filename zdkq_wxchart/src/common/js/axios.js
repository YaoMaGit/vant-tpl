import Vue from 'vue'
import axios from 'axios';
import md5 from 'js-md5';

import router from '../../router/index.js'
// window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
let that = this
var instance = axios.create({
  // baseURL:'/api1',//牙齿自测
  // baseURL:'http://yl.weikeplus.com',
  // baseURL:'/api2',//其他
  baseURL:'/api3',//其他
  // baseURL:'http://192.168.0.187',
  responseType: 'json',
  headers: {
    "Content-Type": "application/json",
  },
  // transformRequesqt: [
  //   function (data) {
  //     let ret = "";
  //     for (let it in data) {
  //       ret +=
  //         encodeURIComponent(it) +
  //         "=" +
  //         encodeURIComponent(data[it]) +
  //         "&";
  //     }
  //     return ret;
  //   }]
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做某事，比如说 设置token
  // config.headers['token'] = 'token';
  console.log(config)
  // let params=config.data
  let params=config.params
  params.api_token=localStorage.getItem("TOKEN")?localStorage.getItem("TOKEN"):''

  getSign(params)
  function getSign(params) {
    if (typeof params == "string") {
      return paramsStrSort(params);
    } else if (typeof params == "object") {
      var arr = [];
      for (var i in params) {
        arr.push((i + "=" + params[i]));
      }
      return paramsStrSort(arr.join(("&")),params);
    }
  }

  function paramsStrSort(paramsStr,params) {
    var url = paramsStr;
    var urlStr = url.split("&").sort().join("&");
    var newUrl = urlStr + 'zhidemei';
    var sign=md5(newUrl)
    params.sign=sign
    config.params=params
  }
  return config;
}, error => {
  // 请求错误时做些事
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做些事
  if (response.status === 200) {
    //   console.log(response)
    if (response.data) {
      console.log('成功')
      response.data.value = '我是返回成功' // 在请求成功后可以对返回的数据进行处理，再返回到前台
    } else {
      // router.push({ name: 'login' })
    }
  }
  return response;
}, error => {
  return Promise.reject(error); // 返回接口返回的错误信息
})
// instance.defaults.headers.common['token'] = localStorage.getItem("TOKEN");
// axios.defaults.headers.common['x-requested-key'] = 'ZXWL ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoidXNlciIsImlhdCI6MTUwMzQ3MDQ1M30.1tO9JfHOHH1swH7a3A26GfY2xr7nFZrd0g-Hp5fqpoQ'
export default instance;
