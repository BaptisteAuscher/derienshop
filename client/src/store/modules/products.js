import axios from "axios";
const state = {
  products: [],
  product: {},
  selectedColor: {}
};

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  setProduct: (state, product) => {
    state.product = product;
  },
  setSelectedColor: (state, payload) => {
    state.selectedColor = payload.product.colors[payload.id];
  }
};

const actions = {
  fetchProducts: ({ commit }) => {
    axios
      .get("http://localhost:3000/api/products")
      .then(res => commit("setProducts", res.data))
      .catch(err => console.log(err));
  },
  fetchProduct: ({ commit }, id) => {
    axios
      .get("http://localhost:3000/api/products/" + id)
      .then(res => {
        commit("setProduct", res.data);
        commit("setSelectedColor", {
          product: res.data,
          id: 0
        });
      })
      .catch(err => console.log(err));
  }
};

const getters = {
  getProducts: state => state.products,
  getProduct: state => state.product,
  getSelectedColor: state => state.selectedColor
};

export default {
  state,
  mutations,
  actions,
  getters
};
