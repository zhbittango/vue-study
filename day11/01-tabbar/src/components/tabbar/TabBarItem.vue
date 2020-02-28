<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    tabClick() {
      this.$router.replace(this.path)
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
.active{
  color: dodgerblue
}
</style>