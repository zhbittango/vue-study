<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
// import { debounce } from '@/common/utils'

export default {
  // props: {
  //   message: {
  //     type: String
  //   },
  //   isshow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: "",
      isShow: false,
      timer: null,
      // debounces: null
    };
  },
  created() {
    // this.debounces = debounce(args => {
    //   this.message = "";
    //   this.isShow = false;
    // });
  },
  methods: {
    show(message = "提示文字", durations = 2000) {
      this.message = message;
      this.isShow = true;
      // this.debounces(2000);
      this._debounce(durations);
    },
    // 防抖
    _debounce(durations) {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.message = '';
        this.isShow = false
      }, durations);
    }
  }
};
</script>

<style>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  /* max-width: 100px; */
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  transform: translate(-50%, -50%);
  line-height: 25px;
}
</style>