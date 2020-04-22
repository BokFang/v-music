import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "recommand",
    path: "/recommand",
    component: () => import("../components/Recommand")
  },
  {
    name: "singer",
    path: "/singer",
    component: () => import("../components/Singer")
  },
  {
    path: "*",
    redirect: "/recommand"
  }
];

const router = new VueRouter({
  routes
});

export default router;
