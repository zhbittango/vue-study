/*
 * Filename: e:\web\svn-web\vue-study\day15\mall\src\components\content\goods\GoodsList.vue
 * Path: e:\web\svn-web\vue-study\day15\mall
 * Created Date: Saturday, March 7th 2020, 11:55:45 am
 * Author: zhbittango
 * 
 * Copyright (c) 2020 Your Company
 */


<template>
  <div class="good-list">
      <good-list-item v-for="item in goods" :item="item" class="good-list-item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  props: {
    goods:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style>
  .good-list{
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    padding: 5px;
  }
  .good-list-item {
    width: 48%;
  }
</style>