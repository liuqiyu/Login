// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueBus from 'vue-bus'
import router from './router'
import store from './vuex'
import './element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './config.js'
// 加载全部
// import IX from 'npm-function-lqy'
//
// Vue.use(IX)
Vue.use(VueBus)
Vue.config.productionTip = false

alert(312)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
