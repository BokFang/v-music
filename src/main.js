import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import "./common/scss/index.scss";
import axios from "axios";
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
