import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		newProduct: {},
		message: String
	},
	mutations: {
		setNewProduct (state, newProduct) {
			state.newProduct = newProduct;
		}
	},
	actions: {
		addProduct (context, newProduct) {
			event.preventDefault();

			context.commit('setNewProduct', newProduct);
			context.dispatch('postProduct');
		},

		postProduct () {
			axios.post('http://localhost:3000/api/products', this.newProduct).then(response => this.message = response.message).catch(err => console.log(err));
		}
	},
	modules: {}
});
