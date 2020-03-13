import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './service/store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/style/style.css'
import Vue2TouchEvents from 'vue2-touch-events';
import 'leaflet/dist/leaflet.css';
Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
