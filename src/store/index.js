import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import * as actions from "./actions";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "prodiction";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
});
