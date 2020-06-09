import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Found from "./views/Found.vue";
import Order from "./views/Order.vue";
import Main from "./views/Main.vue";
import Header from "./views/Header.vue";
import Store from "./components/stores.vue";
import Address from "./components/Address.vue";

import "./assets/mui/css/mui.css";

import Food from "./views/Foods.vue";
import "../src/assets/js/vue.js"

// import { TreeSelect,Sidebar, SidebarItem } from 'vant';
// Vue.use(TreeSelect).use(Sidebar).use(SidebarItem);

import './assets/vant/lib/tree-select/style';


Vue.use(Router);


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      // redirect:"/home"
      name: "header",
      component: Header
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/found",
      name: "found",
      component:Found
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/Found.vue")
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/main",
      name: "main",
      component: Main
    },
    {
      path: "/food",
      name: "food",
      component: Food
    },
    {
      path: "/stores",
      name: "stores",
      component: Store
    },
    {
      path: "/address",
      name: "address",
      component: Address
    }
  ],
  linkActiveClass:'is-selected'
});
