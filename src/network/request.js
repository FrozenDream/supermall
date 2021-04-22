import axios from 'axios'
//  axios.create 返回的值就是一个Promise
export function instance1(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })
  // 2.axios的请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    // console.log(err);
  })
  // axios的响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })
  // instance.interceptors.response
  // 3.发送真正的网络请求
  return instance(config)
}
// export function instance2(config) {
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5/home',
//     timeout: 5000
//   })
//   return instance(config)
// }
