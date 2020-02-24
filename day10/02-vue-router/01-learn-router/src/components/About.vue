<template>
  <div>
    <h2>我是About组件</h2>
    <h2>hello {{msg}}</h2>
    <h2>hello {{$route.params.userName}}</h2>
    <h2>hello {{$route.params.userName1}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    msg(){
      return this.$route.params.userName
    }
  }
}
</script>

<style>

</style>