import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flag:true,
    foodshow:true,
    addressshow:false,
    foodId:"",
    address:[]
  },
  
  mutations: {
    infoaddress(state,data){
      state.address.push(data);
    }
  },
  actions: {}
});
