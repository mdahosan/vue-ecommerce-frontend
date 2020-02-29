import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from './routes';

Vue.use(Vuex)

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

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
    login ({commit, dispatch}, authData) {
      axios.post('/oauth/token', authData)
        .then(res => {
          commit('authUser', {
            token: res.data.access_token,
          })
          //
          dispatch('setLogoutTimer', res.data.expires_in)
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expires_in * 1000);
          localStorage.setItem('token', res.data.access_token)
          localStorage.setItem('expirationDate', expirationDate);

          axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

          dispatch('fetchUser');
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
    setLogoutTimer({commit, dispatch}, expirationTime){
      setTimeout(()=>{
        dispatch('logout');
      }, expirationTime);
    },
    logout({commit}){
      commit('clearAuthData');
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')
      router.replace('login')
    },
    tryAutoLogin({commit}){
      const token = localStorage.getItem('token');
      if(!token){
        return
      }
      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if(now >= expirationDate){
        return
      }
      commit('authUser',{
         token: token
      })
      router.replace('home')
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
