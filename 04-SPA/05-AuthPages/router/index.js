import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from '../views/IndexPage';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  base: '/04-SPA/05-AuthPages',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/login',
      component: () => import('../views/LoginPage'),
      name: 'login'
    },
    {
      path: '/register',
      component: () => import('../views/RegisterPage'),
      name: 'register'
    }
  ],
});
