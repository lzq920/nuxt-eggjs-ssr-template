import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      login(state, data) {
        state.token = data;
      },
      logout(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.token) {
          commit("login", req.session.token);
        }
      }
    }
  });

export default store;
