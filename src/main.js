// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BottomNav from './components/bottom-nav'
import BackNav from './components/back-nav'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(iView)

require('./mock.js')

// 注册全局组件
Vue.component('bottom-nav', BottomNav)
Vue.component('back-nav', BackNav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
