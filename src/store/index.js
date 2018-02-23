/**
 * Created by HP on 2018/1/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ShopCarTool from '../util/shop-car-tool'

let shopCar = new ShopCarTool()

Vue.use(Vuex)


const AppLoading = { // 路由状态
  state: {
    nowStatus: 'loading'
  },
  mutations: {
    nowStatus (state, data) {
      state.nowStatus = data
    }
  },
  getters: {
    nowStatus: state => {
      return state.nowStatus
    }
  }
}


const ShopCar = { // 购物车
  state: {
    length: shopCar.length()
  },
  mutations: {
    setShopCarLength (state, length) {
      state.length = length
    }
  },
  getters: {
    getShopCarLength: state => {
      return state.length
    }
  }
}

export default new Vuex.Store({
  modules: {
    AppLoading,
    ShopCar
  }
})
