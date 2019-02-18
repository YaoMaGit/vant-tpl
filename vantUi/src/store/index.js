import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    count: 100,
  },
  mutations: {
    max(state) {
      state.count++
    },
    min(state) {
      state.count--
    },
    tokenFn(state,token){
      console.log(token)
      state.token = token
    },
  },
  actions: {

  }
})