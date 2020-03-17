import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$store = store

Vue.prototype.$bus = new Vue() // 事件总线

// 使用个人封装的插件
Vue.use(toast);

//减少手机端点击延迟300ms 
FastClick.attach(document.body)

// 使用图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/load.gif')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
