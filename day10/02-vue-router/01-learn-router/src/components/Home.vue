<template>
  <div>
    <h2>我是Home组件</h2>
    <h3>后端渲染(后端路由)</h3>
    <h3>前后端分离(前端渲染，ajax)</h3>
    <h3>前端渲染(前端路由)</h3>
    <h4>
      1 location.hash = 'home'
      <br>
      2 history.pushState({}, '', 'home'); history.replaceState({}, '', 'home')
      <br>
      3 history.back(); history.forward
      <br>
      4 history.go(-1); history.forward(1)
      <br>
      栈：先进后出
    </h4>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>