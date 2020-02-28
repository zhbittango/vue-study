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
  name: 'about',
  computed: {
    msg(){
      return this.$route.params.userName
    },
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