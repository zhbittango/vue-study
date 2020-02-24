import Vue from 'vue'
import App from './App'
import router from './router' // 导入路由映射

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, // 使用路由
  render: h => h(App)
})
