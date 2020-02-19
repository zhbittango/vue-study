<template>
  <div class="cpn">
    <h2>我是Cpn组件</h2>
    <div>{{msg}}</div>
    <button @click="btnClick">cpnClick</button>
  </div>
</template>

<script>
export default {
  // name: 'Cpn',
  data() {
    return {
      msg: 'cpn组件'
    }
  },
  methods: {
    btnClick() {
      alert(this.msg);
    }
  },
}
</script>

<style>
  .cpn{
    color: yellow
  }
</style>