import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue")
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue")
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/Messages.vue")
  },
  {
    path: "/messages/:id",
    name: "SingleMessage",
    component: () => import("../views/SingleMessage.vue")
  },
  {
    path: "/product/:id",
    name: "EditProduct",
    component: () => import("../views/EditProduct.vue")
  },
  {
    path: "/orders/:id",
    name: "SingleOrder",
    component: () => import("../views/SingleOrder.vue")
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: () => import("../views/Connexion.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
