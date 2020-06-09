import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "mint-ui/lib/style.css";
// import "./css/iconfont.css"
import "./assets/css/iconfont.css";

import mint from "mint-ui";
Vue.use(mint);
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";

import "./assets/mui/css/mui.min.css";

// import mui from './assets/mui/js/mui.js';  
// // 可以顺便绑定到Vue实例  
// Vue.prototype.$mui = mui; 

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

import "swiper/dist/css/swiper.css";
import 'vant/lib/button/style';
import 'vant/lib/stepper/style';
import 'vant/lib/tag/style';
import 'vant/lib/rate/style';
import 'vant/lib/area/style';
import 'vant/lib/address-edit/style';
import { Button,Stepper,AddressEdit,Area } from 'vant';
Vue.use(Button).use(Stepper).use(AddressEdit).use(Area);
import { TreeSelect,Sidebar,SidebarItem,Tag,Rate } from 'vant';
Vue.use(TreeSelect).use(Sidebar).use(SidebarItem).use(Tag).use(Rate);

import Vant from "vant";
import "vant/lib/index.css"
Vue.use(Vant);

import { Header, Tabbar, TabItem } from 'mint-ui'
Vue.use(Header).use(Tabbar).use(TabItem)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
