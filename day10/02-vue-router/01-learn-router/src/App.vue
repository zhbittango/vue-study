<template>
<div>
  <h2>1.创建路由组件</h2>
  <h2>2.建立映射关系</h2>
  <h2>3.使用路由：router-link; router-view</h2>
  <!-- <router-link to="/home" tag="button" replace>首页</router-link>
  <router-link to="/about" tag="button" replace>关于</router-link>
  <router-link to="/hello" tag="button">hello</router-link> -->
  <!-- <router-link :to="queryData">参数查询</router-link> -->

  <button @click="homeClick">首页</button>
  <button @click="aboutClick">关于</button>
  <button @click="helloClick">渲染模式</button>
  <button @click="queryClick">参数查询</button>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'ngota',
      name: 'tango',
      queryData: {
        path: '/queryData',
        query: {
          name: 'tango',
          age: 25
        }
      }
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
    },
    queryClick() {
      console.log(this);
      console.log('query');
      this.$router.push({
        path: '/queryData',
        query: {
          name: 'tango',
          age: 18
        }
      })
    }
  },

  // 生命周期函数
  created() { // 组件创建时
    // console.log(this);
    console.log('我是生命周期函数created');
    
  },
  mounted() { // 模板挂载dom时
    console.log('我是生命周期函数mounted');
    
  },
  updated() { // 数据更新时
    console.log('我是生命周期函数updated');
  },
}
</script>

<style>

</style>