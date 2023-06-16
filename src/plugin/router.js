import { createRouter, createWebHistory } from "vue-router";
// // import Unscribe from "../views/Unscribe.vue";
// import Home from "../views/HomeView.vue";

// const routes = [
//   { path: "/", component: Home, name: "Home" },

//   {
//     path: "/unscribe",
//     name: "unscribe",
//     component: () => import("../views/Unscribe.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

// Import your route components
import Home from "../views/HomeView.vue";
import About from "../views/Unscribe.vue";

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/unscribe", component: About },
  ],
});

export default router;
