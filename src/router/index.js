import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "recommand",
    path: "/recommand",
    component: () => import("../components/recommand/Recommand"),
    children: [
      {
        path: ":id",
        component: () => import("../components/recommand/SonglistDetail")
      }
    ]
  },
  {
    name: "singer",
    path: "/singer",
    component: () => import("../components/singer/Singer"),
    children: [
      {
        path: ":id",
        component: () => import("../components/singer/SingerDetail")
      }
    ]
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
