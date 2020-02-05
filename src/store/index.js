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

        addFav (state, { id, name }) {
            let fav = {
                id,
                name
            }
            state.favourites.push(fav)
        },
        remFav(state, id) {
            let filtered = state.favourites.filter(cat => cat.id !== id);
            state.favourites = filtered;
        },

        reset (state) {
            state.selected = '',
            state.selectedId = '',
            state.favourites = []
        }
    },

    plugins: [createPersistedState()],

    actions: {
        updateId ({ commit }, id) {
            commit('updateId', id)
        },

        updateSelected ({ commit }, value) {
            commit('updateSelected', value)
        },

    },

    modules: {
    }
})
