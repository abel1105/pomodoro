import Vue from 'vue';
import { MdIcon } from 'vue-material/dist/components';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import 'vue-material/dist/vue-material.min.css';

Vue.config.productionTip = false;
Vue.use(MdIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
