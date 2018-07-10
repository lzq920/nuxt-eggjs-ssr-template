import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setToken(state, data) {
        state.token = data;
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        console.error(req.headers);
      }
    }
  });

export default store;
