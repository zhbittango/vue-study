/*
 * Filename: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall\src\views\detail\childCmps\DetailSwiper.vue
 * Path: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall
 * Created Date: Monday, March 9th 2020, 9:13:11 pm
 * Author: zhbittango
 * 
 * Copyright (c) 2020 Your Company
 */
<template>
  <div class="detail-swiper">
    <swiper class="detail-swiper-item">
      <swiper-item v-for="item in images">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'common/swiper'
export default {
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.detail-swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>