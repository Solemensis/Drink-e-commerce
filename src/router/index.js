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
      component: ingredients,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
  ],
});

export default router;
