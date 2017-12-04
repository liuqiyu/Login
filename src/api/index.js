/**
 * axios 封装
 */

import axios from 'axios'
import config from './../config'

// 创建axios实例
const instance = axios.create({
  // baseURL: '/api',
  baseURL: config.apiHost,
  // 是否跨域
  withCredentials: true
  // params: {
  //   access_token: getToken(),
  // },
})

// 添加请求拦截器
instance.interceptors.request.use((request) => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return request
}, error => {
  // Do something with request error
  console.log(error)  // for debug
  Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((request) => {
  // 在这里对返回的数据进行处理
  return request
}, error => {
  // Do something with response error
  return Promise.reject(error)
})

export default instance
