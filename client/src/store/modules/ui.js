const state = {
  windowWidth: window.innerWidth,
  message: {
    type: "",
    message: ""
  }
};

const getters = {
  getWindowWidth: state => state.windowWidth
};

const mutations = {
  setWindowWidth(state) {
    state.windowWidth = window.innerWidth;
  },
  setMessage: (state, message) => {
    state.message = {
        type: message.type,
        message: message.message
    }
  }
};

const actions = {
  formatPrice: async (context, price) =>
    (await (price / 100).toFixed(2)) + "EUR",
  
};

export default {
  state,
  getters,
  actions,
  mutations
};
