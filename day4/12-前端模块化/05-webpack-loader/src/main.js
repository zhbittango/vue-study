
// commonjs 导入
const {add, mul} = require('./js/mathUtil');

console.log(add(20, 30));
console.log(mul(20, 30));

// es6 导入
import {name, age} from "./js/info";
console.log(name);
console.log(age);

require('./css/index.css');  //css模块化依赖
require('./css/index.less'); //less模块化依赖

import Vue from 'vue'; //vue模块依赖

/* const App = {
  template: `
    <div>
      <h2>{{msg}}</h2>
      <button @click="btnClick">click</button>
    </div>
  `,
  data(){
    return {
      msg: 'el跟template同时存在时，后者会替换前者',
    }
  },
  methods: {
    btnClick() {
      alert(this.msg)
    }
  },
}  */
// 抽成组件形式 (放到vue/app.js中导入)
// import App from './vue/app';

// 使用.vue文件
import App from './vue/App.vue'


new Vue({
  //el跟template同时存在时，后者会替换前者
  el: '#app',
  template: '<App/>', // 组件使用
  components: { // 注册组件
    App, 
  }
});