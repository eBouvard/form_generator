import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import opordTemplate from "@/assets/formTemplate/opord.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blackTheme: false,
    templateSelected: opordTemplate
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
