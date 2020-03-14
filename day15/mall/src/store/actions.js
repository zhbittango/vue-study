export default {
  // addCart(context, payload) {
  addCart({state, commit}, payload) { // 在actions中做判断，然后通过mutations进行函数追踪
    const info = state.cartList.find(item => item.iid == payload.iid) 
    if(info) commit('addCount', info)
    else commit('addToCart', payload)
  }
}