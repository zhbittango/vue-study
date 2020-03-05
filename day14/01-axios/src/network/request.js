import axios from "axios";

// 4
export function request(config) {
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    });
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

