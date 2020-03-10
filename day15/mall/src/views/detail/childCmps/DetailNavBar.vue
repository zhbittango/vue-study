/*
 * Filename: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall\src\views\detail\childCmps\DetailNavBar.vue
 * Path: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall
 * Created Date: Monday, March 9th 2020, 7:47:28 pm
 * Author: zhbittango
 * 
 * Copyright (c) 2020 Your Company
 */

<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template #left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template #center>
        <div class="title">
          <div class="nav-item" v-for="(item, index) in navTitle" :class="{active: index === currentIndex}" @click="detailClick(index)">
            {{item}}
          </div>
        </div>
      </template> 
    </nav-bar>
  </div>
  
</template>

<script>
import NavBar from "common/navbar/NavBar"
export default {
  data() {
    return {
      navTitle: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar
  },
  methods: {
    detailClick(index) {
      this.currentIndex = index
    },
    back() {
      this.$router.back()
    }
  },
}
</script>

<style>
.detail-nav-bar .title {
  display: flex;
}
.detail-nav-bar .title .nav-item {
  flex: 1;
  font-size: 14px;
}

.detail-nav-bar img {
  margin-top: 12px;
}
</style>