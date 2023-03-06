import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/home.vue";
import Dgi from "../components/dgi/dgi.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dgi",
      name: "dgi",
      component: Dgi,
    }
  ],
});

export default router;
