import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    selected: '',
    selectedId: '',
    favourites: [],
  },

  mutations: {
    updateSelected (state, selected) {
      state.selected = selected
    },

    updateId (state, id) {
      state.selectedId = id
    },

    addFav (state, fav) {
      state.favourites.push(fav)
    },
    reset (state) {
      state.selected = '',
      state.selectedId = '',
      state.favourites = []
    }
  },

  plugins: [createPersistedState()],

  actions: {
    
  },
  modules: {
  }
})
