import Vue from "vue";
import Vuex from "vuex";
import boardModule from "./modules/boardModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    boardModule,
  },
});
