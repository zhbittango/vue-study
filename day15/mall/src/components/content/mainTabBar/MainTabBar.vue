<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-img" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="orange">
        <img slot="item-img" src="~assets/img/tabbar/category.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/network" activeColor="deepPink">
        <img slot="item-img" src="~assets/img/tabbar/cart.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      
      <tab-bar-item path="/car">
        <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>