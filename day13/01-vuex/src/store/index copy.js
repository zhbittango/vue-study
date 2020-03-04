import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ModuleA = {
  state: {
    name: 'ngota'
  },
  getters: {
    fullName(state) {
      return  state.name + '111'
    },
    fullName1(state, getters) {
      return getters.fullName + '222'
    },
    ['fullName2'](state, getters, rootState) {
      console.log('rootState',rootState);
      return getters.fullName1 + rootState.counter
    }
  },
  mutations: {
    // 不可重复
    updateName(state, payload) {
      state.name = payload.name
    }
  },
  actions: {
    asyncUpdateName(context) {
      console.log(context);
      
      setTimeout(() => {
        context.commit({
          type: 'updateName',
          name: 'tango' 
        })
      }, 1000);
    }
  }
}

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
    },
    updateInfo(state, payload) {
      // setTimeout(() => {
      //   state.info.name = payload.name
      // }, 1000);
      state.info.name = payload.name
    }
  },
  actions: {
    // 网络请求等异步操作需先经过actions
    aUpdateInfo(context, payload) {
      // setTimeout(() => {
      //   // 拿到上下文后使用commit提交到mutation进行state值的修改
      //   context.commit('updateInfo', payload)
      //   payload.success(payload.name)
      // }, 1000);
      return new Promise(resolve => {
        setTimeout(() => {
          // 拿到上下文后使用commit提交到mutation进行state值的修改
          context.commit('updateInfo', payload)
          resolve(payload.name)
        }, 1000);
      })
    }
  },
  // getters的使用
  getters: {
    power(state) {
      console.log('state', state);
      console.log('moduleA.name', state.a.name);
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
    a: ModuleA
  }
})

export default stoge