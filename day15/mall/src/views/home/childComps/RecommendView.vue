/*
 * Filename: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall\src\views\home\childComps\RecommendView.vue
 * Path: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall
 * Created Date: Friday, March 6th 2020, 8:58:00 pm
 * Author: zhbittango
 * 
 * Copyright (c) 2020 Your Company
 */

<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  font-size: 14px;
  padding: 10px 0 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  text-align: center;
  flex: 1;
}
.recommend-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>