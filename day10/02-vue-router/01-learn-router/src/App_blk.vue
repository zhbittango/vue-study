<template>
  <div id="app">
    <h3>后端渲染(后端路由)</h3>
    <h3>前后端分离(前端渲染，ajax)</h3>
    <h3>前端渲染(前端路由)</h3>
    <h4>
      <h2>控制台</h2> 
      1 location.hash = 'home'
      <br>
      2 history.pushState({}, '', 'home'); history.replaceState({}, '', 'home')
      <br>
      3 history.back(); history.forward
      <br>
      4 history.go(-1); history.forward(1)
      <br>
      栈：后进先出lifo
    </h4>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
