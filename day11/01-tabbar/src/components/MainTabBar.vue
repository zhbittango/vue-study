<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-img" src="~assets/img/1.png" alt />
        <img slot="item-img-active" src="../assets/img/2.png" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="orange">
        <img slot="item-img" src="../assets/img/3.png" alt />
        <img slot="item-img-active" src="../assets/img/4.png" alt />

        <div slot="item-text">我的</div>
      </tab-bar-item>
      <tab-bar-item path="/network" activeColor="deepPink">
        <img slot="item-img" src="../assets/img/5.png" alt />
        <img slot="item-img-active" src="../assets/img/6.png" alt />

        <div slot="item-text">网络</div>
      </tab-bar-item>
      <tab-bar-item path="/car">
        <img slot="item-img" src="../assets/img/7.png" alt />
        <img slot="item-img-active" src="../assets/img/8.png" alt />

        <div slot="item-text">购物车</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>