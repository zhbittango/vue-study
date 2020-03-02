<template>
  <div id="app"> 
    <h2>{{$store.state.info}}</h2>
    <button @click="mutation">mutation响应式</button>
    <h2>{{$store.state.counter}}</h2>

    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <!-- mutations传参 -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <button @click="mul">mul</button>
    <!-- <button @click="mulall">mulall</button> -->
    

    <!-- 相当于computed -->
    <h2>{{$store.getters.power}}</h2>
    <h2>{{$store.getters.more20}}</h2>
    <h2>{{$store.getters.more20len}}</h2>
    <!-- 返回值为function时可以传参 -->
    <h2>{{$store.getters.input(10)}}</h2>

    <hello-vuex :counter='counter'></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      // this.counter ++
      this.$store.commit('add') // 提交mutation
    },
    reduce() {
      // this.counter --
      this.$store.commit('reduce')  // 提交mutation
    },
    addCount(num) {
      this.$store.commit('addCount', num)
    },
    addStu() {
      const stu = {id: 5, name: 'ee', age: 30}
      this.$store.commit('addStu', stu)
    },
    mul() {
      this.$store.commit({
        type: 'mul1',
        count: 2
      })
    },
    mutation() {
      this.$store.commit('mutation')
    }
  },
}
</script>

<style>

</style>
