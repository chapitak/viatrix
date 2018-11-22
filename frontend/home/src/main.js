import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSimplemde from 'vue-simplemde'
import Vuex from 'vuex'
import store from './store'
import 'es6-promise/auto'
import 'simplemde/dist/simplemde.min.css'


Vue.use(Vuex)
Vue.use(VueSimplemde)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
