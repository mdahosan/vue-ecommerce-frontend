import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Router from "../routes";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Auth from './packages/auth'
import axios from 'axios'
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Auth);

axios.defaults.baseURL = 'http://laravel6.test/';
axios.defaults.params = {}
axios.defaults.headers.common['Authorization'] = 'Bearer '+Vue.auth.getToken();;
Vue.prototype.$http = axios;

Router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/home'
        })
      }else next()
    }else if(to.matched.some(record => record.meta.forAuth)){
      if(! Vue.auth.isAuthenticated()){
        next({
          path: '/login'
        })
      }else next()
    } else next()
  }
);

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
