<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/1.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/3.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/5.png" alt="">
        <div slot="item-text">网络</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/7.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>
  @import './assets/css/base.css'
</style>
