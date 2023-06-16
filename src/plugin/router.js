import { createRouter, createWebHistory } from "vue-router";
// import Unscribe from "../views/Unscribe.vue";
import Home from "../views/HomeView.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },

  {
    path: "/unscribe",
    name: "unscribe",
    component: () => import("../views/Unscribe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
