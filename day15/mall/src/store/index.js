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

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state, payload) {
      console.log(state);
      console.log(payload);
      // state.cartList.push(payload)
    } 
  },
  actions: {
    
  }
})

export default store