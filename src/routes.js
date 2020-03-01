import Vue from 'vue'

import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import ProductDetails from "./components/products/Details";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/products/:product',
    component: ProductDetails
  }

]

const Router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default Router
