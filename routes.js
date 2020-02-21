import Vue from 'vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "./src/components/auth/Login";
import Register from "./src/components/auth/Register";

const routes = [
  { path: '/login', name:'login', component: Login },
  { path: '/register', name:'register', component: Register }
]

const Router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default Router
