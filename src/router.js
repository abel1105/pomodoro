import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Panel from './views/Panel';
import TodoPanel from '@/views/panels/TodoPanel';
import ReportPanel from '@/views/panels/ReportPanel';
import AlarmPanel from '@/views/panels/AlarmPanel';

Vue.use(Router);

export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/pomodoro/' : '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/panel',
      name: 'panel',
      component: Panel,
      children: [
        {
          path: 'todo',
          name: 'todo',
          component: TodoPanel
        },
        {
          path: 'report',
          name: 'report',
          component: ReportPanel
        },
        {
          path: 'alarm',
          name: 'alarm',
          component: AlarmPanel
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
