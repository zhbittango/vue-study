/*
 * Filename: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall\src\components\content\mainTabBar\tabControl\TabControl.vue
 * Path: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall
 * Created Date: Saturday, March 7th 2020, 12:20:31 am
 * Author: zhbittango
 * 
 * Copyright (c) 2020 Your Company
 */
<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :class="{active: index === currentIndex}" @click="tabClick(index)" class="tab-control-item" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }

  .active span{
    padding: 5px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>