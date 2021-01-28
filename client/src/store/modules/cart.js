const state = {
    cart: {
        items: [],
        subtotal: 0
    },
    message: {
        type: "",
        message: ""
    }
};

const getters = {
    getCart: state => state.cart,
    getMessage: state => state.message
};

const mutations = {
    setCart: (state, cart) => {
        state.cart = cart;
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToCart: (state, item) => {
        state.cart.items.push(item);
        state.cart.subtotal += item.price;
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setMessage: (state, message) => {
        state.message = {
            type: message.type,
            message: message.message
        }
    }
};

const actions = {
    addItemToCart: ({commit}, item) => {
        //Tester si la taille existe
        const checkIfSizeExist = new Promise((resolve, reject) => {
            item.selectedColor.sizes.forEach(size => {
                if (item.size == size.size) {
                    resolve(size)
                }
            });
            reject({type: "error", message: "Veuillez indiquer votre taille."})
        });

        checkIfSizeExist
            .then(size => {
                if (size.qty > 0) {
                    const newItem = {
                        name: item.product.name,
                        color: item.selectedColor.color,
                        size: item.size,
                        price: item.product.price,
                        image_link: item.selectedColor.images[0].link,
                        qty: 1
                    };
                    commit("addToCart", newItem);
                    commit("setMessage", {type: 'success', message: 'Item ajouté au panier.'})              
                } else {
                    return commit("setMessage", {type: "error", message: "Cette taille n'est plus disponible."})
                }
            })
            .catch(message => {
                return commit("setMessage", message)
            });
    },

    fetchCart: ({commit}) => {
        let cart = JSON.parse(localStorage.cart);
        commit("setCart", cart);
    },

    emptyCart: ({ commit }) => {
        let cart = {
            items: [],
            subtotal: 0
        };
        commit("setCart", cart);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}