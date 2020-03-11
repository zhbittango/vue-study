<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @detailBarClick="detailBarClick" ref="detailnavbar"/>
    <scroll class="wrapper" ref="scroll" @scrollPosition="scrollPosition" :probeType="3">
      <detail-swiper :images="topImg"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad='imgLoad'/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <good-list :goods="recommendGoods" ref="recommend"/>
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


import { getDetail, Goods, Shop, GoodsParam, getRecommendGoods } from 'network/detail'
import { debounce } from '@/common/utils'

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
      detailNavY: [],
      getDetailNavY: null
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
    this.getDetail(this.iid);

    this.getRecommendGoods();

    // 获取个主题距离顶端的高度
    this.getDetailNavY = debounce(() => {
        this.detailNavY = []
        this.detailNavY.push(0)
        this.detailNavY.push(this.$refs.param.$el.offsetTop)
        this.detailNavY.push(this.$refs.comment.$el.offsetTop)
        this.detailNavY.push(this.$refs.recommend.$el.offsetTop)
      },200)
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
    // 获取商品详细信息
    getDetail(iid) {  
     getDetail(iid).then(res => {
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
    // 监听detailInfo图片加载完成
    imgLoad() {
      // this.$refs.scroll.refresh()
      // console.log(2);
      
      // 混入防抖
      this.refresh()

      // 等待所有图片加载完毕后，获取各主题距离顶端的高度
      this.getDetailNavY()
    },

    // 监听导航点击 DetailNavBar
    detailBarClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.detailNavY[index], 100) 
    },

    scrollPosition(position) {
      console.log(position.y);
      
      // console.log(this.detailNavY);
      // console.log(this.$refs.detailnavbar.currentIndex);
      // var nowY = -position.y
      var index = this.detailNavY.indexOf(-position.y)
  
      if(index != -1) {
        this.$refs.detailnavbar.currentIndex = index;
      }
    }
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