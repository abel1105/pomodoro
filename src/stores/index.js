import Vue from 'vue';
import Vuex from 'vuex';
import main from '@/stores/modules/main';
import alarm from '@/stores/modules/alarm';
import report from '@/stores/modules/report';
import todo from '@/stores/modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    alarm,
    report,
    todo
  }
});
