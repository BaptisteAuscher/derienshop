import axios from "axios";



const state = {

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
    },
    
    addProduct (context, newProduct) {
        event.preventDefault();
        console.log(newProduct);
        const config = {
            method: 'post',
            url: 'http://localhost:3000/api/products',
            headers: { },
            data : newProduct
        };

        axios(config)
            .then(res => console.log(JSON.stringify(res.data)))
            .catch(err => console.log(err));

        context.dispatch('fetchProducts');
    },

    deleteProduct(context, id) {
        const config = {
            method: 'delete',
            url: 'http://localhost:3000/api/products/' + id,
            headers: { },
        };

        confirm('u sure ?')

        axios(config)
            .then(res => console.log(JSON.stringify(res.data)))
            .catch(err => console.log(err));

        context.dispatch('fetchProducts');
    }

};

export default {
    state,
    getters,
    actions,
    mutations
};