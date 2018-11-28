import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken() 
//localStorage에 해서.. state를 제외한 나머지 항목이 전부 필요없는게 아닐까 싶다. 차차생각해보자 어떻게 처리할지... 
export default new Vuex.Store({
  state: {
    accessToken: localStorage.accessToken
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
      localStorage.accessToken = null
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