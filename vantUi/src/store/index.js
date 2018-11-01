import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100,
  },
  mutations: {
    max(state) {
      state.count++
    },
    min(state) {
      state.count--
    },
  },
  actions: {

  }
})