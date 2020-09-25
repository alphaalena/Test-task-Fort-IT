import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: Array(30).fill(null).map((_, index) => {
      return {
        id: `${Date.now() + index}`,
        title: `Заказ ${index}`,
        clientName: `Клиент ${index}`,
        managerName: `Менеджер ${index}`,
        status: [ 'a', 'b', 'c' ][index % 3],
      }
    }),
    searchValue: '',
  },
  mutations: {
    addOrder (state, value) {
      state.orders.push(value)
    },
    deleteOrder (state, id) {
      state.orders = state.orders.filter(i => i.id !== id)
    },
    setSearchValue (state, value) {
      state.searchValue = value
    },
  },
  getters: {
    filteredOrders (state) {
      return state.orders.filter(item => Object.values(item).join().toLowerCase().includes(state.searchValue.toLowerCase()))
    },
  },
})
