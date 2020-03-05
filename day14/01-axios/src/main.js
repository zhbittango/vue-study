import Vue from "vue";
import App from "./App";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

// 基本使用  get对应params;  post对应data
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   params: {
//     params1: "params1",
//     params2: "params2"
//   }
// }).then(data => {
//   console.log(data);
// });

// 全局配置
// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;

// 发送并非请求
// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/multidata",
//       params: {
//         params1: "params1",
//         params2: "params2"
//       }
//     })
//   ])
//   // .then(results => {
//   //   console.log(results);

//   // });

//   // 结果集展开
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }))

// 创建axios实例; 请求配置
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// });

// instance1({
//   url: "/home/multidata",
//   params: {
//     params1: "params1",
//     params2: "params2"
//   }
// }).then(result => console.log(result));

// instance1({
//   url: "/home/multidata",
// }).then(result => console.log(result));

// const instance2 = axios.create({
//   baseURL: 'http://www.tangoh.cn/svn-web',
//   timeout: 100000,
//   // withCredentials: true,
// })

// instance2({
//   url: "/test/test.php",
//   params: {
//     name: 'tango',
//     pass: 123
//   }
// }).then(res => console.log('get', res))

// instance2({
//   url: "/test/test.php",
//   method: 'post',
//   data: {
//     name: 'tango',
//     pass: 123
//   },
// }).then(res => console.log('post', res))

// axios网络请求封装
import { request } from "./network/request";


// 3、4
request({
  url: "/home/multidata"
})
  .then(res => console.log(res))
  .catch(err => console.log(err))


// 2
// request({
//   base: {
//     url: "/home/multidata"
//   },
//   success: res => console.log(res),
//   failure: err => console.log(err)
// });


// 1
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);

// }, err => {
//   console.log(err);
// })
