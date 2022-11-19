import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LaunchesView from "../views/LaunchesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LaunchesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
