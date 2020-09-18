import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenNavigation: true
  },
  mutations: {
    changeIsOpenNavigation (state, value) {
      state.isOpenNavigation = value
    }
  },
  actions: {
  },
  modules: {
  }
})
