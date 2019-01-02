import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


/*const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken() */
//localStorage에 해서.. state를 제외한 나머지 항목이 전부 필요없는게 아닐까 싶다. 차차생각해보자 어떻게 처리할지... 
export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
    profile: {},
    },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name,
  },
  mutations: {
    AUTH_REQUEST (state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS (state, data) {
      state.status = 'success'
      state.token = data.jwt
      state.profile = data.user
    },
    AUTH_ERROR (state) {
      state.status = 'error'
    },
    AUTH_LOGOUT (state) {
      state.status = ''
      state.profile = {}
      state.token = ''
    }
  },
  actions: {
   AUTH_REQUEST ({ commit }, authUrl) {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit("AUTH_REQUEST")
        axios({url: authUrl, method: 'GET' })
          .then(resp => {
            const token = resp.data.jwt
            localStorage.setItem('user-token', token) // store the token in localstorage
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit("AUTH_SUCCESS", resp.data)
            // you have your token, now log in your user :)
            //dispatch("USER_REQUEST")
            resolve(resp)
          })
          .catch(err => {
            commit("AUTH_ERROR", err)
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
            reject(err)
        })
      })
    },
  AUTH_LOGOUT ({commit}) {
    return new Promise((resolve) => {
      commit("AUTH_LOGOUT")
      localStorage.removeItem('user-token') // clear your user's token from localstorage
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
  }
}) 