<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
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
      message: '',
      isShow: false  
    }
  },
  methods: {
    show(message = '提示文字', durations = 1500) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = '';
        this.isShow = false
      }, durations);
    }
  },
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
}
</style>