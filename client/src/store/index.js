import { createStore } from "vuex";

import ui from "./modules/ui.js";
import products from "./modules/products.js";
import cart from "./modules/cart.js";

export default createStore({
  modules: {
    ui,
    products,
    cart
  }
});
