import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost:8008';

//生产环境
// Vue.prototype.baseURL="http://60.205.107.52:18001";
//测试环境
Vue.prototype.baseURL="http://192.168.65.41:9000";
if(process.env.NODE_ENV == 'production'){
	console.log("正式");
    // 部署服务调用正式地址
    axios.defaults.baseURL = Vue.prototype.baseURL;//正式环境跟路径
}else{
    // 开发测试地址
    console.log("测试");
}

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  return Promise.reject(error);
}); 

//返回状态判断
axios.interceptors.response.use((res) =>{
  if(!res.data.success){
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  //404等问题可以在这里处理
  return Promise.reject(error);
});

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  getAddressJson() {
    return fetch('/address/',{addressId:1})
  }
}
