import Vue from 'vue';
import dateFilter from '@/filters/dates.filter';
import Paginate from 'vuejs-paginate';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import tooltipDirective from '@/directives/tooltip.directive';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader.vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: 'AIzaSyBwOiWstqQKsT-PLLFupagYRz081St_MVM',
  authDomain: 'vue-7723a.firebaseapp.com',
  databaseURL: 'https://vue-7723a.firebaseio.com',
  projectId: 'vue-7723a',
  storageBucket: 'vue-7723a.appspot.com',
  messagingSenderId: '284461040401',
  appId: '1:284461040401:web:3b975746c9d7818f20c2b0',
  measurementId: 'G-50R1FGJXX3',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
