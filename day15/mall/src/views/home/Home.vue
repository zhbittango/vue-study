<template>
  <div id="home">
    <nav-bar class="home-bar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
    <good-list :goods="tabList"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from "common/navbar/NavBar";
import TabControl from "content/tabControl/TabControl"
import GoodList from 'content/goods/GoodList'
 
import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodList
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
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    tabList() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /* 点击事件 */

    //子传父事件
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


    /* 网络请求 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      getHomeGoods(type, ++ this.goods[type].page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list) // 结构数组
      })
    }
  }

}
</script>

<style>

#home {
  padding: 40px 0 49px;
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
</style>