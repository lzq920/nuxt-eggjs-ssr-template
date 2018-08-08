import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      userinfo: {}
    },
    mutations: {
      login(state, data) {
        state.userinfo = data;
      },
      logout(state) {
        state.userinfo = {};
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.user) {
          commit("login", req.session.user);
        }
      }
    }
  });

export default store;
