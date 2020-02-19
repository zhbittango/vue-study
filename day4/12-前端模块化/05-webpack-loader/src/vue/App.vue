<template>
  <div>
      <h2 class="title">{{msg}}</h2>
      <button @click="btnClick">click</button>
      <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  // name: 'App',
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
  components: {
    Cpn,
  }
}
</script>

<style>
  .title {
    color: green
  }
</style>