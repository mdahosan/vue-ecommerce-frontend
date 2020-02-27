import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Router from "./routes";
import Store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Store.getters.isAuthenticated){
        next({
          path: '/home'
        })
      }else next()
    }else if(to.matched.some(record => record.meta.forAuth)){
      if(! Store.getters.isAuthenticated){
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
  router: Router,
  store: Store
});
