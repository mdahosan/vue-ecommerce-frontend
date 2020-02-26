import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Router from "../routes";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource';
import Auth from './packages/auth'
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueResource);
Vue.use(Auth)

Vue.http.options.root = 'http://laravel6.test'
Vue.http.headers.common['Authorization'] = 'Bearer '+Vue.auth.getToken()

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
