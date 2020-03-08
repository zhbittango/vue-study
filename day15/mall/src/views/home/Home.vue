<template>
  <div id="home">
    <nav-bar class="home-bar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <!-- 选中组件 ref-->
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scrollPosition="scrollPosition" :pull-up-load="true" @pullingUp="pullUpLoad">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
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
    }
  },
  created() {

    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    // 监听图片加载完成
    this.$bus.$on('itemImgLoad', () => {
      this.$refs.scroll.refresh()
    }) 
  },
  computed: {
    tabList() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /* 点击事件 */

    //子传父事件 

    // 判断当前tabControl的类型
    tabClick(index) {
      switch(index) {
        case 0: 
          this.currentType = 'pop';
          break;
        case 1: 
          this.currentType = 'new';
          break;
        case 2: 
          this.currentType = 'sell';
          break;
      }
    },
    // 返回顶部的显示隐藏
    scrollPosition(position) {
      this.isShowBack = -position.y > 1000
    },

    // 上拉加载更多
    pullUpLoad() {
      this.getHomeGoods(this.currentType)
      this.scroll && this.$refs.scroll.finishPullUp();
    },
    
    // 回到顶部
    backTop() {
      this.scroll && this.$refs.scroll.scrollTo(0, 0) //面向插件
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
  }

}
</script>

<style>

#home {
  padding: 44px 0 49px;
  height: 100vh;
  position: relative;
}

.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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