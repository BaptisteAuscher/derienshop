import axios from "axios";



const state = {
    product: {},
    products: []
};

const getters = {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product
};

const mutations = {
    setProducts: (state, products) => state.products = products,
    setProduct: (state, product) => state.product = product
};

const actions = {
    async fetchProducts ({ commit }) {
        const response = await axios.get(process.env.VUE_APP_API_URL + 'api/products');
        commit('setProducts', response.data);
    },
    deleteProduct(context, id) {
        const config = {
            method: 'delete',
            url: process.env.VUE_APP_API_URL + 'api/products/' + id,
            headers: { },
        };

        confirm('u sure ?')

        axios(config)
            .then(res => console.log(JSON.stringify(res.data)))
            .catch(err => console.log(err));
        
        context.dispatch('fetchProducts');
    },

    fetchProduct({ commit }, id) {

        const response =  axios.get(process.env.VUE_APP_API_URL + 'api/products/' + id);

        commit('setProduct', response.data);
    }

}; 

export default {
    state,
    getters,
    actions,
    mutations
};