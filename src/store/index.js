import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    selected: '',
  },

  mutations: {
    updateSelected (state, selected) {
      state.selected = selected
    }
  },

  actions: {
  },

  modules: {
  }
})
