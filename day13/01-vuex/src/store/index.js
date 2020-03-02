import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stoge = new Vuex.Store({
  state: {
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
  },
  mutations: {
    add(state) {
      state.counter ++;
    },
    reduce(state) {
      state.counter --;
    },
    addCount(state, num) {
      state.counter += num
    },
    addStu(state, stu) {
      state.students.push(stu);
    },
    mul1(state, payload) {
      console.log(payload);
      state.counter *= payload.count
    },
    mul2(state, payload) {
      console.log(payload);
      // state.counter *= payload.count
    },
    mutation(state) {
      // this.state.info.name = 'ngota' // 响应式
      // this.state.info['like'] = '1212'; // 单独修改不会响应式改变，如果有其他响应式改变，此时可生效
      // Vue.set(state.info, 'like', 'ngota') // 响应式
      // delete state.info.name // 不是响应式
      Vue.delete(state.info, 'name') // 响应式

    }
  },
  actions: {

  },
  // getters的使用
  getters: {
    power(state) {
      return state.counter * state.counter
    },
    more20(state) {
      // return state.student.filter(function(n){
      //   return n.age > 20
      // })
      return state.students.filter(n => n.age > 20)
    },
    more20len(state, getters) {
      return getters.more20.length
    },
    input(state) {
      return age => state.students.filter(n => n.age > age)
    }
  },
  modules: {

  }
})

export default stoge