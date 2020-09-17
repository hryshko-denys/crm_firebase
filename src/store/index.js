import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';
import category from './category';
import record from './record';

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
      // const key = process.env.VUE_APP_FIXER;
      const result = fetch('https://api.exchangerate-api.com/v4/latest/EUR').then((respond) => respond.json());
      return result;
    },
  },
  modules: {
    auth,
    info,
    category,
    record,
  },
});
