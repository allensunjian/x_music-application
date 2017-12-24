import 'babel-polyfill'
// 首先引用补丁对es6语法进行扩展（可以使用ES6 的API）
import Vue from 'vue'
import App from './App'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
// 全局引用 fastclick 模块
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
fastclick.attach(document.body)
// 初始化 fastclick 让BODY 中所有的click时间都解决300ms 的延时
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
