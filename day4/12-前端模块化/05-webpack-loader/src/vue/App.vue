<template>
  <div>
      <h2 class="title">{{msg}}</h2>
      <button @click="btnClick">click</button>
    </div>
</template>

<script>
export default {
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
}
</script>

<style>
  .title {
    color: green
  }
</style>