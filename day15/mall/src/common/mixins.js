import { debounce } from './utils'


export const imgListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => this.refresh();
    this.$bus.$on('itemImgLoad', this.itemImgListener); // 监听itemImgLoad事件,执行函数
    // console.log(1);
  },
}

import BackTop from 'common/backtop/BackTop'

export const backTopMixin = {
  data() {
    return {
      isShowBack: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backTop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0) //面向插件
    },
    listenShow(position) {
      this.isShowBack = (-position.y) > 1000
    },
  },
}
