export default {
  power(state) {
    // console.log('state', state);
    // console.log('moduleA.name', state.a.name);
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
}