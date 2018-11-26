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

//Auth Handling
const token = localStorage.accessToken 
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
