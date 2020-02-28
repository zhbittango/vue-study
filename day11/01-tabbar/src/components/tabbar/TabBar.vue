<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .tab-bar{
    width: 100%;
    height: 49px;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.02);
    padding: 2px 0;
    box-sizing: border-box;
  }
</style>