<template>
  <div class="my">
    <div class="header">
      <div class="title">我的信息</div>
      <div class="info">
        <img src="~/assets/img/profile/avatar.svg" />
        <div class="center">
          <p class="login">登录/注册</p>
          <p class="iphone"><van-icon name="graphic" />暂无绑定的手机号</p>
        </div>
        <div class="i">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="detail">
      <div>
        <p><span>0.00</span>&nbsp;元</p>
        <p>我的余额</p>
      </div>
      <div class="center">
        <p><span>0</span>&nbsp;个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>&nbsp;分</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="news">
      <div>
        <img src="~/assets/img/profile/message.svg" />
        <span>我的消息</span>
      </div>
      <div class="shop">
        <img src="~/assets/img/profile/pointer.svg" />
        <p>我的商城</p>
      </div>
      <div>
        <img src="~/assets/img/profile/vip.svg" />
        <p>会员卡</p>
      </div>
    </div>
    <div class="cart">
      <div>
        <img src="~/assets/img/profile/cart.svg" />
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~/assets/img/profile/shopping.svg" />
        <p class="app">下载购物APP</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.my .header {
  padding: 10px 10px 20px 10px;
  height: 100px;
  background-color: #ff8e96;
}
.my .header .title {
  color: white;
  font-size: 20px;
  width: 80px;
  line-height: 33px;
  margin: 0 auto;
  text-align: center;
}
.my .header .info {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  color: white;
  /* margin-top: 5px; */
}
.my .header .info img {
  width: 75px;
  height: 75px;
}
.my .header .info .center {
  /* margin-left: -75px; */
  /* display: flex;
  flex-direction: column; */
}
.my .header .info .center .login {
  font-size: 20px;
}
.my .header .info .center .iphone {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.my .header .info .i {
  font-size: 25px;
}
.my .detail {
  display: flex;
  height: 90px;
  border-bottom: 6px solid #f2f2f2;
}
.my .detail .center {
  border-left: 1px solid #fafafa;
  border-right: 1px solid #fafafa;
}
.my .detail div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 16px;
}
.my .detail div p span {
  color: #e67962;
  font-weight: bold;
}
.my .news {
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 0 15px;
  border-bottom: 6px solid #f2f2f2;
}
.my .news .shop p {
  display: flex;
  align-items: center;
  width: calc(100% - 30px);
  height: 100%;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}
.my .news div {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.my .news div img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}
.my .cart {
  padding: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 105px;
}
.my .cart div {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.my .cart div img {
  width: 30px;
  height: 30px;
}
.my .cart div .app {
  display: flex;
  align-items: center;
  width: calc(100% - 30px);
  height: 100%;
  border-top: 1px solid #f2f2f2;
}
</style>
