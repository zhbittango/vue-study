<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
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
      this.counter ++
    },
    reduce() {
      this.counter --
    }
  },
}
</script>

<style>

</style>
