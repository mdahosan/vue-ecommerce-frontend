import Vue from 'vue'

import VueRouter from "vue-router";
Vue.use(VueRouter)

import Login from "./src/components/auth/Login";
import Register from "./src/components/auth/Register";

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const Router = new VueRouter({
  routes // short for `routes: routes`
})

export default Router
