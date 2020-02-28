<template>
  <div>
    <h2>
      我是参数传递查询query组件
    </h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'query',
  created() { // 组件创建时
    // console.log(this);
    console.log('我是生命周期函数created');
    
  },
}
</script>

<style>

</style>