<template>
  <div id="home">
    <nav-bar class="home-bar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" v-show="isFixed" class="fixed" ref="tabControl2"/>
    <!-- 选中组件 ref-->
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scrollPosition="scrollPosition" :pull-up-load="true" @pullingUp="pullUpLoad">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1"/>
      <good-list :goods="tabList"/>
    </scroll>

    <!-- 监听组件点击 native-->
    <back-top @click.native="backTop" v-show="isShowBack"/> 
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from "common/navbar/NavBar";
import TabControl from "content/tabControl/TabControl"
import GoodList from 'content/goods/GoodList'
import Scroll from 'common/scroll/Scroll'
import BackTop from 'common/backtop/BackTop'
 
import { getHomeMultidata, getHomeGoods } from 'network/home'
// import { debounce } from '@/common/utils'

import { imgListenerMixin } from '@/common/imgListenerMixin'

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBack: false,

      offsetTop: 0,
      isFixed: false,

      saveY: 0,
      // itemImgListener: null,
    }
  },
  mixins: [imgListenerMixin],
  created() {

    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },

  // 使用mixins抽取
  mounted() {
    
    /* const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImgListener = () => refresh()
    this.$bus.$on('itemImgLoad', this.itemImgListener)

    // let timer = null;
    // 监听图片加载完成
    // this.$bus.$on('itemImgLoad', () => {
    //   /* if(timer){
    //     clearTimeout(timer)
    //   }
    //   timer = setTimeout(() => {
    //     this.$refs.scroll.refresh()
    //   },50)   */   
    //   refresh()
    // })  */
    
  },


  // 切换tabbar后用于记录滚动位置
  activated() {
    this.$refs.scroll && this.$refs.scroll.scrollTo(0, this.saveY, 1000)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll && this.$refs.scroll.getScrollY()

    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  computed: {
    tabList() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /* 点击事件 */

    // 防抖函数
    //  (func, delay) {
    //   console.log('this', this);
      
    //   let timer = null;
    //   return function(...args) {
    //     if(timer){
    //       clearTimeout(timer)
    //     }
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //       // func()
    //     }, delay)  
    //   }
    // },

    //子传父事件 

    // 判断当前tabControl的类型
    tabClick(index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop'
          break
        case 1: 
          this.currentType = 'new'
          break
        case 2: 
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 滚动位置判断
    scrollPosition(position) {
      // 返回顶部的显示隐藏
      this.isShowBack = (-position.y) > 1000
      
      // 控制tabControl显示隐藏 
      this.isFixed = (-position.y) > this.offsetTop
    },

    // 上拉加载更多
    pullUpLoad() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll && this.$refs.scroll.finishPullUp();
    },
    
    // 回到顶部
    backTop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0) //面向插件
    },

    // 监听swiper图片加载完成
    swiperImgLoad() {
      // console.log('----');
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.offsetTop = this.$refs.tabControl1.$el.offsetTop // 计算距离顶部高度
    },


    /* 网络请求 */

    // 请求基础数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log('banner', res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch((err) => {
        console.log(err.TypeError)
      })
    },

    // 请求商品数据
    getHomeGoods(type) {
      getHomeGoods(type, ++ this.goods[type].page).then(res => {
        console.log('goodlist', res)
        this.goods[type].list.push(...res.data.list) // 结构数组
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  

}
</script>

<style>

#home {
  /* padding: 44px 0 49px; */
  height: 100vh;
  position: relative;
}

.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
  position: relative;
  z-index: 10;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}

.fixed{
  position: relative;
  z-index: 10;
}

.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* z-index: -1; */
}
</style>