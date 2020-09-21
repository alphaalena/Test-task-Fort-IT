import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfPosition: [],
    search: ''
  },
  mutations: {
    changeListOfPosition (state,value) {
      state.listOfPosition.push(value)
    },
    deleteOrder (state, id) {
     state.listOfPosition = state.listOfPosition.filter(i => i.id !==id)
    },
    changeSearch (state, value) {
      state.search = value
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    filteredOrders (state) {
      return state.listOfPosition.filter(item => Object.values(item).join().toLowerCase().includes(state.search.toLowerCase()))
    }
  }
})
