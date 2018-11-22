import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:3000'

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken() 

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {

  },
  mutations: {
    LOGIN (state, {accessToken}) {
      state.accessToken = accessToken

      localStorage.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  actions: {
    LOGIN ({commit}, {accessToken}) {
       commit('LOGIN', {accessToken})
    },

    /*LOGIN ({commit}, {email, password}) {
      return axios.post(`${resourceHost}/login`, {email, password})
        .then(({data}) => commit('LOGIN', data))
    }*/
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  }
}) 