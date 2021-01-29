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
    getCart: state => state.cart
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
    INCREMENT_QTY: (state, index) => {
        state.cart.items[index].qty += 1;
        state.cart.subtotal += state.cart.items[index].price;

        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REDUCE_QTY: (state, index) => {
        state.cart.items[index].qty -= 1;
        state.cart.subtotal -= state.cart.items[index].price;

        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REMOVE_ITEM: (state, index) => {
        let item = state.cart.items[index];
        state.cart.subtotal -= item.price * item.qty;
        state.cart.items.splice(index,1);

        localStorage.setItem("cart", JSON.stringify(state.cart));

    }
};

const actions = {
    testItem: ({ state }, item) => {
        return new Promise((resolve, reject) => {
            item.selectedColor.sizes.forEach(size => {
                if (item.size == size.size) {
                    if (size.qty > 0) {
                        const newItem = {
                            name: item.product.name,
                            color: item.selectedColor.color,
                            size: item.size,
                            price: item.product.price,
                            image_link: item.selectedColor.images[0].link,
                            qty: 1
                        };
                        state.cart.items.forEach(itemInCart => {
                            if (itemInCart.name == newItem.name && itemInCart.color == newItem.color && itemInCart.size == newItem.size) {
                                reject({type: "error", message: "Cet item est déjà dans votre panier."});
                            }
                        });
                        resolve(newItem);
                    } else {
                        reject({type: "error", message: "Cette taille n'est plus disponible."});
                    }
                }
            });
            reject({type: "error", message: "Veuillez indiquer votre taille."});
        });
    },
    addItemToCart: ({ commit, dispatch}, item) => {
        dispatch("testItem", item).then(newItem => {
            commit("addToCart", newItem);
            commit("ui/setMessage", {type: 'success', message: 'Item ajouté au panier.'});
        }).catch(message => {
            commit("ui/setMessage", message);
        });
    },

    fetchCart: ({commit}) => {
        if (localStorage.cart && localStorage.cart) {
            let cart = JSON.parse(localStorage.cart);
            commit("setCart", cart);
        }
    },

    emptyCart: ({ commit }) => {
        let cart = {
            items: [],
            subtotal: 0
        };
        commit("setCart", cart);
    },

    incrementQty: ({ commit }, index) => {
        commit("INCREMENT_QTY", index);
    },
    reduceQty: ({ state, commit }, index) => {
        if (state.cart.items[index].qty < 2) {
            return commit("ui/setMessage" , {type: 'error', message: 'Cette action est impossible.'});
        }
        commit("REDUCE_QTY", index);
    },
    removeItem: ({ commit }, index) => {
        commit("REMOVE_ITEM", index);
        commit("ui/setMessage", {type: 'success', message: 'Item supprimé avec succès.'})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}