const state = {
  windowWidth: window.innerWidth
};

const getters = {
  getWindowWidth: state => state.windowWidth
};

const mutations = {
  setWindowWidth(state) {
    state.windowWidth = window.innerWidth;
  }
};

const actions = {
  formatPrice: async (context, price) =>
    (await (price / 100).toFixed(2)) + "EUR"
};

export default {
  state,
  getters,
  actions,
  mutations
};
