export default {
  namespaced: "true",
  state: {
    darkMode: false,
  },
  getters: {
    darkMode: (state) => state.darkMode,
  },
  mutations: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {
    toggleDarkMode: ({ commit }) => {
      commit("toggleDarkMode");
    },
  },
};
