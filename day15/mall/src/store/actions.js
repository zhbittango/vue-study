export default {
  // addCart(context, payload) {
  addCart({ state, commit }, payload) {
    // 在actions中做判断，然后通过mutations进行函数追踪
    return new Promise(resolve => {
      const info = state.cartList.find(item => item.iid == payload.iid);
      if (info) {
        commit("addCount", info);
        resolve("该商品数量 +1"); // 回调
      } else {
        commit("addToCart", payload);
        resolve("该商品已添加到购物车"); // 回调
      }
    });
  }
};
