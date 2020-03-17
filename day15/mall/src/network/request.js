import axios from "axios";

// 4
export function request(config) {
    const instance = axios.create({
      baseURL: "http://106.54.54.237:8000/api/wh",
      // baseURL: "http://123.207.32.32:8000/api/wh",
      timeout: 10000
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
