<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"/>
    <scroll class="wrapper" ref="scroll">
      <detail-swiper :images="topImg"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad='imgLoad'/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <good-list :goods="recommendGoods"/>
    </scroll>
    
  </div>
</template>

<script>

import Scroll from 'common/scroll/Scroll'

import DetailNavBar from './childCmps/DetailNavBar'
import DetailSwiper from './childCmps/DetailSwiper'
import DetailBaseInfo from './childCmps/DetailBaseInfo'
import DetailShopInfo from './childCmps/DetailShopInfo'
import DetailGoodsInfo from './childCmps/DetailGoodsInfo'
import DetailParamInfo from './childCmps/DetailParamInfo'
import DetailCommentInfo from './childCmps/DetailCommentInfo'
import GoodList from 'content/goods/GoodList'


import { getDetailTopImg, Goods, Shop, GoodsParam, getRecommendGoods } from 'network/detail'
// import { debounce } from '@/common/utils'

import { imgListenerMixin } from '@/common/imgListenerMixin'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendGoods: [],
      // itemImgListener: null
    }
  },
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList
  },
  mixins: [imgListenerMixin],
  created() {
    this.iid = this.$route.params.iid
    this.getDetailTopImg(this.iid);

    this.getRecommendGoods();
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 200)
    // this.itemImgListener = () => refresh()
    // this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log(2);
    
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },

  methods: {
    getDetailTopImg(iid) {  
     getDetailTopImg(iid).then(res => {
        // console.log(res);
        const data = res.result
        this.topImg = res.result.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 获取商品信息
          this.detailInfo = data.detailInfo

        // 保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 保存评论信息
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
     })
    },

    getRecommendGoods() {
      getRecommendGoods().then(res => {
        this.recommendGoods = res.data.list
      })
    },
    imgLoad() {
      // this.$refs.scroll.refresh()
      // console.log(2);
      
      this.refresh()
    },
  },
}
</script>

<style>
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail .wrapper {
  height: clac(100% - 44px);
  
}

.detail .detail-nav-bar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>