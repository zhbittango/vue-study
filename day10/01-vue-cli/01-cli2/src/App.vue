<template>
  <div id="app">
    <h3>
      npm install -g @vue/cli; 安装vue脚手架
      <br>
      npm install -g @vue/cli-init; 拉取 2.x 模板 (旧版本)
      <br>
      vue init webpack 项目名称; 脚手架2创建项目
      <br>
    </h3>
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
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
