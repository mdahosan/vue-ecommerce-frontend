import Vue from 'vue'

import VueRouter from "vue-router";

Vue.use(VueRouter);
import Store from "./store";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import ProductDetails from "./components/products/Details";
import ProductCreate from "./components/products/Create";
import ProductEdit from "./components/products/Edit";

function authGuard(from, to, next) {
    if(Store.getters.isAuthenticated){
      next();
    }else{
      Router.replace('/login');
    }
}

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
    component: Home,
    beforeEnter:authGuard
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/products/:product',
    component: ProductDetails
  },
  {
    path: '/product_create',
    name: 'products.create',
    component: ProductCreate,
    beforeEnter:authGuard
  },
  {
    path: '/product_edit/:product',
    name: 'products.edit',
    component: ProductEdit,
    beforeEnter:authGuard
  }
]

const Router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default Router
