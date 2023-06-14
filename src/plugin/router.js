import { createRouter, createWebHistory } from "vue-router";
import Unscribe from "../views/Unscribe.vue";
import Home from "../views/HomeView.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },

  {
    path: "/unscribe",
    component: Unscribe,
    name: "unscribe",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
