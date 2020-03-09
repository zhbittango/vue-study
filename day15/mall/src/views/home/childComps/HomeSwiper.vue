<template>
  <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'common/swiper'

export default {
   props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImgLoad() {
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  },
}
</script>

<style>

</style>