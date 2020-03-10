<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :images="topImg"/>
  </div>
</template>

<script>

import DetailNavBar from './childCmps/DetailNavBar'
import DetailSwiper from './childCmps/DetailSwiper'

import { getDetailTopImg } from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImg: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    this.iid = this.$route.params.iid

    this.getDetailTopImg(this.iid);
  },
  methods: {
    getDetailTopImg(iid) {
     getDetailTopImg(iid).then(res => {
      console.log(res);
        this.topImg = res.result.itemInfo.topImages
     })
    }
  },
}
</script>

<style>

</style>