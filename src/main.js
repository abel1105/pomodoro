import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import { MdIcon, MdRadio } from 'vue-material/dist/components';
import App from './App.vue';
import router from './router';
import store from './stores';
import 'normalize.css';
import 'vue-material/dist/vue-material.min.css';

Vue.config.productionTip = false;
Vue.use(MdIcon);
Vue.use(MdRadio);

Vue.use(VueAnalytics, {
  id: 'UA-142485991-1',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
