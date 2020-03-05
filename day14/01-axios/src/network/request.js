import axios from "axios";

// 4
export function request(config) {
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    });

    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 1.config中一些信息不符合服务器的要求

      // 2.发送网络请求时，希望在界面显示一个请求的图标

      // 3.某些网络请求(比如登录token)，必须携带一些特殊信息
      return config;
    }, err => {
      return err
    })

    // 响应拦截器
    instance.interceptors.response.use(res => {
      // 过滤某些响应信息
      return res.data
    }, err => {
      return err
    })
    
    return instance(config)
}




// 3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     });
//     instance(config)
//       .then(res => {
//         resolve(res)
//         // config.success(res)
//       })
//       .catch(err => {
//         reject(res)
//         // config.failure(err)
//       });
//   })
// }

// 2
// export function request(config) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   });
//   instance(config.base)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     });
// }

// 1
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   });
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     });
// }

