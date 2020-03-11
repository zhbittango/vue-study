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
    this.refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => this.refresh()
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log(1);
  },
}

