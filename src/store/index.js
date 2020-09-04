import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';
import category from './category';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  getters: {
    error: (state) => state.error,
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;
      const result = fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`).then((respond) => respond.json());
      return result;
    },
  },
  modules: {
    auth,
    info,
    category,
  },
});
