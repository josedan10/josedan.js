import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Contact from '@/components/pages/Contact';
// import

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    }
    // {
    //   path: '*',
    //   name: '404',
    //   component: Error404
    // }
  ]
});
