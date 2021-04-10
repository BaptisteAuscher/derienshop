import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Shop",
    component: () => import(/* webpackChunkName: "about" */ "../views/Shop.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/user/:id",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue")
  },
  {
    path: "/checkout/:step",
    name: "Checkout",
    component: () => import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
