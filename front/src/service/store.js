import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blackTheme: false,
    template: 'opord',
    templateList: {}
  },
  mutations: {
    SET_BLACKTHEME: (state, val) => { state.blackTheme = val },
    SET_TEMPLATE: (state, val) => { state.template = val },
    SET_TEMPLATELIST: (state, array) => { state.templateList = array },
    UPDATE_TEMPLATE: (state, object) => { state.templateList[state.template] = object }
  },
  actions: {
  },
  getters: {
    blackTheme: state => state.blackTheme,
    template: state => state.template,
    templateList: state => state.templateList
  },
  plugins: [createPersistedState()]
})
