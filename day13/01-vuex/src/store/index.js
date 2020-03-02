import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stoge = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    add() {
      state.counter ++;
    },
    reduce() {
      state.counter --;
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default stoge