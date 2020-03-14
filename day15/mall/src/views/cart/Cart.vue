<template>
  <div class="cart">
    <nav-bar class="home-bar">
      <template #center>
        <!-- <div>购物车({{cartNum}})</div> -->
        <div>购物车({{num}})</div>
      </template>
    </nav-bar>
    <cart-list :cart-list="list"/>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import CartList from "./childCmps/CartList";

import { mapGetters } from "vuex"; //把getters变成computed方式使用

export default {
  components: {
    NavBar,
    CartList
  },
  computed: {
    // cartsNum() {
    //   return this.$store.state.cartList.length
    // }
    // ...mapGetters(['cartNum']),
    ...mapGetters({
      num: 'cartNum',
      list: 'cartList',
    })
  },
};
</script>

<style>
</style>