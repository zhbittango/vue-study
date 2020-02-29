<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="isStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 父组件的参数传递
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'dodgerblue'
    },
  },

  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    // 计算当前路由是否处与激活状态
    isActive() { 
      return this.$route.path.indexOf(this.path) !== -1
    },
    isStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabClick() {
      this.$router.replace(this.path)
      console.log(this.activeColor);
      
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* display: block; */
}

</style>