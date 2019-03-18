export const state = () => ({
  user: null
});

export const mutations = {
  setUser(state, data) {
    state.user = data;
  }
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      console.log("client", req.session.user);
      commit("setUser", req.session.user);
    }
  }
};
