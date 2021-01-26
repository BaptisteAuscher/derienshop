import { createStore } from "vuex";

import ui from "./modules/ui.js";
import products from "./modules/products.js";

export default createStore({
  modules: {
    ui,
    products
  }
});
