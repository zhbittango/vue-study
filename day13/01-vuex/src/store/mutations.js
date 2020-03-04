export default {
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
}