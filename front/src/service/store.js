import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blackTheme: false,
    templateSelected: "opord"
  },
  mutations: {
    SET_BLACKTHEME: (state, val) => { state.blackTheme = val },
    SET_TEMPLATE: (state, val) => { state.templateSelected = val }
  },
  actions: {
  },
  getters: {
    blackTheme: state => state.blackTheme,
    templateSelected: state => state.templateSelected
  },
  plugins: [createPersistedState()]
})
