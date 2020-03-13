import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blackTheme: false
  },
  mutations: {
    SET_BLACKTHEME: (state, val) => { state.blackTheme = val }
  },
  actions: {
    
  },
  getters: {
    blackTheme: state => state.blackTheme
  },
  plugins: [createPersistedState()]
})
