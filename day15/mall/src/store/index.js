/*
 * Filename: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall\src\store\index.js
 * Path: d:\wampsever\wamp64\www\web\svn-web\vue\day15\mall
 * Created Date: Thursday, March 12th 2020, 11:52:49 pm
 * Author: zhbittango
 * 
 * Copyright (c) 2020 Your Company
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  actions,
  mutations,
  getters,
  // getters,
  // modules,
/*   actions: {
    addCart(context, payload) {
      // state.cartList.push(payload)
      console.log(context);
      
      let isInCart = false;
      const cartList = context.state.cartList;
      
      for(let i = 0; i < cartList.length; i++) {
        if(payload.iid == cartList[i].iid){
          context.commit('addCount', i)
          // cartList[i].count ++;
          isInCart = true;
          // console.log(11);
          break;
        }
      }
      if(!isInCart) {
        context.commit('addToCart', payload)
        // payload.count = 1;
        // cartList.push(payload);
      }
    } 
  },
  mutations: {
    addCount(state, payload) {
      state.cartList[payload].count ++;
    },
    addToCart(state, payload) {
      payload.count = 1;
      state.cartList.push(payload);
    }
  } */
})

export default store