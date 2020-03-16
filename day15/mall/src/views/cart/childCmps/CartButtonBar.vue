<template>
  <div class="car-button-bar">
    <div class="select">
      <check-button class="check-button" v-model="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="sum">合计：￥{{totalPrice}}</div>
    <div class="buy">
      去计算({{cartNum}})
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import { mapGetters } from "vuex"; //把getters变成computed方式使用

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters({
      list: "cartList"
    }),
    totalPrice() {
      // console.log(this.list);
      return this.list
        .filter(item => item.checked)
        .reduce((prev, item) => {
          return prev + item.newPrice * item.count;
        }, 0)
        .toFixed(2);
    },
    cartNum() {
      return this.list.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.list.length === 0) return false
      return !(this.list.find(item => !item.checked))
    }
  }
};
</script>

<style>
.car-button-bar {
  position: absolute;
  bottom: 49px;
  z-index: 10;
  width: 100%;
  height: 40px;
  background-color: #eee;
  box-shadow: 0 -2px 3px rgba(100, 100, 100, 0.2);
  /* line-height: 40px; */
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  font-size: 14px;
}

.car-button-bar .select{
  width: 70px;
}

.car-button-bar .select span{
  margin-left: 4px;
  vertical-align: 3px;
}



.car-button-bar .buy {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: orangered;
  color: white;
  font-size: 16px;
}

.check-button {
  display: inline-block;
}

</style>