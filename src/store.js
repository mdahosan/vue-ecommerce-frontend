import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from '../routes';

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.token = userData.token
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData(state){
      state.token = null;
    }
  },
  actions: {
    login ({commit}, authData) {
      axios.post('/oauth/token', authData)
        .then(res => {
          console.log(res);
          console.log(res.data.access_token)
          commit('authUser', {
            token: res.data.access_token,
          })
          localStorage.setItem('token', res.data.access_token)
          this.dispatch('fetchUser');
          router.replace('home')
        })
        .catch(error => console.log(error))
    },
    fetchUser ({commit, state}) {

      if (!state.token) {
        return
      }

      axios.get('/api/user')
        .then(res => {
          commit('storeUser', res.data)
        })
        .catch(error => console.log(error))
    },
    logout({commit}){
      commit('clearAuthData');
      router.replace('login')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated(state)
    {
      return state.token !== null;
    }
  }
})
