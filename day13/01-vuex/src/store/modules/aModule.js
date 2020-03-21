export default {
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
      console.log('updateName', payload);
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