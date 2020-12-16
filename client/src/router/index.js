import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shop.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/user/:id",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
