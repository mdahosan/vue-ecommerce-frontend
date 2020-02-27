import Vue from 'vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home"

const routes = [
  {
    path: '/login',
    name:'login',
    component: Login,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/register',
    name:'register',
    component: Register ,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/home',
    name:'home',
    component: Home ,
    meta: {
      forAuth: true
    }
  }
]

const Router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default Router
