import { createStore } from "vuex";

export default createStore({
  state: {
    windowWidth: window.innerWidth
  },
  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getWindowWidth: state => state.windowWidth
  }
});
