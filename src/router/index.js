import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import ingredients from "../views/ingredients.vue";
import contact from "../views/contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/ingredients",
      name: "ingredients",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/ingredients.vue"),
      component: ingredients,
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/ingredients.vue"),
      component: contact,
    },
  ],
});

export default router;
