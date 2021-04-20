import axios from 'axios'

const instance = axios.create({
    baseURL:'',
    timeout:5000   
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });



  /**
 * get请求
 * @param {*} url 请求地址
 * @param {*} params url参数
 * @returns 
 */
export function get(url,params){
    return axios.get(url,{
        params
    })
}
/**
 * post请求
 * @param {*} url 请求地址
 * @param {*} params 数据
 * @returns 
 */
export function post(url,data){
    return axios.post(url,data)
}
/**
 * put请求
 * @param {*} url 请求地址
 * @param {*} params 数据
 * @returns 
 */
export function put(url,data){
    return axios.put(url,data)
}
//删除请求
export function del(url){
    return axios.delete(url)
}
