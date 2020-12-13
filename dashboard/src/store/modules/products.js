import axios from "axios";



const state = {
    products: [
        {
            id: 1,
            name: "hello",
            price: 70
        }
    ]
};

const getters = {
    getProducts: (state) => state.products
};

const mutations = {
    setProducts: (state, products) => state.products = products
};

const actions = {
    async fetchProducts ({ commit }) {
        const response = await axios.get('http://localhost:3000/api/products');

        console.log(response.data);
        commit('setProducts', response.data);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};