<template>
  <div class='tab-bar-item'>
    <slot name="item-img"></slot>  
    <slot name="item-text"></slot>  
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    display: block;
  }
</style>