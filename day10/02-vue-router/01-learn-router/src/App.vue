<template>
<div>
  <h2>1.创建路由组件</h2>
  <h2>2.建立映射关系</h2>
  <h2>3.使用路由：router-link; router-view</h2>
  <!-- <router-link to="/home" tag="button" replace>首页</router-link>
  <router-link to="/about" tag="button" replace>关于</router-link>
  <router-link to="/hello" tag="button">hello</router-link> -->
  <button @click="homeClick">首页</button>
  <button @click="aboutClick">关于</button>
  <button @click="helloClick">渲染模式</button>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'ngota',
      name: 'tango'
    }
  },
  methods: {
    homeClick() {
      console.log(this);
      console.log('home');
      this.$router.push('/home') // 通过this.$router改变路由
      // this.$router.replace('./home') 
    },
    aboutClick() {
      console.log(this);
      console.log('about');
      this.$router.push('/about' + '/' +  this.msg ) // 传参
      // this.$router.replace('./about')
    },
    helloClick() {
      console.log('hello');
      this.$router.push('/hello')
      // this.$router.replace('./hello')
    }
  }
}
</script>

<style>

</style>