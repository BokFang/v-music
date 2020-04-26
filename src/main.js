import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import "./common/scss/index.scss";
import axios from "axios";
import VueLazyload from "vue-lazyload";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

fastclick.attach(document.body);

Vue.use(VueLazyload, {
  error: require("./common/images/wyy.png"),
  loading: require("./common/images/wyy.png"),
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
