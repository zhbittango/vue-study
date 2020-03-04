import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import aModule from './modules/aModule'

Vue.use(Vuex)

const state = {
  counter: 0,
  students: [
    {id: 1, name: 'aa', age: 25},
    {id: 2, name: 'bb', age: 12},
    {id: 3, name: 'cc', age: 18},
    {id: 4, name: 'dd', age: 5},
  ],
  info: {
    name: 'tango',
    age: 25,
    hobby: 'coding'
  }
}

const stoge = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: aModule
  }
})

export default stoge

const obj = {
  name: 'tango',
  age: 25,
  hobby: 'coding'
}

// 对象结构
const {hobby, name, age} = obj
console.log("hobby", hobby)
console.log("name", name)
console.log("age", age)
