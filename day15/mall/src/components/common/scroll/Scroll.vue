<template>
  <div ref="wrapper" id="wrapper">
    <div class="content"> 
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    
    this.scroll = new BScroll(this.$refs.wrapper,{
      // pullingUp: true,
      click: true, // scroll范围内开启点击事件
      probeType: this.probeType, // 开启滑动位置获取 0,1, 2, 3(惯性)
      pullUpLoad: this.pullUpLoad, // 开启上拉事件
    })
    console.log('scroll',this.scroll)  
    
    // 获取滑动位置 probeYype
    this.scroll.on('scroll', position => {
      // console.log(position);
      this.$emit('scrollPosition', position)
    })

    // 上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {     
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      console.log('---')
      this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll.y
    }
  },
}
</script>

<style>
  /* #wrapper .content {
    height: 100%;
  } */
</style>