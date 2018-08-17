// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Store from './store/store'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import  'assets/style/test-stylus.styl'
// import  './assets/style/common.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
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
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:Store,
  components: { App },
  template: '<App/>'
})
