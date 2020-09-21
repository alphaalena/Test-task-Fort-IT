import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
    searchValue: ''
  },
  mutations: {
    addOrder(state,value) {
      state.orders.push(value)
    },
    deleteOrder(state, id) {
     state.orders = state.orders.filter(i => i.id !==id)
    },
    setSearchValue(state, value) {
      state.searchValue = value
    }
  },
  getters: {
    filteredOrders(state) {
      return state.orders.filter(item => Object.values(item).join().toLowerCase().includes(state.searchValue.toLowerCase()))
    }
  }
})
