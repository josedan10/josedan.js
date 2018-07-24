import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Contact from '@/components/pages/Contact';
import Error404 from '@/components/pages/Error404';
import Portfolio from '@/components/pages/Portfolio';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
    }
  ]
});
